import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '@/store/authSlice'
import Head from 'next/head'
import Link from 'next/link'

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const router = useRouter()
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZDBnoYIsQENtLozpfIyn-81Z8_zwjHRc', {
                method: 'POST',
                body: JSON.stringify({ ...formData, returnSecureToken: true }),
                headers: {
                    'Content-Type': "application/json"
                }
            })

            const data = await res?.json()
            if (data.error && data.error.message) {
                alert(data.error.message)
                return;
            }
            // .........store data in local storage................
            localStorage.setItem("token", JSON.stringify({ ...data }));
            dispatch(signup({ ...data }))
        } catch (err) {
            console.log(err)
        }

        router.back("/")  // navigation .............
    }
    return (

        <>
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Welcome to Sabloo Marble! Explore our extensive collection of high-quality tiles, lighting solutions, wooden materials, structural materials, and paints. Find the perfect tiles for your floors, walls, and backsplashes. Discover stylish lighting options to illuminate your space. Browse our selection of wooden materials for construction and woodworking projects. We also offer a range of structural materials for your building needs. Enhance your spaces with our premium paints in various colors and finishes. Shop now and bring your vision to life with Sabloo Marble." />
            </Head>

            <section className='signup'>
                <form onSubmit={submitHandler}>
                    <h2>Sign-up</h2>
                    <div className='form-group'>
                        <input type='text' id='name' name='displayName' required onChange={changeHandler} value={formData.displayName} placeholder='Please enter name' />
                    </div>

                    <div className='form-group'>
                        <input type="text" id='email' name='email' required onChange={changeHandler} value={formData.email} placeholder='Please enter email' />
                    </div>

                    <div className='form-group'>
                        <input type='text' id='password' name='password' required onChange={changeHandler} value={formData.password} placeholder='Please enter password' />
                    </div>

                    <button type='submit'>Signup</button>

                    <div className='change_form'>
                        <p>Have an account?</p>
                        <Link href={'/auth/Signin'} replace >Sign-in</Link>
                    </div>
                </form>


            </section>
        </>
    )
}

export default Signup                                          