import React from 'react'
import { FcGoogle } from "react-icons/fc";
const Page = () => {
    return (
        <div className="relative">
            <svg className=' absolute top-0  w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#007AFF" fill-opacity="1" d="M0,224L30,213.3C60,203,120,181,180,197.3C240,213,300,267,360,282.7C420,299,480,277,540,240C600,203,660,149,720,133.3C780,117,840,139,900,170.7C960,203,1020,245,1080,261.3C1140,277,1200,267,1260,250.7C1320,235,1380,213,1410,202.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
                </path>
            </svg>
            {/* <svg className=' z-0 absolute top-0   w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#007AFF"   fill-opacity="1" d="M0,96L30,128C60,160,120,224,180,218.7C240,213,300,139,360,138.7C420,139,480,213,540,250.7C600,288,660,288,720,282.7C780,277,840,267,900,229.3C960,192,1020,128,1080,112C1140,96,1200,128,1260,117.3C1320,107,1380,53,1410,26.7L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
            </path></svg> */}
            <div className="h-screen flex items-center justify-center">
                <div className="relative pt-5 mb-5 flex flex-col gap-2 items-center shadow-2xl z-200 h-110 mt-20 w-90 rounded-[10px] bg-white ">
                    <p className='text-[25px] font-bold  '>Join us </p>
                    <form className="flex flex-col gap-4 items-center mt-2 ">
                        <input
                            type='text'
                            name='firstname'
                            placeholder='First name'
                            className='w-60 h-10 rounded-[5px] pl-2  border-[1.5px]   '
                            required
                        />
                        <input
                            type='text'
                            name='lastname'
                            placeholder='Last name'
                            className='w-60 h-10 rounded-[5px] pl-2  border-[1.5px]   '
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='w-60 h-10 rounded-[5px] pl-2  border-[1.5px]   '
                            required
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='w-60 h-10 rounded-[5px] pl-2  border-[1.5px]   '
                            required
                        />
                        <button
                            type='submit'
                            className='w-60 h-10 bg-[#007AFF] rounded-[5px] text-white cursor-pointer hover:opacity-60 active:opacity-50 ' >
                            Join
                        </button>
                    </form>
                    <div className="flex">
                        <hr className='text-black mt-3 mr-1 w-20 h-5'></hr>
                        Or
                        <hr className='text-black mt-3 ml-1 w-20 h-5'></hr>
                    </div>
                    <button
                        className='w-60 h-10 rounded-[5px] flex justify-center items-center gap-2 border  cursor-pointer'>
                        <FcGoogle className='w-6 h-6' />Continue with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page