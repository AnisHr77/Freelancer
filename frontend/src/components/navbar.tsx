'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const register = () => {
        router.push("/auth/Register/Registerform");
    };
    const Login = () => {
        router.push("/auth/Login");
    };
    const hidnavbar = () => {
        setIsOpen(false);
    }
    return (
        <nav className="container max-w-screen min-w-[320px]">
            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-around my-6 items-center">
                <p className="  text-[#7A4D8B] text-[20px] ">
                    <span className=' font-bold ' >Task</span>linker
                </p>
                <div className="flex gap-12 ml-10 ">
                    <Link className="hover:text-[#7A4D8B] active:font-medium text-[15px] " href="/">Find Talent</Link>
                    <Link className="hover:text-[#7A4D8B] active:font-medium text-[15px] " href="#">Find Work</Link>
                    <Link className="hover:text-[#7A4D8B] active:font-medium text-[15px] " href="#">Why Tasklinker</Link>
                </div>
                <div className="flex items-center border border-[gray] h-[39px] rounded-[20px] lg:w-60  w-80 ">

                    <input
                        type="search"
                        placeholder="Search"
                        name="search-input"
                        className="w-full  h-10 outline-none pl-2 placeholder-[#b3b2b2] "
                        required
                    />
                    <CiSearch className="w-6 h-6 ml-2 text-[gray]" />
                </div>
                <div className="flex gap-6 text-center">
                    <button
                        onClick={Login}
                        className="   h-10 w-22     hover:bg-[#7A4D8B] hover:rounded-[20px] hover:text-white active:opacity-50 cursor-pointer"
                    >
                        Login
                    </button>
                    <button
                        onClick={register}
                        className="bg-[#7A4D8B] h-10 w-32 rounded-[20px] text-white hover:bg-white hover:border hover:text-[black] active:opacity-50  cursor-pointer"
                    >
                        Sign up
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden bg-white z-50">
                <div className=" max-w-[600px] flex justify-between mx-2 items-center">
                    <p className="  text-[#7A4D8B] text-[20px] ">
                        <span className=' font-bold ' >Task</span>linker
                    </p>
                    <button style={{ display: isOpen ? "none" : "block" }} onClick={() => setIsOpen(true)} className="w-10 h-10">
                        <BsList className="w-10 h-10" />
                    </button>
                    <button style={{ display: isOpen ? "block" : "none" }} onClick={() => setIsOpen(false)} className="w-10 h-10 ">
                        <IoMdClose className="w-10 h-10" />
                    </button>
                </div>

                <div style={{ display: isOpen ? "flex" : "none" }} className="z-50  bg-white fixed top-0 right-0 h-screen w-screen flex flex-col gap-4 items-center pt-20">
                    <Link onClick={hidnavbar} href="/">Home</Link>
                    <Link onClick={hidnavbar} href="#">Find Talent</Link>
                    <Link onClick={hidnavbar} href="#">Find Work</Link>
                    <Link onClick={hidnavbar} href="#">Why Tasklinker</Link>
                    <button
                        onClick={Login}
                        className="   h-10 w-22     hover:bg-[#7A4D8B] hover:rounded-[20px] hover:text-white active:opacity-50 cursor-pointer"
                    >
                        Login
                    </button>
                    <button
                        onClick={register}
                        className="bg-[#7A4D8B] h-10 w-32 rounded-[20px] text-white hover:bg-white hover:border hover:text-[black] active:opacity-50  cursor-pointer"
                    >
                        Sign up
                    </button>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
