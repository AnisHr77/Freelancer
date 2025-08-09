// 'use client'
// import { useRouter } from "next/navigation";
// import { motivation, workstyle, communication } from "@/lib/questionsData";
// import Select from "react-select";
// import { useState } from "react";
// import Image from "next/image";
// import Sidebar from "./sidebar";
// import { MdNavigateBefore } from "react-icons/md";
// import Link from "next/link";
// import { freelancerCategories, Years, freelancerCategoryTools } from "@/lib/questionsData";
// import { handleApiError } from '@/utils/handelerror';
// import axios from "axios";
// type Option = {
//     value: string;
//     label: string;
// }
// // axios.defaults.withCredentials = true;

// // function getCookie(name: string): string | null {
// //     const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
// //     return match ? decodeURIComponent(match[2]) : null;
// // }
// export default function ProfileForm() {
//     const router = useRouter();
//     const [width, setWidth] = useState({ width: "0" });
//     const submit = async () => {
//         try {
//             await axios.get('http://localhost:8001/sanctum/csrf-cookie');
//             // const csrfToken = getCookie('XSRF-TOKEN');
//             const response = await axios.get("http://localhost:8001/surveys"
//             )
//             alert("success bro");
//             console.log(response.data)
//         } catch (error: any) {
//             handleApiError(error);
//         }

//         // // router.push("/auth/Questions/skills")
//         // if (selectcategory) {
//         //     setWidth({ width: "50px" })
//         // }

//     }

//     const [selectcategory, setSelectcategory] = useState<Option[]>([]);
//     const [selectyear, setSelectyear] = useState<Option[]>([]);
//     const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

//     const communications: Option[] = communication.map((communicate) => ({
//         value: communicate.value,
//         label: communicate.label,
//     }));
//     const categoryOptions: Option[] = freelancerCategories.map((category) => ({
//         value: category.name,
//         label: category.name,
//     }));

//     const worksstyle: Option[] = workstyle.map((style) => ({
//         value: style.value,
//         label: style.label,
//     }));

//     const motivations: Option[] = motivation.map((motivate) => ({
//         value: motivate.value,
//         label: motivate.label,
//     }))

//     return (
//         <div className="  flex   flex-col-reverse justify-between  lg:flex-row " >
//             <div className=" w-full  py-5 flex flex-col items-center lg:items-start     ">
//                 <div className="  mt-5   grid gap-4 ">
//                     <p className=" font-semibold text-[40px] xl:ml-40 lg:ml-10 xl:w-100  " >Create profile</p>
//                 </div>
//                 <Link href={"/auth/Questions"} ><MdNavigateBefore className=" w-12 h-12 lg:ml-10 xl:ml-20 mt-5 " /></Link>
//                 <div className=" w-80 md:w-100 h-1 lg:ml-10 xl:ml-25 mt-5 bg-[#d6d6d6] rounded-[20px] ">
//                     <div style={{ width: width.width }} className=" w-0 bg-[#7A4D8B] h-1 rounded-[20px] "></div>
//                 </div>
//                 <form onSubmit={submit} className="lg:ml-10 xl:ml-30 mt-10  flex flex-col items-center lg:items-start " >
//                     <label className="block pb-3   mt-5 font-semibold " >First, add a title to tell the world what you do.</label>
//                     <Select
//                         isMulti
//                         options={categoryOptions}
//                         value={selectcategory}
//                         onChange={(option) => setSelectcategory(option as Option[])}
//                         placeholder="Example: Web developer | Web & Mobile"
//                         className="  w-80 md:w-100 mt-10 h-10 border bg-[#E5E5EF]   rounded-[5px] "
//                         required
//                     />
//                     {/* <label className="block pb-3 mt-5">What motivates you the most in your work?</label>
//                     <Select
//                         isMulti
//                         options={motivations}
//                         value={selectyear}
//                         onChange={(option) => setSelectyear(option as Option[])}
//                         placeholder="Select years of experience..."
//                         className="  w-80 md:w-100  h-10 border  rounded-[5px] "
//                         required
//                     />
//                     <label className="block pb-3 mt-5 ">How would you describe your work style?</label>
//                     <Select
//                         isMulti
//                         options={worksstyle}
//                         value={selectedOptions}
//                         onChange={(selected) => setSelectedOptions(selected as Option[])}
//                         placeholder="Select tools or type to search..."
//                         className="  w-80 md:w-100  h-10 border  rounded-[5px] "
//                         required
//                     /> */}
//                     <button
//                         type="submit"
//                         // onClick={submit}
//                         className="w-80 h-10 rounded-[20px] lg:ml-10 bg-[#7A4D8B] text-white mt-15   cursor-pointer border hover:opacity-50     active:opacity-30 "
//                     >
//                         Next
//                     </button>
//                 </form>
//             </div>
//             <div className="">
//                 <Sidebar />
//             </div>
//         </div>
//     );
// }

"use client";
import { useState } from "react";

export default function QuestionsPage() {
    // Hardcoded questions
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
            question: "Your gender?",
            type: "radio",
            options: ["Male", "Female", "Other"],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    const currentQuestion = questions[currentIndex];

    function handleAnswer(value) {
        setAnswers({ ...answers, [currentQuestion.id]: value });
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1); // go to next question
        } else {
            console.log("All answers:", answers);
            alert("Survey complete!");
        }
    }

    console.log(answers)

    return (
        <div style={{ padding: "20px" }}>
            <h1>Question {currentIndex + 1} of {questions.length}</h1>
            <QuestionField question={currentQuestion} onAnswer={handleAnswer} />
        </div>
    );
}

function QuestionField({ question, onAnswer }) {
    switch (question.type) {
        case "text":
            let textValue = "";
            return (
                <div>
                    <label>{question.question}</label>
                    <input
                        type="text"
                        onChange={(e) => (textValue = e.target.value)}
                        style={{ display: "block", marginTop: "5px" }}
                    />
                    <button onClick={() => onAnswer(textValue)} style={{ marginTop: "10px" }}>
                        Next
                    </button>
                </div>
            );

        case "checkbox":
            let selected = [];
            return (
                <div>
                    <label>{question.question}</label>
                    <div>
                        {question.options?.map((option, i) => (
                            <label key={i} style={{ display: "block" }}>
                                <input
                                    type="checkbox"
                                    value={option}
                                    onChange={(e) => {
                                        if (e.target.checked) selected.push(option);
                                        else selected = selected.filter((o) => o !== option);
                                    }}
                                />{" "}
                                {option}
                            </label>
                        ))}
                    </div>
                    <button onClick={() => onAnswer(selected)} style={{ marginTop: "10px" }}>
                        Next
                    </button>
                </div>
            );

        case "radio":
            let radioValue = "";
            return (
                <div>
                    <label>{question.question}</label>
                    <div>
                        {question.options?.map((option, i) => (
                            <label key={i} style={{ display: "block" }}>
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option}
                                    onChange={() => (radioValue = option)}
                                />{" "}
                                {option}
                            </label>
                        ))}
                    </div>
                    <button onClick={() => onAnswer(radioValue)} style={{ marginTop: "10px" }}>
                        Next
                    </button>
                </div>
            );

        default:
            return null;
    }
}
