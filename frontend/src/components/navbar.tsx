'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useRouter } from 'next/navigation'; // ✅ correct for App Router

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter(); // ✅ moved hook to top level

    const register = () => {
        router.push("/auth/Register");
    };

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
                    <button className="border border-blue-600 h-10 w-22 rounded-[5px] text-blue-600 hover:bg-blue-600 hover:text-white active:opacity-50">
                        Sign In
                    </button>
                    <button
                        onClick={register}
                        className="bg-blue-600 h-10 w-22 rounded-[5px] text-white hover:bg-white hover:text-blue-600 active:opacity-50"
                    >
                        Join
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden max-w-[600px] flex justify-between mx-2 items-center">
                <p className="font-bold text-blue-600">
                    <span className="rounded-full py-1 pl-1 bg-gray-100">Gig</span>Nation
                </p>
                <button onClick={() => setIsOpen(true)} className="w-10 h-10">
                    <BsList className="w-10 h-10" />
                </button>
                <button onClick={() => setIsOpen(false)} className="w-10 h-10 hidden">
                    <IoMdClose className="w-10 h-10" />
                </button>
            </div>

            {isOpen && (
                <div className="z-50 bg-white fixed top-0 right-0 h-screen w-screen flex flex-col gap-4 items-center pt-20">
                    <Link href="/">Home</Link>
                    <Link href="#">Project</Link>
                    <Link href="#">Profile</Link>
                    <Link href="/About">About Us</Link>
                    <Link href="/Blog">Blog</Link>
                    <Link href="/Contact">Contact</Link>
                    <button className="border border-blue-600 h-10 w-22 rounded-[5px] text-blue-600 hover:bg-blue-600 hover:text-white active:opacity-50">
                        Sign In
                    </button>
                    <button onClick={register} className="bg-blue-600 h-10 w-22 rounded-[5px] text-white hover:bg-white hover:text-blue-600 active:opacity-50">
                        Join
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
