'use client'
import Questionspart1 from '@/components/Questionspart1'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
const Page = () => {
    const [animate, setAnimate] = useState(false);
    const [category1, setCategory1] = useState({display: "block"});
    const [category2, setCategory2] = useState({display: "none"});
    const [category3, setCategory3] = useState({display: "none"});
    const router = useRouter();
    const click = () => {
        setCategory1({display: "none"});
        setCategory2({display: "block"});
        setAnimate(true);
    }
    const click2 = () => {
        setCategory2({display: "none"});
        setCategory3({display: "block"});
        setAnimate(true);
    }
    return (
        <div  className='flex h-screen w-screen'>
            <div style={category1} className={` ${animate ? 'animate-slide' : ''} w-[55%]    h-full`}>
                <Questionspart1
                    title="proffisional detailes"
                    desc="please add your answers inside the input field"
                    Q1="What services do you offer?"
                    Q2="What is your expertise area? (e.g. Graphic Design, Web Development)"
                    Q3="How many years of experience do you have?"
                    value="Next"
                    onClick={click} />
            </div>
            <div style={category2} className={` ${animate ? 'animate-slide' : ''} w-[55%]    h-full`}>
                <Questionspart1
                    title="Skills and Tools"
                    desc="please add your answers inside the input field"
                    Q1="List your key skills"
                    Q2="Which tools or software do you use regularly?"
                    Q3="Do you have any certifications? (upload or list)"
                    value="Next"
                    onClick={click2} />
            </div>
            <div style={category3} className={` ${animate ? 'animate-slide' : ''} w-[55%]    h-full`}>
                <Questionspart1
                    title="Portfolio / Experience"
                    desc="please add your answers inside the input field"
                    Q1="Have you worked on freelance platforms before?"
                    Q2="Upload sample work or past projects"
                    Q3="Link to your portfolio or website"
                    value="Next"
                    onClick={click} />
            </div>
            <div className="w-[45%] z-50  items-center text-center h-full hidden    md:flex flex-col justify-center">
                <Image
                    width={800}
                    height={70}
                    src="/Freelancer.png"
                    alt=''
                />
            </div>
        </div>
    )
}

export default Page