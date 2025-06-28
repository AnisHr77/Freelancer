'use client'
import Link from 'next/link'
import React, { use, useState } from 'react'
import { Inter } from 'next/font/google'
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
    const [isopen, setIsOpen] = useState(false);
    const [isclose , setIsClose]  = useState(false);
    return (
        <nav className='container    max-w-screen min-w-[320px]  '>
            <div className="hidden container md:flex justify-around my-6 max-w-screen min-w-[320px] items-center">
                <p className='font-bold text-blue-600'><span className='rounded-full py-1 pl-1 bg-gray-100'>Gig</span>Nation</p>
                <div className="flex gap-8 ">
                    <Link className='hover:text-blue-600 active:font-medium' href="#">Home</Link>
                    <Link className='hover:text-blue-600 active:font-medium' href="#">Project</Link>
                    <Link className='hover:text-blue-600 active:font-medium' href="#">Profile</Link>
                    <Link className='hover:text-blue-600 active:font-medium' href="#">About Us</Link>
                    <Link className='hover:text-blue-600 active:font-medium' href="#">Blog</Link>
                    <Link className='hover:text-blue-600 active:font-medium' href="#">Contact</Link>
                </div>
                <div className="flex gap-6 text-center">
                    <button className='border border-[blue] h-10 w-22 rounded-[5px] text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white active:opacity-50'>Sign In</button>
                    <button className='bg-blue-600 h-10 border w-22 rounded-[5px] text-white cursor-pointer hover:bg-white hover:text-blue-600 active:opacity-50'>Join</button>
                </div>
            </div>
            <div className="md:hidden max-w-[600px] flex justify-between mx-2 items-center ">
                <p className='font-bold text-blue-600'><span className='  rounded-full py-1 pl-1 bg-gray-100'>Gig</span>Nation</p>
                <button style={{display : isopen ? "none" : "flex"}} onClick={() => { setIsOpen(true)  }} className='  w-10 h-10'><BsList className=' w-10 h-10 '/></button>
                <button style={{display : isopen ? "flex" : "none"}} onClick={() => { setIsOpen(false) }} className='hidden w-10 h-10'><IoMdClose className=' w-10 h-10' /></button>
                <div style={{display : isopen ? "flex" : "none"}} className=" absolute gap-4 items-center top-0  h-screen w-screen  mt-15  hidden flex-col">
                    <Link href="#">Home</Link>
                    <Link href="#">Project</Link>
                    <Link href="#">Profile</Link>
                    <Link href="#">About Us</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Contact</Link>
                    <button className='border border-[blue] h-10 w-22 rounded-[5px] text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white active:opacity-50'>Sign In</button>
                    <button className='bg-blue-600 h-10 border w-22 rounded-[5px] text-white cursor-pointer hover:bg-white hover:text-blue-600 active:opacity-50'>Join</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar