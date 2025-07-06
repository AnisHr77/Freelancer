'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Joinsection() {
    const router = useRouter();
    const register = () => {
        router.push("/auth/Register");
    };
    return (
        <div className="flex flex-col items-center gap-10 px-25 ">
            <h1 className="text-center font-bold text-[25px]   md:text-[30px] w-80 md:w-148" >For more features you can  <span className="text-[#3F5FFF]">Join our community</span> by clicking in <span className="text-[#3F5FFF]">blue</span> button  </h1>
            <div  className=" join-section w-80 md:w-full   rounded-[5px] relative ">
                <div
                    style={{ backgroundColor: 'rgba(128, 128, 128, 0.6)' }}
                    className="text-white  font-medium text-[20px] h-50 flex flex-col gap-2 justify-center items-center md:items-start text-center px-8 rounded-[5px] md:text-left md:px-15 md:w-120 absolute right-0 bottom-0"
                >
                    <p className="   md:w-65">
                        Stay Up to Date with our Latest Innovations: Sign Up for Our Newsletter!
                    </p>
                    <button onClick={register} className="bg-[#3F5FFF] text-white w-30 h-10 text-[16px]  rounded-[5px] cursor-pointer hover:opacity-80">
                        Join Now</button>
                    <Image
                        src="/dot.png"
                        width={10}
                        height={10}
                        alt=""
                        className="absolute w-10 h-10"
                    />
                </div>
            </div>

        </div>
    );
}