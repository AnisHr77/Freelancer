// 'use client'
// import React from 'react'
// type ButtonProps = {
//     onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// };
// interface questions {
//     title: String,
//     desc: String,
//     value: String,
// }
// type Questioncard = questions 

// const questionss = [
//     { label: "Your name", type: "password" },
//     { label: "Your birthdate", type: "date" },
//     { label: "Your age", type: "number" },
// ];
// const Quiz = ({ title, desc, value }: Questioncard) => {

//     return (
//         <div className=' '>
//             <p className=' logo text-[35px] absolute ml-4 mt-4 font-bold text-[#007AFF]'>GitNotaion</p>
//             <div className="flex flex-col items-center pl-10 pt-15 justify-center gap-10">
//                 <p className='font-bold text-[30px]'>{title}</p>
//                 <p className='text-[16px]'>{desc}</p>
//                 <form className=''>
//                     {questionss.map((q, index) => (
//                         <div key={index} className=" ">
//                             <label className='block'>{q.label}</label>
//                             <input
//                                 type={q.type}
//                                 name={`answer${index + 1}`}
//                                 placeholder='Put your answer here'
//                                 className='w-150 h-10 rounded-[5px] border pl-2 outline-none'
//                                 required
//                             />
//                         </div>
//                     ))}
//                     <button
//                         type='submit'
//                         className='w-30 h-10 rounded-[5px] bg-[#007AFF] ml-120 mt-10 text-white font-bold cursor-pointer'
//                     // onClick={onClick}
//                     >{value}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Quiz
'use client';
import React from 'react';

export default function Information1() {
    const Questions = {
        personaldeitailes: {
            p_question1: ["What services do you offer?", "text"],
            p_question2: ["What is your expertise area? (e.g. Graphic Design, Web Development)", "text"],
            p_question3: ["How many years of experience do you have?", "text"],
        },
        skillsandtools: {
            s_question1: ["List your key skills", "select"],
            s_question2: ["Which tools or software do you use regularly?", "text"],
            s_question3: ["Do you have any certifications? (upload or list)", "file"],
        },
        portfolioexperience: {
            p_question1: ["Have you worked on freelance platforms before?", "text"],
            p_question2: ["Upload sample work or past projects", "file"],
            p_question3: ["Link to your portfolio or website", "url"],
        }
    }
    return (
        <div className="">
            {Object.entries(Questions).map(([section, questions]) => (
                <div key={section}>
                    <h2>{section}</h2>
                    {Object.entries(questions).map(([questionKey, [questionText, questionType]]) => (
                        <div key={questionKey}>
                            <label>{questionText}</label>
                            {questionType === "select" ? (
                                <select>
                                    <option value="">Select an option</option>
                                    {/* Add more options here */}
                                </select>
                            ) : (
                                <input type={questionType}
                                    name={`answer${questionKey + 1}`}
                                    placeholder='Put your answer here'
                                    className='w-150 h-10 rounded-[5px] border pl-2 outline-none'
                                    required />
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}