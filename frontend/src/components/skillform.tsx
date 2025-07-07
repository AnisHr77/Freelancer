'use client'
import { useParams , useRouter } from "next/navigation";
import { freelancerCategories } from "@/lib/questionsData";
import { Years } from "@/lib/questionsData";
import { freelancerCategoryTools } from "@/lib/questionsData";
import Select from "react-select";
import { useState } from "react";

type Option = {
    value: string;
    label: string;
}

export default function SkillsForm() {
const router = useRouter();

    const submit = async()=>{
        console.log("form submited");
        router.push("/auth/Questions/portfolio")
    }

    const [selectcategory, setSelectcategory] = useState<Option[]>([]);
    const [selectyear, setSelectyear] = useState<Option | "">("");
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const params = useParams();
    const questioncategory = params.QuestionCategory;

    const categoryname = selectcategory.map((opt) => opt.value)
    const tools: string[] = categoryname.flatMap(tool => freelancerCategoryTools[tool]);

    const toolOptions: Option[] = tools.map((tool) => ({
        value: tool,
        label: tool,
    }));

    const categoryOptions: Option[] = freelancerCategories.map((category) => ({
        value: category.name,
        label: category.name,
    }));

    const yearofexperience: Option[] = Years.map((year) => ({
        value: year.value,
        label: year.label,
    }))

    return (
        <>
            <div className="pl-10 py-10    ">
                <div className=" grid gap-4 ">
                    <p className=" font-bold text-[30px] text-[#3F5FFF] " >Tasklinker</p>
                    <p className=" font-medium text-[20px] " >Please put your answer the input feild </p>
                </div>
                <form>
                    <label className="block pb-3 mt-5 " >What services do you offer?</label>
                    <Select
                        isMulti
                        options={categoryOptions}
                        value={selectcategory}
                        onChange={(option) => setSelectcategory(option as Option[])}
                        placeholder="Select services or type to search..."
                        className=" w-150 h-10 border  rounded-[5px] "
                        required
                    />
                    <label className="block pb-3 mt-5">Years of experience?</label>
                    <Select
                        options={yearofexperience}
                        value={selectyear}
                        onChange={(option) => setSelectyear(option as Option)}
                        placeholder="Select years or type to search..."
                        className=" w-150 h-10 border  rounded-[5px] "
                        required
                    />
                    <label className="block pb-3 mt-5 ">Which tools do you use</label>
                    <Select
                        isMulti
                        options={toolOptions}
                        value={selectedOptions}
                        onChange={(selected) => setSelectedOptions(selected as Option[])}
                        placeholder="Select tools or type to search..."
                        className=" w-150 h-10 border  rounded-[5px] "
                        required
                    />
                    <button
                        type="submit"
                        className="w-30 h-10 rounded-[5px] bg-[#3F5FFF] text-white mt-10 ml-120 cursor-pointer border hover:text-[#3F5FFF] hover:bg-[white] hover:border-[#3F5FFF] active:opacity-50 "
                    >
                        Next
                    </button>
                </form>
            </div>
            <div className="">

            </div>
        </>
    );
}