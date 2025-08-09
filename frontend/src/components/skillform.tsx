// 'use client'
// import { useRouter } from "next/navigation";
// import { freelancerCategories, Years, freelancerCategoryTools } from "@/lib/questionsData";
// import Select from "react-select";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// type Option = {
//     value: string;
//     label: string;
// }



// export default function SkillsForm() {
//     const router = useRouter();

//     const submit = async () => {
//         console.log("form submited");
//         router.push("/auth/Questions/portfolio")
//     }

//     const [selectcategory, setSelectcategory] = useState<Option[]>([]);
//     const [selectyear, setSelectyear] = useState<Option | "">("");
//     const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

//     const categoryname = selectcategory.map((opt) => opt.value)
//     const tools: string[] = categoryname.flatMap(tool => freelancerCategoryTools[tool]);

//     const toolOptions: Option[] = tools.map((tool) => ({
//         value: tool,
//         label: tool,
//     }));

//     const categoryOptions: Option[] = freelancerCategories.map((category) => ({
//         value: category.name,
//         label: category.name,
//     }));

//     const yearofexperience: Option[] = Years.map((year) => ({
//         value: year.value,
//         label: year.label,
//     }))

//     return (
//         <div className="flex justify-around " >
//             <div className="  py-10 flex flex-col items-center md:items-start   ">
//                 <p className=" font-medium text-[20px] " >Please put your answer in the input feild </p>
//                 <form>
//                     <label className="block pb-3 mt-5 " >What services do you offer?</label>
//                     <Select
//                         isMulti
//                         options={categoryOptions}
//                         value={selectcategory}
//                         onChange={(option) => setSelectcategory(option as Option[])}
//                         placeholder="Select services or type to search..."
//                         className=" w-80 md:w-150 h-10 border  rounded-[5px] "
//                         required
//                     />
//                     <label className="block pb-3 mt-5">Years of experience?</label>
//                     <Select
//                         options={yearofexperience}
//                         value={selectyear}
//                         onChange={(option) => setSelectyear(option as Option)}
//                         placeholder="Select years or type to search..."
//                         className=" w-80 md:w-150 h-10 border  rounded-[5px] "
//                         required
//                     />
//                     <label className="block pb-3 mt-5 ">Which tools do you use</label>
//                     <Select
//                         isMulti
//                         options={toolOptions}
//                         value={selectedOptions}
//                         onChange={(selected) => setSelectedOptions(selected as Option[])}
//                         placeholder="Select tools or type to search..."
//                         className=" w-80 md:w-150 h-10 border  rounded-[5px] "
//                         required
//                     />
//                     <div className="flex justify-between">
//                         <Link
//                             href="/auth/Questions/profile"
//                             className=" w-20 h-10 mt-10 rounded-[5px] flex items-center justify-center bg-[#7a4d8b] text-white font-medium hover:bg-blue-700 transition "
//                         >
//                             Back
//                         </Link>
//                         <button
//                             type="submit"
//                             className="w-30 h-10 rounded-[5px] bg-[#3F5FFF] text-white mt-10   cursor-pointer border hover:text-[#3F5FFF] hover:bg-[white] hover:border-[#3F5FFF] active:opacity-50 "
//                         >
//                             Next
//                         </button>
//                     </div>
//                 </form>
//             </div>
//             <div className="hidden lg:flex ">
//                 <Image alt="" src={"/Working.png"} width={200} height={100} className=" w-100 h-100 mt-10 " />
//             </div>
//         </div>
//     );
// }

import { useState } from "react";

type Question = {
    id: Number
    type: string
    question: string;
    options?: string[];
};

type QuestionHandlerProps = {
    questions: Question;
    onAnswer: (value: (string | string[])) => void;
};
export default function Questionhandler({ questions, onAnswer }: QuestionHandlerProps) {
    const [selected, setSelected] = useState<string | string[]>(
        questions.type === "checkbox" ? [] : ""
    )
    console.log(selected)
    return (
        <div className="">
            {questions.type === "select" &&
                <div className="">
                    <p>{questions.question}</p>
                    <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        {questions.options?.map((question, index) => (
                            <option key={index} >{question}</option>
                        ))}
                    </select>
                </div>
            }
            {questions.type === "text" &&
                <div className="">
                    <p>{questions.question}</p>
                    <input type="text" placeholder="enter ypur answer please"
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)} />
                </div>
            }
            {questions.type === "checkbox" &&
                <div className="">
                    <p>{questions.question}</p>
                    {questions.options?.map((choice, index) => (
                        <div className="">
                            <input type={questions.type} placeholder="enter ypur answer please"
                                value={choice}
                                onChange={(e) => {
                                    if (e.target.checked) setSelected(choice);
                                }}
                            />
                            <p>{choice}</p>
                        </div>
                    ))}
                </div>
            }
            <button onClick={() => onAnswer(selected)}>Next</button>
        </div>
    );
}