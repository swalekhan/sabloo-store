import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { postData } from '@/utils/commenFunc/commenFunc'

const Signin = () => {
    const [formData, setFormData] = useState({ email: "" })
    const [isLoading, setIsLoading] = useState(false) 

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const data = await postData("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDZDBnoYIsQENtLozpfIyn-81Z8_zwjHRc", { ...formData, requestType: "PASSWORD_RESET" })
        setIsLoading(false)
        if (data && data?.error && data?.error?.message) {
            alert(data.error.message)
        } else {
            alert("A link sent your registered email. Check email")
        }

        setFormData({ ...formData, email: "" })// empty input...............
    }
    return (

        <>
            <Head>
                <title>Forget Password</title>
                <meta name="description" content="Welcome to Sabloo Marble! Explore our extensive collection of high-quality tiles, lighting solutions, wooden materials, structural materials, and paints. Find the perfect tiles for your floors, walls, and backsplashes. Discover stylish lighting options to illuminate your space. Browse our selection of wooden materials for construction and woodworking projects. We also offer a range of structural materials for your building needs. Enhance your spaces with our premium paints in various colors and finishes. Shop now and bring your vision to life with Sabloo Marble." />
            </Head>

            <section className='signup'>
                <form onSubmit={submitHandler}>
                    <h2>Forget Password</h2>
                    <div className='form-group'>
                        <input type="text" id='email' name='email' required onChange={changeHandler} value={formData.email} placeholder='Please enter email' />
                    </div>

                    <button type='submit'>{!isLoading?"Send Link":"Send Link..."}</button>

                    <div className='change_form'>
                        <p>have an account?</p>
                        <Link href={'/auth/Signin'} replace>Sign-in</Link>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Signin                                         