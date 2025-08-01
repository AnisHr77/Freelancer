'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Joinsection() {
    const router = useRouter();
    const register = () => {
        router.push("/auth/Register");
    };
    return (
        <div className=" relative   w-full h-60 bg-[#E5E5EF] flex flex-col justify-center items-center gap-4 text-center mt-20 ">
            <p className=" z-40 bg-transparent text-black font-bold " >Join us</p>
            <p className="text-black w-100  z-40 bg-transparent " > Stay Up to Date with our lastes Innovations.</p>
            <button className="  z-40  w-35 h-10 text-[15px] font-semibold rounded-[20px] text-white bg-[#4260DA]  hover:bg-transparent hover:border hover:text-black " >join us</button>
            <div className="">
                <img src={"/Vector2.png"} alt="" className="absolute bottom-0  left-0 w-70 h-50 " />
            </div>
            <div className="">
                <img src={"/Vector3.png"} alt="" className="absolute bottom-0  right-0 w-70 h-50 " />
            </div>
        </div>
    );
}