import Questionspart1 from '@/categories/profissionale-detailes/Questionspart1'
import Sidebar from '@/components/sidebar'
import React from 'react'

const Page = () => {
    
    return (
        <div className='flex h-screen w-screen'>
            <div className="w-[55%] h-full ">
                <Questionspart1
                    title="proffisional detailes2"
                    desc="please add your answer inside the input field"
                    Q1="What services do you offer?"
                    Q2="What is your expertise area?"
                    Q3="How many years of experience do you have?"
                    value="Next" />
            </div>
            <div className="w-[45%]   items-center text-center h-full bg-[#007AFF]   flex flex-col justify-center">
                <Sidebar />
            </div>
        </div>
    )
}

export default Page