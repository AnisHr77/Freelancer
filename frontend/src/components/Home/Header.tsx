import Image from "next/image";
import { CiSearch } from "react-icons/ci";
export default function Header() {
    return (
        // <header className="w-full h-auto flex flex-col justify-around items-center lg:flex-row ">
        //     <div className=" text-center flex flex-col gap-8 lg:ml-5 ">
        //         <p
        //             className="text-[30px] w-full mt-10 text-center  font-bold lg:mt-0 lg:max-w-[450px]  lg:text-[40px] lg:text-left ">
        //             The Ultimate Destination for <span className=" text-[#3F5FFF] ">freelance Talent</span> and <span className=" text-[#3F5FFF] " >Quality Services!</span>
        //         </p>
        //         <p className=" text-[gray] lg:max-w-[520px] lg:text-left  ">
        //             Whether you're a business owner or a freelancer,
        //             Tasklinker is your one-stop-shop for finding or offering freelance services.
        //             Join our community today and start getting things done!
        //         </p>
        //         <form className="flex flex-col gap-2 justify-center items-center  lg:justify-start md:flex-row">
        //             <div className="flex items-center border border-[gray] rounded-[5px] lg:w-90  w-80 ">
        //                 <CiSearch className="w-6 h-6 ml-2 text-[gray]" />
        //                 <input
        //                     type="search"
        //                     placeholder="What are you looking for?"
        //                     name="search-input"
        //                     className="w-full  h-10 outline-none pl-2 placeholder-[#b3b2b2] "
        //                     required
        //                 />
        //             </div>
        //             <button type="submit" className="w-27 h-10 rounded-[5px] bg-[#3F5FFF] text-white cursor-pointer hover:bg-white hover:text-[#007AFF] hover:border active:opacity-50">
        //                 Search
        //             </button>
        //         </form>
        //     </div>
        //     <div className="">
        //         <Image alt="" src="/picture2.webp" width={500} height={500} className="" />
        //     </div>
        // </header>
        <header className="w-full h-auto flex flex-col mt-5  ">
            <div className=" w-full h-60 bg-[#7A4D8B] flex   justify-around md:pl-10 py-5 relative ">
                <div className=" z-40 bg-transparent  flex flex-col mt-7 gap-4 items-center lg:items-start ">
                    <p className=" text-[20px] text-white font-bold md:text-[40px] lg:text-[30px] xl:text-[40px] " >Join world’s best market place</p>
                    <p className=" text-white text-center lg:text-left " >Find the best Talent and best works based on your skills from around the world.</p>
                    <div className=" flex gap-4 ">
                        <button className="bg-black text-[#ffff] rounded-[20px] px-8 py-2">Find Talent</button>
                        <button className="bg-transparent text-white border border-white rounded-[20px] px-8 py-2">Find Work</button>
                    </div>
                </div>
                <div className=" hidden lg:flex ">
                    <img src={"/headerimg.png"} alt="" className="   h-55 " />
                </div>
                <div className="">
                    <img src={"/Vector.png"} alt="" className="absolute bottom-0  left-0 w-70 h-50 " />
                </div>
            </div>
            <div className=" relative   w-full h-60 bg-[#E5E5EF] flex flex-col justify-center items-center gap-4 text-center">
                <p className=" z-40 bg-transparent text-black font-bold " >Find best Talents</p>
                <p className="text-black w-100  z-40 bg-transparent " >Find the best Talent and best works based on
                    your skills from around the world.</p>
                <button className="  z-40  w-35 h-10 text-[15px] font-semibold rounded-[20px] text-white bg-[#4260DA] " >Find Talents</button>
                <div className="">
                    <img src={"/Vector2.png"} alt="" className="absolute bottom-0  left-0 w-70 h-50 " />
                </div>
                <div className="">
                    <img src={"/Vector3.png"} alt="" className="absolute bottom-0  right-0 w-70 h-50 " />
                </div>
            </div>
        </header>
    );
}