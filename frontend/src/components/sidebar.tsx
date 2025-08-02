import React from 'react'
import { SiFreelancer } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { FaRankingStar } from "react-icons/fa6";
const Sidebar = () => {

    return (
        <div className=" ">
            {/* <p className='text-[30px] text-white font-bold '>Welcome to Tasklinker</p>
            <p className='  w-[80%] ml-15 text-white mt-5 flex gap-2 '> <span className=''>Join our community of talented freelancers and connect with clients from around the world.</span></p>
            <div className=" grid grid-cols-3  lg:grid-cols-5  ml-8 gap-10 text-white mt-10">
                <SiFreelancer className='w-10 h-10' />
                <FaUser className='w-10 h-10' />
                <SiSpringsecurity className='w-10 h-10' />
                <FaRankingStar className='w-10 h-10' />
                <p className='w-10 h-10 bg-white rounded-full flex items-center text-[#007AFF] '>+97k</p>
            </div> */}
            
            {/* desktop version */}
            <div
                style={{ backgroundImage: `url('/wave2.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                className="h-130    flex-col items-center pl-30 gap-2 w-170  hidden lg:flex "
            >
                <p className="  text-[white] ml-10 mt-10 text-[40px] ">
                    <span className=' font-bold  ' >Task</span>linker
                </p>
                <img src={"/Frame.png"} className=" w-70 h-60 " />
                <p className=" text-center w-90 text-white font-medium " >Join our community of talented freelancers and connect with clients from around the world.</p>
            </div>

            {/* phone version */}
            <div
                style={{ backgroundImage: `url('/wavephone.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                className="h-140 w-full flex flex-col items-center   gap-2 md:hidden "
            >
                <p className="  text-[white]   mt-10 text-[40px] ">
                    <span className=' font-bold  ' >Task</span>linker
                </p>
                <img src={"/Frame.png"} className=" w-70 h-60 " />
                <p className=" text-center w-75 text-white font-medium " >Join our community of talented freelancers and connect with clients from around the world.</p>
            </div>

            {/* tablet version */}
            <div
                style={{ backgroundImage: `url('/wavetablet.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                className="h-140 w-full  flex-col items-center   gap-2 hidden md:flex lg:hidden "
            >
                <p className="  text-[white]   mt-10 text-[40px] ">
                    <span className=' font-bold  ' >Task</span>linker
                </p>
                <img src={"/Frame.png"} className=" w-70 h-60 " />
                <p className=" text-center w-90 text-white font-medium " >Join our community of talented freelancers and connect with clients from around the world.</p>
            </div>
        </div>
    )
}

export default Sidebar