'use client';

import Link from 'next/link';
import React, { FormEvent } from 'react';
import axios from 'axios';
import { handleApiError } from '@/utils/handelerror';
import Sidebar from '@/components/sidebar';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
axios.defaults.withCredentials = true;

function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}
const csrfToken = getCookie('XSRF-TOKEN');

const Page = () => {
    const router = useRouter();
    const Signin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const response = await axios.post('http://localhost:8001/login',
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                    headers: {
                        'X-XSRF-TOKEN': csrfToken ?? '',
                    },
                }
            );

            alert("Sign in success");
            router.push("/home");
            console.log(response.data);
        } catch (error: any) {
            handleApiError(error);
        }
    };

    return (
        <div className='min-w-[320px] flex h-screen w-screen'>
            <div className="w-[60%] flex flex-col mt-5">
                <p className='text-[40px] text-[#3F5FFF] ml-5 md:ml-18'>GigNation</p>
                <p className='mt-5 text-[20px] ml-5 md:ml-20'>Welcome Back!</p>
                <p className='w-50 ml-5 md:ml-20 mt-2'>Sign in to get started!</p>

                <form onSubmit={Signin} className='flex flex-col px-5 mt-10 md:pl-20'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='w-full max-w-100 min-w-80 h-10 rounded-[5px] pl-2 border-[1.5px]'
                        required
                    />
                    <label className='mt-4'>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        className='w-full max-w-100 min-w-80 h-10 rounded-[5px] pl-2 border-[1.5px]'
                        required
                    />
                    <button
                        type='submit'
                        className='w-full max-w-100 min-w-80 h-10 mt-6 bg-[#3F5FFF] rounded-[5px] text-white cursor-pointer hover:opacity-60 active:opacity-50'>
                        Sign in
                    </button>
                </form>

                <div className="flex justify-center w-90 mt-5 md:ml-25">
                    <hr className='text-black mt-3 mr-1 w-35 md:w-45 h-5' />
                    Or
                    <hr className='text-black mt-3 ml-1 w-35 md:w-45 h-5' />
                </div>

                <button
                    className='w-full max-w-100 min-w-80 mx-5 md:mx-0 h-10 mt-2 rounded-[5px] flex justify-center items-center gap-2 border md:ml-20 cursor-pointer'>
                    <FcGoogle className=' w-6 h-6 ' />
                    <span> Continue with Google</span>
                </button>

                <p className='flex gap-2 w-85 md:ml-30 mt-4 justify-center'>
                    Don't have an account? <Link className='text-[#3F5FFF]' href="/auth/Register">Sign Up</Link>
                </p>
            </div>

            <div className="w-full max-w-[45%] items-center text-center h-full bg-[#3F5FFF] hidden md:flex flex-col justify-center">
                <Sidebar />
            </div>
        </div>
    );
};

export default Page;
