import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full h-auto flex flex-col justify-around items-center lg:flex-row ">
            <div className=" text-center flex flex-col gap-8 lg:ml-5 ">
                <p
                    className="text-[30px] w-full mt-10 text-center  font-bold lg:mt-0 lg:max-w-[450px]  lg:text-[40px] lg:text-left ">
                    The Ultimate Destination for <span className=" text-[#007AFF] ">freelance Talent</span> and <span className=" text-[#007AFF] " >Quality Services!</span>
                </p>
                <p className=" text-[gray] lg:max-w-[520px] lg:text-left  ">
                    Whether you're a business owner or a freelancer,GigNotion is your one-stop-shop for findingor offering freelance services.
                    Join our community todayand start getting thing done!
                </p>
                <form className="flex flex-col gap-2  items-center   md:flex-row">
                    <input
                        type="search"
                        placeholder="What are you looking for?"
                        name="search-input"
                        className="w-full  h-10 rounded-[5px] border outline-none pl-2"
                        required
                    />
                    <button type="submit" className="w-20 h-10 rounded-[5px] bg-[#007AFF] text-white cursor-pointer hover:bg-white hover:text-[#007AFF] hover:border active:opacity-50">
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