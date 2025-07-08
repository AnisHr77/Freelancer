'use client'
import { useRouter } from "next/navigation";
import { motivation, workstyle, communication } from "@/lib/questionsData";
import Select from "react-select";
import { useState } from "react";
import Image from "next/image";
type Option = {
    value: string;
    label: string;
}

export default function ProfileForm() {
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
        <div className="flex justify-around" >
            <div className="pl-10 py-5 flex flex-col items-center md:items-start  ">
                <p className=" font-medium text-[20px] " >Please put your answer in the input feild </p>
                <form onSubmit={submit} >
                    <label className="block pb-3 mt-5 " >What is your preferred communication tool?</label>
                    <Select
                        isMulti
                        options={communications}
                        value={selectcategory}
                        onChange={(option) => setSelectcategory(option as Option[])}
                        placeholder="Select services or type to search..."
                        className="  w-80 md:w-150  h-10 border  rounded-[5px] "
                        required
                    />
                    <label className="block pb-3 mt-5">What motivates you the most in your work?</label>
                    <Select
                        isMulti
                        options={motivations}
                        value={selectyear}
                        onChange={(option) => setSelectyear(option as Option[])}
                        placeholder="Select years of experience..."
                        className="  w-80 md:w-150  h-10 border  rounded-[5px] "
                        required
                    />
                    <label className="block pb-3 mt-5 ">How would you describe your work style?</label>
                    <Select
                        isMulti
                        options={worksstyle}
                        value={selectedOptions}
                        onChange={(selected) => setSelectedOptions(selected as Option[])}
                        placeholder="Select tools or type to search..."
                        className="  w-80 md:w-150  h-10 border  rounded-[5px] "
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
            <div className="hidden lg:flex ">
                <Image alt="" src={"/Working.png"} width={200} height={100} className=" w-100 h-100 mt-10 " />
            </div>
        </div>
    );
}