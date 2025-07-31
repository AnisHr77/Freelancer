// 'use client';

// import Link from 'next/link';
// import React, { FormEvent } from 'react';
// import axios from 'axios';
// import { handleApiError } from '@/utils/handelerror';
// import Sidebar from '@/components/sidebar';
// import { FcGoogle } from "react-icons/fc";
// import { useRouter } from 'next/navigation';
// axios.defaults.withCredentials = true;

// function getCookie(name: string): string | null {
//     const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//     return match ? decodeURIComponent(match[2]) : null;
// }

// const Page = () => {
//     const router = useRouter();
//     const Signin = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const email = formData.get("email");
//         const password = formData.get("password");

//         try {
//             await axios.get('http://localhost:8001/sanctum/csrf-cookie');
//             const csrfToken = getCookie('XSRF-TOKEN');

//             const response = await axios.post('http://localhost:8001/login',
//                 {
//                     email,
//                     password,
//                 },
//                 {
//                     withCredentials: true,
//                     headers: {
//                         'X-XSRF-TOKEN': csrfToken ?? '',
//                     },
//                 }
//             );

//             if (response.data.user.role === "client") {
//                 router.push('/Home');
//             } else if(response.data.user.role === "freelancer") {
//                 router.push("/auth/Questions/profile");
//             }else{
//                 router.push("/dashboard");
//             }
//             console.log(response.data);
//         } catch (error: any) {
//             handleApiError(error);
//         }
//     };

//     return (
//         <div className='min-w-[320px] flex h-screen w-screen'>
//             <div className="w-[60%] flex flex-col mt-5">
//                 <p className='text-[40px] font-semibold text-[#3F5FFF] ml-5 md:ml-18'>Tasklinker</p>
//                 <p className='mt-5 text-[20px] ml-5 md:ml-20'>Welcome Back!</p>
//                 <p className='w-50 ml-5 md:ml-20 mt-2'>Sign in to get started!</p>

//                 <form onSubmit={Signin} className='flex flex-col px-5 mt-10 md:pl-20'>
//                     <label>Email</label>
//                     <input
//                         type='email'
//                         name='email'
//                         placeholder='Email'
//                         className='w-full max-w-100 min-w-80 h-10 rounded-[5px] pl-2 border-[1.5px]'
//                         required
//                     />
//                     <label className='mt-4'>Password</label>
//                     <input
//                         type='password'
//                         name='password'
//                         placeholder='Password'
//                         className='w-full max-w-100 min-w-80 h-10 rounded-[5px] pl-2 border-[1.5px]'
//                         required
//                     />
//                     <button
//                         type='submit'
//                         className='w-full max-w-100 min-w-80 h-10 mt-6 bg-[#3F5FFF] rounded-[5px] text-white cursor-pointer hover:opacity-60 active:opacity-50'>
//                         Sign in
//                     </button>
//                 </form>

//                 <div className="flex justify-center w-90 mt-5 md:ml-25">
//                     <hr className='text-black mt-3 mr-1 w-35 md:w-45 h-5' />
//                     Or
//                     <hr className='text-black mt-3 ml-1 w-35 md:w-45 h-5' />
//                 </div>

//                 <button
//                     className='w-full max-w-100 min-w-80 mx-5 md:mx-0 h-10 mt-2 rounded-[5px] flex justify-center items-center gap-2 border md:ml-20 cursor-pointer'>
//                     <FcGoogle className=' w-6 h-6 ' />
//                     <span> Continue with Google</span>
//                 </button>

//                 <p className='flex gap-2 w-85 md:ml-30 mt-4 justify-center'>
//                     Don't have an account? <Link className='text-[#3F5FFF]' href="/auth/Register">Sign Up</Link>
//                 </p>
//             </div>

//             <div className="w-full max-w-[45%] items-center text-center h-full bg-[#3F5FFF] hidden md:flex flex-col justify-center">
//                 <Sidebar />
//             </div>
//         </div>
//     );
// };

// export default Page;


'use client';
import { FcGoogle } from "react-icons/fc";
import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import axios from 'axios';
import { FormEvent } from 'react';
import { handleApiError } from '@/utils/handelerror';
import { useRouter } from 'next/navigation';
export default function RegisterPage() {
    const router = useRouter();
    const Signup = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const firstname = formdata.get("firstname");
        const lastname = formdata.get("lastname");
        const email = formdata.get("email");
        const password = formdata.get("password");
        const role = formdata.get("role");

        try {
            const response = await axios.post("http://localhost:8001/api/register", {
                email,
                password,
                role,
            });

            alert("Sign up success");
            console.log(response.data);
            router.push('/auth/Login');
        } catch (error: any) {
            handleApiError(error);
        }
    }

    return (
        <>
            <div className="   absolute inset-0  h-[520px] bg-[#7A4D8B] clip-slant " />
            <div className="  flex justify-around items-center ">
                <div className=" flex flex-col gap-6 ">
                    <p className="  text-[white] text-[40px] ">
                        <span className=' font-bold  ' >Task</span>linker
                    </p>
                    <p className="text-white w-130 text-[20px] " >Connect faster. Work smarter. Achieve more with TaskLinker.<br />
                        You have the talent and ambition—let us help you unlock new opportunities and collaborate with confidence across the globe.<br />
                        Sign up today and get access to:<br />
                        <ul className=" list-disc ml-10 " >
                            <li>A secure and scalable freelance platform</li>
                            <li>Smart tools for seamless client-freelancer collaboration</li>
                            <li> A global network of top-tier projects and professionals</li>
                        </ul>
                    </p>
                </div>
                <div className=" bg-[#E5E5EF] w-90 h-120 z-50 rounded-[10px]  mt-20 flex flex-col  items-center p-5">
                    <h3 className=" font-bold mt-10 text-[20px] " > Log in to your account</h3>
                    <form className=" flex flex-col gap-6 mt-10 " >
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className=' w-full max-w-100 min-w-80 h-9 bg-white rounded-[5px] pl-2  border   '
                            required
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='  w-full max-w-100 min-w-80 h-9 bg-white rounded-[5px] pl-2  border  active:border-[#3F5FFF]  '
                            required
                        />
                        <button
                            type='submit'
                            className='w-full max-w-100 min-w-80 h-10  bg-[#7A4D8B] rounded-[5px] text-white cursor-pointer hover:opacity-60 active:opacity-50 ' >
                            Login
                        </button>
                    </form>
                    <div className="flex justify-center w-90  mt-3  ">
                        <hr className='text-black mt-3 mr-1 w-35 md:w-35 h-5'></hr>
                        Or
                        <hr className='text-black mt-3 ml-1 w-35 md:w-35 h-5'></hr>
                    </div>
                    <button
                        className='w-full min-w-80 max-w-100  mx-5 md:mx-0 bg-[#4260DA] text-white h-10  rounded-[5px] flex justify-center items-center gap-2 border   cursor-pointer'>
                        <FcGoogle className='w-6 h-6' />Continue with Google
                    </button>
                    <p className='flex gap-2  w-85   mt-1 justify-center lg:mt-5 2xl:mt-15'>You Don't have account? <Link className='text-[#7A4D8B]' href="/auth/Register/Registerform" >Sign up</Link></p>
                </div>
            </div>
        </>

    );
}
