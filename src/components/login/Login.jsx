import React, { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../lib/firebase'

const Login = () => {
    const [avatar, setAvatar] = useState({ file: null, url: '' })

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = (ele) => {
        ele.preventDefault();
        toast.warn('hello');
    }

    const handleRegister = async (ele) => {
        ele.preventDefault();
        const formData = new FormData(ele.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }

    }

    return (
        <div className='login'>

            <div className='item'>
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder='Your Email Address' name='email' />
                    <input type="password" placeholder='Your Password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>

            <div className='separator'></div>

            <div className='item'>
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file"> <img src={avatar.url || './avatar.png'} alt="" /> Upload an Image</label>
                    <input type="file" id='file' style={{ display: 'none' }} onChange={handleAvatar} />
                    <input type="text" placeholder='Username' name='username' />
                    <input type="text" placeholder='Your Email Address' name='email' />
                    <input type="password" placeholder='Your Password' name='password' />
                    <button>Sign Up</button>
                </form>
            </div>

        </div>
    )
}

export default Login
