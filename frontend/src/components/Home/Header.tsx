import Image from "next/image";
import { CiSearch } from "react-icons/ci";
export default function Header() {
    return (
        <header className="w-full h-auto flex flex-col justify-around items-center lg:flex-row ">
            <div className=" text-center flex flex-col gap-8 lg:ml-5 ">
                <p
                    className="text-[30px] w-full mt-10 text-center  font-bold lg:mt-0 lg:max-w-[450px]  lg:text-[40px] lg:text-left ">
                    The Ultimate Destination for <span className=" text-[#3F5FFF] ">freelance Talent</span> and <span className=" text-[#3F5FFF] " >Quality Services!</span>
                </p>
                <p className=" text-[gray] lg:max-w-[520px] lg:text-left  ">
                    Whether you're a business owner or a freelancer,
                    Tasklinker is your one-stop-shop for finding or offering freelance services.
                    Join our community today and start getting things done!
                </p>
                <form className="flex flex-col gap-2 justify-center items-center  lg:justify-start md:flex-row">
                    <div className="flex items-center border border-[gray] rounded-[5px] lg:w-90  w-80 ">
                        <CiSearch className="w-6 h-6 ml-2 text-[gray]" />
                        <input
                            type="search"
                            placeholder="What are you looking for?"
                            name="search-input"
                            className="w-full  h-10 outline-none pl-2 placeholder-[#b3b2b2] "
                            required
                        />
                    </div>
                    <button type="submit" className="w-27 h-10 rounded-[5px] bg-[#3F5FFF] text-white cursor-pointer hover:bg-white hover:text-[#007AFF] hover:border active:opacity-50">
                        Search
                    </button>
                </form>
            </div>
            <div className="">
                <Image alt="" src="/picture2.webp" width={500} height={500} className="" />
            </div>
        </header>
    );
}