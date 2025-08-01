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
                        className='w-full min-w-80 max-w-100  mx-5 md:mx-0 bg-[#4260DA] text-white h-10  rounded-[5px] flex justify-center items-center gap-2 border   cursor-pointer'>
                        <FcGoogle className='w-6 h-6' />Continue with Google
                    </button>
                    <p className='flex gap-2  w-85   mt-1 justify-center  2xl:mt-15'>Already have account? <Link className='text-[#7A4D8B]' href="/auth/Login" >Sign in</Link></p>
                </div>
            </div>
        </>

    );
}


// 'use client';
// import { FcGoogle } from "react-icons/fc";
// import Link from 'next/link';
// import axios from 'axios';
// import { FormEvent } from 'react';
// import { handleApiError } from '@/utils/handelerror';
// import { useRouter } from 'next/navigation';

// export default function RegisterPage() {
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
//     };

//     return (
//         <>
//             {/* Background */}
//             <div className="absolute inset-0 h-[520px] bg-[#7A4D8B] clip-slant -z-10" />

//             <div className="flex flex-col md:flex-row justify-around items-center px-4 py-10">
//                 {/* Left Text Content */}
//                 <div className="flex flex-col gap-6 max-w-xl text-center md:text-left mb-10 md:mb-0">
//                     <p className="text-white text-[32px] md:text-[40px] font-semibold">
//                         <span className="font-bold">Task</span>linker
//                     </p>
//                     <p className="text-white text-[16px] md:text-[20px] leading-relaxed">
//                         Connect faster. Work smarter. Achieve more with TaskLinker.<br />
//                         You have the talent and ambition—let us help you unlock new opportunities and collaborate with confidence across the globe.<br /><br />
//                         Sign up today and get access to:
//                     </p>
//                     <ul className="list-disc text-white text-sm md:text-base pl-6">
//                         <li>A secure and scalable freelance platform</li>
//                         <li>Smart tools for seamless client-freelancer collaboration</li>
//                         <li>A global network of top-tier projects and professionals</li>
//                     </ul>
//                 </div>

//                 {/* Right Form Box */}
//                 <div className="bg-[#E5E5EF] w-full max-w-md rounded-[10px] p-6 md:p-8 z-50 shadow-md">
//                     <h3 className="font-bold text-[20px] text-center mb-4">Get your free account</h3>
//                     <form onSubmit={Signup} className="flex flex-col gap-4">
//                         <div className="flex flex-col md:flex-row md:gap-4">
//                             <input
//                                 type="text"
//                                 name="firstname"
//                                 placeholder="First name"
//                                 className="w-full bg-white h-10 rounded pl-2 border"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 name="lastname"
//                                 placeholder="Last name"
//                                 className="w-full bg-white h-10 rounded pl-2 border"
//                                 required
//                             />
//                         </div>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             className="w-full h-10 bg-white rounded pl-2 border"
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             className="w-full h-10 bg-white rounded pl-2 border"
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="password_confirmation"
//                             placeholder="Confirm Password"
//                             className="w-full h-10 bg-white rounded pl-2 border"
//                             required
//                         />
//                         <button
//                             type="submit"
//                             className="w-full h-10 bg-[#7A4D8B] text-white rounded hover:opacity-80 active:opacity-60"
//                         >
//                             Register
//                         </button>
//                     </form>

//                     {/* Divider */}
//                     <div className="flex items-center my-4">
//                         <hr className="flex-grow border-gray-400" />
//                         <span className="mx-2 text-sm text-gray-600">Or</span>
//                         <hr className="flex-grow border-gray-400" />
//                     </div>

//                     {/* Google Button */}
//                     <button className="w-full bg-[#4260DA] text-white h-10 rounded flex items-center justify-center gap-2">
//                         <FcGoogle className="w-5 h-5" /> Continue with Google
//                     </button>

//                     {/* Sign-in Link */}
//                     <p className="text-center text-sm mt-4">
//                         Already have an account?{' '}
//                         <Link href="/auth/Login" className="text-[#7A4D8B] font-medium">
//                             Sign in
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// }
