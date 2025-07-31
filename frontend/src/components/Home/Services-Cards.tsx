import Image from "next/image";
import FeaturesCard from "../features-card";
import { Cards } from "@/lib/CardsData";

export default function ServicesCards() {
    return (
        <section className="relative w-full h-110 bg-[#7A4D8B] grid pt-10 " >
            <p className="text-white text-center text-[20px] md:text-[30px] lg:text-[40px] font-bold">What We Offer</p>
            <p className=" text-[#CFC9C9] text-center " >TaskLinker gives you everything you need to hire smarter and work faster.</p>
            <div className=" z-40 bg-transparent grid grid-cols-1 gap-10  lg:grid-cols-4 md:grid-cols-2 mt-10  ">
                <div className=" flex flex-col items-center gap-4">
                    <p className=" text-white font-bold text-center text-[20px] " >Desgin</p>
                    <p className=" text-[#C9C6C6] text-center " >Creative professionals who craft
                        stunning visuals, logos, and user
                        interfaces that make your brand
                        stand out.</p>
                </div>
                <div className=" flex flex-col items-center gap-4">
                    <p className=" text-white font-bold text-center text-[20px] " >Devalop</p>
                    <p className=" text-[#C9C6C6] text-center " >  Skilled coders who build
                        responsive websites, web apps,
                        and digital platforms using the
                        latest technologies.</p>
                </div>
                <div className=" flex flex-col items-center gap-4">
                    <p className=" text-white font-bold text-center text-[20px] " >Video</p>
                    <p className=" text-[#C9C6C6] text-center " >  Professionals who produce high-
                        quality videos — from editing to
                        animation — to tell your story
                        visually.</p>
                </div>
                <div className=" flex flex-col items-center gap-4">
                    <p className=" text-white font-bold text-center text-[20px] " >Marketing</p>
                    <p className=" text-[#C9C6C6] text-center " >  Experts in digital marketing who help you reach your audience, grow your brand, and boost sales.</p>
                </div>
            </div>
            {/* <div className="">
                <img src={"/Vector.png"} alt="" className="absolute top-0  left-0 w-70 h-50 rotate-70" />
            </div>
            <div className="">
                <img src={"/Vector4.png"} alt="" className="absolute top-0  right-0 w-70 h-60  " />
            </div> */}
        </section>
    )

}