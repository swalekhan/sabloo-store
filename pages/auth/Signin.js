import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '@/store/authSlice'
import Head from 'next/head'
import Link from 'next/link'
import { postData } from '@/utils/commenFunc/commenFunc'

const Signin = () => {
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        const data = await postData('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZDBnoYIsQENtLozpfIyn-81Z8_zwjHRc', { ...formData, returnSecureToken: true })
        setIsLoading(false)
        if (data?.error && data?.error?.message) {
            alert(data.error.message)
            return;
        }
        // .........store data in local storage................
        localStorage.setItem("token", JSON.stringify({ ...data }));
        dispatch(signup({ ...data }))

        // .............navigation...........
        router.back("/")
    }
    return (

        <>
            <Head>
                <title>Sign In</title>
                <meta name="description" content="Welcome to Sabloo Marble! Explore our extensive collection of high-quality tiles, lighting solutions, wooden materials, structural materials, and paints. Find the perfect tiles for your floors, walls, and backsplashes. Discover stylish lighting options to illuminate your space. Browse our selection of wooden materials for construction and woodworking projects. We also offer a range of structural materials for your building needs. Enhance your spaces with our premium paints in various colors and finishes. Shop now and bring your vision to life with Sabloo Marble." />
            </Head>

            <section className='signup'>
                <form onSubmit={submitHandler}>
                    <h2>Sign-in</h2>
                    <div className='form-group'>
                        <input type="text" id='email' name='email' required onChange={changeHandler} value={formData.email} placeholder='Please enter email' />
                    </div>

                    <div className='form-group'>
                        <input type="password" id='password' name='password' required onChange={changeHandler} value={formData.password} placeholder='Please enter password' />
                    </div>

                    <button type='submit'>{!isLoading ? "SignIn" : "SignIn..."}</button>

                    <Link href={'/auth/ForgetPass'} replace className='forgetpass'>Forget Password</Link>
                    <div className='change_form'>
                        <p>Do not have an account?</p>
                        <Link href={'/auth/Signup'} replace>Sign-up</Link>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Signin                                         