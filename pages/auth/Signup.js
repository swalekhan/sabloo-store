import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '@/store/authSlice'
import Head from 'next/head'
import Link from 'next/link'
import { postData } from '@/utils/commenFunc/commenFunc'
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Signup = () => {
    const [formData, setFormData] = useState({ displayName: "", email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()


    // const provider = new GoogleAuthProvider();
    // const auth = getAuth();

    // const loginWithGoogle = () => {
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;
    //             // The signed-in user info.
    //             const user = result.user;
    //             // IdP data available using getAdditionalUserInfo(result)
    //             // ...
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             const email = error.customData.email;
    //             // The AuthCredential type that was used.
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //             // ...
    //         });
    // }

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const data = await postData('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZDBnoYIsQENtLozpfIyn-81Z8_zwjHRc', { ...formData, returnSecureToken: true })
        setIsLoading(false)
        if (data?.error && data?.error?.message) {
            alert(data.error.message)
            return;
        }
        // .........store data in local storage................
        localStorage.setItem("token", JSON.stringify({ ...data }));
        dispatch(signup({ ...data }))

        router.back("/")  // navigation .............
    }

    useEffect(() => {
        const heading = "Sign Up"
        heading.split("").map((e, i) => {
            setTimeout(() => {
                document.getElementById("signup_heading").innerHTML += e
            }, 100 * i)
        });
    }, [])
    return (

        <>
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Welcome to Sabloo Marble! Explore our extensive collection of high-quality tiles, lighting solutions, wooden materials, structural materials, and paints. Find the perfect tiles for your floors, walls, and backsplashes. Discover stylish lighting options to illuminate your space. Browse our selection of wooden materials for construction and woodworking projects. We also offer a range of structural materials for your building needs. Enhance your spaces with our premium paints in various colors and finishes. Shop now and bring your vision to life with Sabloo Marble." />
            </Head>

            <section className='signup'>
                <form onSubmit={submitHandler}>
                    <h2 id='signup_heading'></h2>
                    <div className='form-group'>
                        <input type='text' id='name' name='displayName' required onChange={changeHandler} value={formData.displayName} placeholder='Name' />
                    </div>

                    <div className='form-group'>
                        <input type="text" id='email' name='email' required onChange={changeHandler} value={formData.email} placeholder='Email' />
                    </div>

                    <div className='form-group'>
                        <input type="password" id='password' name='password' required onChange={changeHandler} value={formData.password} placeholder='Password' />
                    </div>

                    <button type='submit'>{!isLoading ? "SignUp" : "SignUp..."}</button>

                    <div className='change_form'>
                        <p>Have an account?</p>
                        <Link href={'/auth/Signin'} replace >Sign-in</Link>
                    </div>
                    {/* <div className='with_google' onClick={loginWithGoogle}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/753px-Google_%22G%22_Logo.svg.png' alt='google' width="20px" />
                        <p>Continue with Google</p>
                    </div> */}
                </form>

            </section>
        </>
    )
}

export default Signup                                          