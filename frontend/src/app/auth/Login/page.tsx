'use client'
import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { SiFreelancer } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { FaRankingStar } from "react-icons/fa6";
import Sidebar from '@/components/sidebar';
import axios from 'axios';
import { FormEvent } from 'react';

const Page = () => {
    const Signin = async (e: FormEvent<HTMLFormElement>) => {
        const formdata = new FormData(e.currentTarget);
        const email = formdata.get("email");
        const password = formdata.get("password");
        try {
            const response = await axios.post("", {
                email,
                password,
            })
            alert("sign in success");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className=' min-w-[320px]  flex h-screen w-screen'>
            <div className="w-[60%] flex flex-col  mt-5">
                <p className='text-[40px]   text-[#007AFF] ml-5 md:ml-18'>GigNation</p>
                <p className='mt-5   text-[20px]  ml-5 md:ml-20 '>Welcom Back!</p>
                <p className='w-50  ml-5 md:ml-20 mt-2'>Sign in to get started!</p>
                <form onSubmit={Signin} className='flex flex-col px-5  mt-10  md:pl-20 '>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='w-full max-w-100 min-w-80 h-10 rounded-[5px] pl-2  border-[1.5px]   '
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
                        Sign in
                    </button>
                </form>
                <div className="flex justify-center w-90  mt-5 md:ml-25">
                    <hr className='text-black mt-3 mr-1 w-35  md:w-45 h-5'></hr>
                    Or
                    <hr className='text-black mt-3 ml-1 w-35 md:w-45 h-5'></hr>
                </div>
                <button
                    className='w-full  max-w-100 min-w-80 mx-5 md:mx-0 h-10 mt-2 rounded-[5px] flex justify-center items-center gap-2 border md:ml-20 cursor-pointer'>
                    <FcGoogle className='w-6 h-6' />Continue with Google
                </button>
                <p className='flex gap-2  w-85 md:ml-30  mt-4 justify-center'>Don't have account? <Link className='text-[#007AFF]' href="/auth/Register" >Sign Up</Link></p>
            </div>
            <div className="max-w-[45%]  items-center text-center h-full bg-[#007AFF] hidden   md:flex flex-col justify-center">
                <Sidebar />
            </div>
        </div>
    )
}

export default Page