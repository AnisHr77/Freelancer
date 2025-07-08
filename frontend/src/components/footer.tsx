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
        <footer className="overflow-x-hidden mt-[10%]   w-full min-w-[320px] max-w-[1440px] mx-auto">
            <div className="   flex flex-col gap-4 items-center justify-between py-15 bg-[#3F5FFF] h-auto  md:gap-0 md:px-0 md:flex-row">
                <div
                    style={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }}
                    className="text-white font-medium text-[20px] h-50 flex items-center text-center px-8 rounded-[5px] md:text-left md:px-15 md:w-120"
                >
                    <p className="w-65">
                        Stay Up to Date with our Latest Innovations: Sign Up for Our Newsletter!
                    </p>
                    <Image
                        src="/dot.png"
                        width={10}
                        height={10}
                        alt=""
                        className="absolute w-10 h-10"
                    />
                </div>
                <form className="flex flex-col gap-2 text-white  mx-10 lg:mx-40">
                    <label>Name*</label>
                    <input
                        type="text"
                        name="name"
                        className="w-80 h-10 bg-white rounded-[5px] outline-none text-black pl-2"
                        required
                    />
                    <label>Email*</label>
                    <input
                        type="email"
                        name="email"
                        className="w-80 h-10 bg-white rounded-[5px] outline-none text-black pl-2"
                        required
                    />
                    <button
                        type="submit"
                        className="md:w-30 h-10 mt-4 rounded-[5px] bg-white text-blue-600 hover:bg-blue-600 hover:text-white hover:border active:opacity-50"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            <div className="   flex flex-col gap-4 pb-5 w-screen bg-[#01003d]">
                <div className=" flex flex-col justify-around items-start py-5 px-5   md:gap-20 md:flex-row md:py-22 md:px-15   ">
                    <div className="  flex flex-col  gap-12    text-white">
                        <p className='text-[25px] text-[#3f5fff] font-semibold'>Tasklinker</p>
                        <p className='text-[gray] w-full  max-w-[370px]'>
                            Lorem ipsum dolor sit amet, consecteture adipiscing elit.
                            Donec at nulla nibh.Pellentesque vel orci mauris.
                            Fusce quis rhoncus lectus,et fringila sapien.
                            Duis porttitor id dolor ut volutpat
                        </p>
                        <div className="flex gap-4  ">
                            <Link href="#"><IoLogoFacebook className='w-6 h-6 text-[gray]' /></Link>
                            <Link href="#" className='rounded-full bg-[gray] w-6 h-6 flex items-center justify-center ' ><FaYoutube className='w-4 h-4 text-[#01003d] ' /></Link>
                            <Link href="#" className='rounded-full bg-[gray] w-6 h-6 flex items-center justify-center '><TiSocialLinkedin className='w-5 h-5 text-[#01003d]' /></Link>
                            <Link href="#" className='rounded-full bg-[gray] w-6 h-6 flex items-center justify-center '><TfiTwitterAlt className='w-3 h-3 text-[#01003d] ' /></Link>
                            <Link href="#" className='rounded-full bg-[gray] w-6 h-6 flex items-center justify-center '><FaInstagram className='w-4 h-4 text-[#01003d] ' /></Link>
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