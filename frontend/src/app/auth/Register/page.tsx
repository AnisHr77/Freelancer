// 'use client'
// import React from 'react'
// import { FcGoogle } from "react-icons/fc";
// import Sidebar from '@/components/sidebar';
// import Link from 'next/link';
// import axios from 'axios';
// import { FormEvent } from 'react';
// import { handleApiError } from '@/utils/handelerror';
// import { useRouter } from 'next/navigation';

// const Page = () => {
//     const router = useRouter();
//     const Signup = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formdata = new FormData(e.currentTarget);
//         const firstname = formdata.get("firstname");
//         const lastname = formdata.get("lastname");
//         const email = formdata.get("email");
//         const password = formdata.get("password");
//         const role = formdata.get("role");

//         try {
//             const response = await axios.post("http://localhost:8001/api/register", {
//                 firstname,
//                 lastname,
//                 email,
//                 password,
//                 password_confirmation: password,
//                 role,
//             });

//             alert("Sign up success");
//             console.log(response.data);
//             router.push('/auth/Login');
//         } catch (error: any) {
//             handleApiError(error);
//         }
//     }

//     return (
//         <div className='min-w-[320px] flex h-screen w-full'>
//             <div className="w-[60%]   ">
//                 <p className='text-[40px] font-semibold  text-[#3F5FFF]  ml-5 md:ml-18'>Tasklinker</p>
//                 <p className='mt-1 text-[20px]  ml-5 md:ml-20 '>Welcom to our community</p>
//                 <p className=' ml-5 md:ml-20 mt-2'>Sign up to get started!</p>
//                 <form onSubmit={Signup} className='flex flex-col px-5 md:pl-20 2xl:mt-10 mt-5'>
//                     <div className="flex w-100 gap-36 ">
//                         <label>First Name</label>
//                         <label className='hidden md:flex '>Last Name</label>
//                     </div>
//                     <div className="flex flex-col md:flex-row md:gap-10 ">
//                         <input
//                             type='text'
//                             name='firstname'
//                             placeholder='First name'
//                             className='w-80  md:w-full md:max-w-45  h-9 rounded-[5px] pl-2  border   '
//                             required
//                         />
//                         <label className='mt-2 md:hidden'>Last Name</label>
//                         <input
//                             type='text'
//                             name='lastname'
//                             placeholder='Last name'
//                             className=' w-80 md:w-full md:max-w-45  h-9 rounded-[5px] pl-2  border   '
//                             required
//                         />
//                     </div>
//                     <label className='mt-2'>Email</label>
//                     <input
//                         type='email'
//                         name='email'
//                         placeholder='Email'
//                         className=' w-full max-w-100 min-w-80 h-9 rounded-[5px] pl-2  border   '
//                         required
//                     />

//                     <div className="flex w-100 gap-36">
//                         <label className='mt-2'>Password</label>
//                         <label className='mt-2 hidden md:flex'>Confirm Password</label>
//                     </div>
//                     <div className="flex flex-col md:flex-row md:gap-10">
//                         <input
//                             type='password'
//                             name='password'
//                             placeholder='Password'
//                             className=' w-80  md:w-full md:max-w-45 h-9 rounded-[5px] pl-2  border  active:border-[#3F5FFF]  '
//                             required
//                         />
//                         <label className='mt-2 md:hidden'>Confirm Password</label>
//                         <input
//                             type='password'
//                             name='password_confirmation'
//                             placeholder='Confirm Password'
//                             className=' w-80  md:w-full md:max-w-45 h-9 rounded-[5px] pl-2  border  active:border-[#3F5FFF]  '
//                             required
//                         />
//                     </div>

//                     <label className='mt-2'>Choose your role</label>
//                     <select name='role' className='w-full max-w-100 min-w-80 border h-9 rounded-[5px] pl-2'>
//                         <option className='text-[gray]' value=''>Select Role</option>
//                         <option value='client'>Client</option>
//                         <option value='freelancer'>Freelancer</option>
//                     </select>
//                     <button
//                         type='submit'
//                         className='w-full max-w-100 min-w-80 h-10 mt-6 bg-[#3F5FFF] rounded-[5px] text-white cursor-pointer hover:opacity-60 active:opacity-50 ' >
//                         Join
//                     </button>
//                 </form>
//                 <div className="flex justify-center w-90  mt-3 md:ml-25">
//                     <hr className='text-black mt-3 mr-1 w-35  md:w-45 h-5'></hr>
//                     Or
//                     <hr className='text-black mt-3 ml-1 w-35 md:w-45 h-5'></hr>
//                 </div>
//                 <button
//                     className='w-full min-w-80 max-w-100  mx-5 md:mx-0  h-10  rounded-[5px] flex justify-center items-center gap-2 border md:ml-20 cursor-pointer'>
//                     <FcGoogle className='w-6 h-6' />Continue with Google
//                 </button>
//                 <p className='flex gap-2  w-85 md:ml-30  mt-1 justify-center 2xl:mt-15'>Already have account? <Link className='text-[#3F5FFF]' href="/auth/Login" >Sign in</Link></p>
//             </div>
//             <div className="w-full max-w-[45%]  items-center text-center h-full bg-[#3F5FFF]    flex-col justify-center hidden md:flex">
//                 <Sidebar />
//             </div>
//         </div>
//     )
// }

// export default Page



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
                firstname,
                lastname,
                email,
                password,
                password_confirmation: password,
                role,
            });

            alert("Sign up success");
            console.log(response.data);
            router.push('/auth/Role');
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
                    <h3 className=" font-bold  text-[20px] " > Get your free account</h3>
                    <form onSubmit={Signup} className=" flex flex-col gap-6 mt-5 " >
                        <div className="flex flex-col md:flex-row md:gap-10 ">
                            <input
                                type='text'
                                name='firstname'
                                placeholder='First name'
                                className='w-80  md:w-full md:max-w-45 bg-white h-9 rounded-[5px] pl-2  border   '
                                required
                            />
                            <input
                                type='text'
                                name='lastname'
                                placeholder='Last name'
                                className=' w-80 md:w-full md:max-w-45 bg-white  h-9 rounded-[5px] pl-2  border   '
                                required
                            />
                        </div>
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
                        <input
                            type='password'
                            name='password_confirmation'
                            placeholder='Confirm Password'
                            className='  w-full max-w-100 min-w-80 h-9 bg-white rounded-[5px] pl-2  border  active:border-[#3F5FFF]  '
                            required
                        />
                        <button
                            type='submit'
                            className='w-full max-w-100 min-w-80 h-10  bg-[#7A4D8B] rounded-[5px] text-white cursor-pointer hover:opacity-60 active:opacity-50 ' >
                            Register
                        </button>
                    </form>
                    <div className="flex justify-center w-90  mt-3  ">
                        <hr className='text-black mt-3 mr-1 w-35 md:w-35 h-5'></hr>
                        Or
                        <hr className='text-black mt-3 ml-1 w-35 md:w-35 h-5'></hr>
                    </div>
                    <button
                        className='w-full min-w-80 max-w-100  mx-5 md:mx-0 bg-[white] text-black  h-10  rounded-[5px] flex justify-center items-center gap-2 border   cursor-pointer'>
                        <FcGoogle className='w-6 h-6' />Continue with Google
                    </button>
                    <p className='flex gap-2  w-85   mt-1 justify-center  2xl:mt-15'>Already have account? <Link className='text-[#7A4D8B]' href="/auth/Login" >Sign in</Link></p>
                </div>
            </div>
        </>
    );
}