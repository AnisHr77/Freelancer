'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const register = () => {
        router.push("/auth/Register");
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
                <p className="font-bold text-blue-600">
                    <span className="rounded-full py-1 pl-1 bg-gray-100">Gig</span>Nation
                </p>
                <div className="flex gap-8">
                    <Link className="hover:text-blue-600 active:font-medium" href="/">Home</Link>
                    <Link className="hover:text-blue-600 active:font-medium" href="#">Project</Link>
                    <Link className="hover:text-blue-600 active:font-medium" href="#">Profile</Link>
                    <Link className="hover:text-blue-600 active:font-medium" href="/About">About Us</Link>
                    <Link className="hover:text-blue-600 active:font-medium" href="/Blog">Blog</Link>
                    <Link className="hover:text-blue-600 active:font-medium" href="/Contact">Contact</Link>
                </div>
                <div className="flex gap-6 text-center">
                    <button
                        onClick={Login}
                        className="border border-blue-600 h-10 w-22 rounded-[5px] text-blue-600 hover:bg-blue-600 hover:text-white active:opacity-50 cursor-pointer"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={register}
                        className="bg-blue-600 h-10 w-22 rounded-[5px] text-white hover:bg-white hover:border hover:text-blue-600 active:opacity-50  cursor-pointer"
                    >
                        Join
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden">
                <div className=" max-w-[600px] flex justify-between mx-2 items-center">
                    <p className="font-bold text-blue-600">
                        <span className="rounded-full py-1 pl-1 bg-gray-100">Gig</span>Nation
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
                    <Link onClick={hidnavbar} href="#">Project</Link>
                    <Link onClick={hidnavbar} href="#">Profile</Link>
                    <Link onClick={hidnavbar} href="/About">About Us</Link>
                    <Link onClick={hidnavbar} href="/Blog">Blog</Link>
                    <Link onClick={hidnavbar} href="/Contact">Contact</Link>
                    <button className="border border-blue-600 h-10 w-22 rounded-[5px] text-blue-600 hover:bg-blue-600 hover:text-white active:opacity-50">
                        Sign In
                    </button>
                    <button onClick={register} className="bg-blue-600 h-10 w-22 rounded-[5px] text-white hover:bg-white hover:text-blue-600 active:opacity-50">
                        Join
                    </button>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
