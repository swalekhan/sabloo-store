// import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", address: "" })
    const router = useRouter()

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("token", JSON.stringify(formData))
        setFormData({
            ...formData,
            name: "",
            phone: "",
            address: ""
        });
        router.push("/")
    }
    return (
        <div className='signup'>
            <form onSubmit={submitHandler}>
                <h2>Signup</h2>
                <div className='form-group'>
                    <input type='text' id='name' name='name' required onChange={changeHandler} value={formData.name} placeholder='Name' />
                </div>

                <div className='form-group'>
                    <input type="text" id='phone' name='phone' required onChange={changeHandler} value={formData.phone} placeholder='phone' />
                </div>

                <div className='form-group'>
                    <input type='text' id='address' name='address' required onChange={changeHandler} value={formData.address} placeholder='Address' />
                </div>

                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup                                          