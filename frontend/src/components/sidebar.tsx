import React from 'react'
import { SiFreelancer } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { FaRankingStar } from "react-icons/fa6";
const Sidebar = () => {

    return (
        <div className=" ">
            <p className='text-[30px] text-white font-bold '>Welcome to GigNation</p>
            <p className='  w-[80%] ml-15 text-white mt-5 flex gap-2 '> <span className=''>Join our community of talented freelancers and connect with clients from around the world.</span></p>
            <div className=" flex justify-center gap-10 text-white mt-10">
                <SiFreelancer className='w-10 h-10' />
                <FaUser className='w-10 h-10' />
                <SiSpringsecurity className='w-10 h-10' />
                <FaRankingStar className='w-10 h-10' />
                <p className='w-10 h-10 bg-white rounded-full flex items-center text-[#007AFF] '>+97k</p>
            </div>
        </div>
    )
}

export default Sidebar