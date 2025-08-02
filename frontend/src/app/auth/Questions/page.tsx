'use client'
import { FaUserTie, FaShieldAlt, FaBolt, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { motivation, workstyle, communication } from "@/lib/questionsData";
import Select from "react-select";
import { useState } from "react";
import Image from "next/image";
import { url } from "inspector";
import Sidebar from "@/components/sidebar";

export default function AfterLogin() {

    const router = useRouter();
    const startquestions = () =>{
        router.push("/auth/Questions/profile")
    }
    return (
        <div className=" flex   flex-col-reverse justify-between lg:flex-row ">
            <div className=" flex flex-col justify-center items-center text-center xl:ml-20 gap-12 mt-10 pb-10 lg:pb-0 ">
                <p className=" text-[25px] md:text-[35px] lg:text-[30px] w-full lg:w-110 font-semibold " >Hey Adam. Ready for your
                    next big opportunity?
                </p>
                <div className=" flex flex-col gap-4 md:text-[25px] lg:text-[16px] ">
                    <p>Build a profile to show the world what you can do</p>
                    <hr></hr>
                    <p>Apply on jobs posted from clients, around the world</p>
                    <hr></hr>
                    <p>Get paid safely and know we’re here to help</p>
                </div>
                <button onClick={startquestions} className=" w-80 h-10 rounded-[20px] text-white bg-[#7A4D8B]  hover:opacity-55 active:opacity-30 cursor-pointer " >Create Your Profile</button>
            </div>

            <div className="">
                <Sidebar/>
            </div>
        </div>
    );
}
