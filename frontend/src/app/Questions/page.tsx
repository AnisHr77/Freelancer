'use client'
import Questionspart1 from '@/categories/profissionale-detailes/Questionspart1'
import Sidebar from '@/components/sidebar'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
const Page = () => {
    const [animate, setAnimate] = useState(false);
    const router = useRouter();
    const click = () => {
        router.push("/q2");
        setAnimate(true);
    }

    return (
        <div className='flex h-screen w-screen'>
            <div className={` ${animate ? 'animate-slide' : ''} w-[55%] h-full`}>
                <Questionspart1
                    title="proffisional detailes"
                    desc="please add your answer inside the input field"
                    Q1="What services do you offer?"
                    Q2="What is your expertise area?"
                    Q3="How many years of experience do you have?"
                    value="Next"
                    onClick={click} />
            </div>
            <div className="w-[45%] z-50  items-center text-center h-full bg-[#007AFF]   flex flex-col justify-center">
                <Sidebar />
            </div>
        </div>
    )
}

export default Page