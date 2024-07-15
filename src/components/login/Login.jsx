import React, { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import upload from '../../lib/upload'

const Login = () => {
    const [avatar, setAvatar] = useState({ file: null, url: '' });

    const [loading, setLoading] = useState(false);

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    };

    const handleLogin = async (ele) => {
        ele.preventDefault();
        setLoading(true);

        const formData = new FormData(ele.target);
        const { email, password } = Object.fromEntries(formData);

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (ele) => {
        ele.preventDefault();
        setLoading(true);
        const formData = new FormData(ele.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);

            const imgUrl = await upload(avatar.file);

            await setDoc(doc(db, 'users', response.user.uid), {
                id: response.user.uid,
                avatar: imgUrl,
                username: username,
                email: email,
                password: password,
                blocked: []
            });

            await setDoc(doc(db, 'userChats', response.user.uid), {
                chats: []
            });

            toast.success('Account Created! you can login now');

        } catch (error) {
            console.log(error)
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='login'>

            <div className='item'>
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder='Your Email Address' name='email' />
                    <input type="password" placeholder='Your Password' name='password' />
                    <button disabled={loading}>{loading ? "loading" : "Sign In"}</button>
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
                    <button disabled={loading}>{loading ? "loading" : "Sign Up"}</button>
                </form>
            </div>

        </div>
    )
}

export default Login
