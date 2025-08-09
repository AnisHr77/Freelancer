'use client';
import QuestionHandler from '@/components/skillform';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Sidebar from '@/components/sidebar';
import { MdNavigateBefore } from "react-icons/md";
export default function FreelancerQuestionPage() {
    const { QuestionCategory } = useParams();

    const questions = [
        { id: 1, question: "What is your name?", type: "text" },
        {
            id: 2,
            question: "Select your hobbies",
            type: "checkbox",
            options: ["Reading", "Gaming", "Traveling"],
        },
        {
            id: 3,
            question: "Your money by hour?",
            type: "select",
            options: ["5", "20", "100"],
        },
        {
            id: 4,
            question: "Your languages?",
            type: "select",
            options: ["arabic", "english", "french"],
        },
        {
            id: 5,
            question: "Your work?",
            type: "select",
            options: ["Male", "Female", "Other"],
        },
        {
            id: 6,
            question: "Your skills?",
            type: "select",
            options: ["react", "php", "python"],
        },
        // {
        //     id: 7,
        //     question: "Your skills 2?",
        //     type: "selectmelutiple",
        //     options :[
        //         { value: "Apple", label: "Apple" },
        //         { value: "Banana", label: "Banana" },
        //         { value: "Orange", label: "Orange" }
        //     ],
        // },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string | string[]>>({});

    const currentQuestion = questions[currentIndex];

    const handleAnswers = (value: string | string[]) => {
        setAnswers({ ...answers, [currentQuestion.id]: value });
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log("Finished!", answers);
        }
    };
    const deacrease = () => {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1);
        }

    }
    console.log("Answers so far:", answers);

    return (
        <div className=" flex   flex-col-reverse justify-between  lg:flex-row">
            <div className="">
                <div className="  mt-5   grid gap-4 ">
                    <p className=" font-semibold text-[40px] xl:ml-40 lg:ml-10 xl:w-100  " >Create profile</p>
                </div>
                <button   ><MdNavigateBefore onClick={deacrease} className=" w-12 h-12 lg:ml-10 xl:ml-20 mt-5 " /></button>
                <div className=" w-80 md:w-100 h-1 lg:ml-10 xl:ml-25 mt-5 bg-[#d6d6d6] rounded-[20px] ">
                    <div className=" w-0 bg-[#7A4D8B] h-1 rounded-[20px] "></div>
                </div>
                <QuestionHandler
                    onAnswer={handleAnswers}
                    questions={currentQuestion}
                />
            </div>
            <div className="">
                <Sidebar />
            </div>
        </div>
    );
}
