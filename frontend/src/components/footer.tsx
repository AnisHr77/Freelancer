'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="overflow-x-hidden mt-[10%] bg-[#1F1F1F] text-white  w-full min-w-[320px] max-w-[1440px] mx-auto">

            <div className="   flex flex-col gap-4 pb-5 w-screen">
                <div className=" flex flex-col justify-around items-start py-5 px-5   md:gap-20 md:flex-row md:py-22 md:px-15   ">
                    <div className="  flex flex-col  gap-12    text-white">
                        <p className='text-[25px]  font-semibold'>Tasklinker</p>
                        <p className='text-[gray] w-full  max-w-[370px]'>
                            TaskLinker connects ambitious professionals with world-class opportunities, empowering seamless collaboration through secure, smart, and scalable freelance solutions.
                        </p>
                        <div className="flex gap-4  ">
                            <Link href="#" className='rounded-full bg-[gray] w-6 h-6 flex items-center justify-center ' ><IoLogoFacebook className='w-6 h-6 text-[white]' /></Link>
                            <Link href="#" className='rounded-full bg-[gray] w-6 h-6 flex items-center justify-center ' ><FaYoutube className='w-4 h-4 text-[white] ' /></Link>
                            <Link href="#" className='rounded-full bg-[gray] w-6 h-6 flex items-center justify-center '><TiSocialLinkedin className='w-5 h-5 text-[white]' /></Link>
                            <Link href="#" className='rounded-full bg-[gray] w-6 h-6 flex items-center justify-center '><TfiTwitterAlt className='w-3 h-3 text-[white] ' /></Link>
                            <Link href="#" className='rounded-full bg-[gray] w-6 h-6 flex items-center justify-center '><FaInstagram className='w-4 h-4 text-[white] ' /></Link>
                        </div>
                    </div>
                    <div className="   grid grid-cols-2 gap-5  md:gap-15  mt-10 md:mt-0  md:grid-cols-3   ">
                        <div className="  flex flex-col gap-2    text-white">
                            <p className='font-semibold w-[100px]'>Quick Links</p>
                            <div className="flex flex-col gap-2 text-[gray] text-left">
                                <Link href="#">Home</Link>
                                <Link href="#">Services</Link>
                                <Link href="#">Freelancers</Link>
                                <Link href="#">Employers</Link>
                                <Link href="#">Project</Link>
                                <Link href="#">About Us</Link>
                                <Link href="#">Testiomonials</Link>
                                <Link href="#">Blog</Link>
                                <Link href="#">Support Page</Link>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-2   text-white">
                            <p className='font-semibold'>Resources</p>
                            <div className="flex flex-col gap-2 text-[gray] text-left">
                                <Link href="#">FAQ</Link>
                                <Link href="#">Help Center</Link>
                                <Link href="#">Pricing</Link>
                                <Link href="#">Payment method</Link>
                                <Link href="#">Careers</Link>
                                <Link href="#">Contact Us</Link>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-2   text-white">
                            <p className='font-semibold'>Terms</p>
                            <div className="flex flex-col gap-2 text-[gray] text-left">
                                <Link href="#">Privacy Policy</Link>
                                <Link href="#">Terms and Conditions</Link>
                                <Link href="#">Copyright  Policy</Link>
                                <Link href="#">Code of Conduct</Link>
                                <Link href="#">Fees and Charged</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-5 md:mx-20">
                    <hr className='text-[gray]    h-2'></hr>
                </div>
                <p className=' text-[gray] text-center text-[12px] md:text-[16px]'>Tasklinker Freelancer and Project - 2025 All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer