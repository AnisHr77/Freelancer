// import React from 'react'

// const Page = () => {
//     return (
//         <div>Page</div>
//     )
// }

// export default Page



// components/WhatWeOffer.tsx
'use client'
import { FaUserTie, FaShieldAlt, FaBolt, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { motivation, workstyle, communication } from "@/lib/questionsData";
import Select from "react-select";
import { useState } from "react";
import Image from "next/image";
import { url } from "inspector";
type Option = {
    value: string;
    label: string;
}

export default function WhatWeOffer() {

    const router = useRouter();

    const submit = async () => {
        console.log("form submited");
        router.push("/auth/Questions/skills")
    }

    const [selectcategory, setSelectcategory] = useState<Option[]>([]);
    const [selectyear, setSelectyear] = useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const communications: Option[] = communication.map((communicate) => ({
        value: communicate.value,
        label: communicate.label,
    }));

    const worksstyle: Option[] = workstyle.map((style) => ({
        value: style.value,
        label: style.label,
    }));

    const motivations: Option[] = motivation.map((motivate) => ({
        value: motivate.value,
        label: motivate.label,
    }))
    return (
        <div className=" flex justify-between  ">
            <div className=" flex flex-col justify-center items-center text-center ml-20 gap-12 mt-10 ">
                <p className=" text-[30px] w-110 font-semibold " >Hey Adam. Ready for your
                    next big opportunity?
                </p>
                <div className=" flex flex-col gap-4 ">
                    <p>Build a profile to show the world what you can do</p>
                    <hr></hr>
                    <p>Apply on jobs posted from clients, around the world</p>
                    <hr></hr>
                    <p>Get paid safely and know we’re here to help</p>
                </div>

                <button className=" w-80 h-10 rounded-[20px] text-white bg-[#7A4D8B] " >Create Your Profile</button>
            </div>
            <div
                style={{ backgroundImage: `url('/wave2.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                className="h-130 w-170 flex flex-col items-center pl-30 gap-2  "
            >
                <p className="  text-[white] ml-10 mt-10 text-[40px] ">
                    <span className=' font-bold  ' >Task</span>linker
                </p>
                <img src={"/Frame.png"} className=" w-70 h-60 " />
                <p className=" text-center w-90 text-white font-medium " >Join our community of talented freelancers and connect with clients from around the world.</p>
            </div>
        </div>
    );
}
