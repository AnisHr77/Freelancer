'use client'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import axios from 'axios';
import { FormEvent } from 'react';
const Page = () => {
    const Signup = async (e: FormEvent<HTMLFormElement>) => {
        const formdata = new FormData(e.currentTarget);
        const firstname = formdata.get("firstname");
        const lastname = formdata.get("lastname");
        const email = formdata.get("email");
        const password = formdata.get("password");
        try {
            const response = await axios.post("http://127.0.0.1:8000/freelancers", {
                firstname,
                lastname,
                email,
                password,
            })
            alert("sign up success");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='min-w-[320px] flex h-screen w-screen'>
            <div className="w-[60%]  ">
                <p className='text-[40px]  text-[#007AFF]  ml-5 md:ml-18'>GigNation</p>
                <p className='mt-5 text-[20px]  ml-5 md:ml-20 '>Welcom to our community</p>
                <p className=' ml-5 md:ml-20 mt-2'>Sign up to get started!</p>
                <form onSubmit={Signup} className='flex flex-col px-5 md:pl-20 mt-5'>
                    <div className="flex w-100 gap-36 ">
                        <label>First Name</label>
                        <label className='hidden md:flex '>Last Name</label>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-10 ">
                        <input
                            type='text'
                            name='firstname'
                            placeholder='First name'
                            className='w-80 md:w-45 h-10 rounded-[5px] pl-2  border-[1.5px]   '
                            required
                        />
                        <label className='mt-4 md:hidden'>Last Name</label>
                        <input
                            type='text'
                            name='lastname'
                            placeholder='Last name'
                            className=' w-80 md:w-45  h-10 rounded-[5px] pl-2  border-[1.5px]   '
                            required
                        />
                    </div>
                    <label className='mt-4'>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className=' w-full max-w-100 min-w-80 h-10 rounded-[5px] pl-2  border-[1.5px]   '
                        required
                    />
                    <label className='mt-4'>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        className='w-full max-w-100 min-w-80 h-10 rounded-[5px] pl-2  border-[1.5px]  active:border-[#007AFF]  '
                        required
                    />
                    <button
                        type='submit'
                        className='w-full max-w-100 min-w-80 h-10 mt-6 bg-[#007AFF] rounded-[5px] text-white cursor-pointer hover:opacity-60 active:opacity-50 ' >
                        Join
                    </button>
                </form>
                <div className="flex justify-center w-90  mt-5 md:ml-25">
                    <hr className='text-black mt-3 mr-1 w-35  md:w-45 h-5'></hr>
                    Or
                    <hr className='text-black mt-3 ml-1 w-35 md:w-45 h-5'></hr>
                </div>
                <button
                    className='w-full min-w-80 max-w-100  mx-5 md:mx-0  h-10 mt-2 rounded-[5px] flex justify-center items-center gap-2 border md:ml-20 cursor-pointer'>
                    <FcGoogle className='w-6 h-6' />Continue with Google
                </button>
                <p className='flex gap-2  w-85 md:ml-30  mt-4 justify-center'>Already have account? <Link className='text-[#007AFF]' href="/auth/Login" >Sign in</Link></p>
            </div>
            <div className="max-w-[45%]  items-center text-center h-full bg-[#007AFF]    flex-col justify-center hidden md:flex">
                <Sidebar />
            </div>
        </div>
    )
}

export default Page