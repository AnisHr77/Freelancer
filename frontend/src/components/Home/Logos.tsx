import Image from "next/image";

export default function Logos() {
    return (
        <div className="flex gap-10 items-start w-screen">
            <div className="flex gap-20 bg-[#f7f4f4]  ">
                <Image alt="" src="/digital-eagle.png" width={250} height={200} className="   " />
                <Image alt="" src="/LOREM-IPSUM.jpg" width={100} height={50} className=" w-30 h-30 mt-5 " />
                <Image alt="" src="/phoenix.png" width={200} height={200} className="w-30 h-30 mt-5" />
                <Image alt="Curtural diversity" src="/istock.png" width={200} height={200} className="w-30 h-30 mt-5" />
                <Image alt="Logo Text" src="/text.png" width={200} height={200} className="w-30 h-30 mt-5" />
            </div>
        </div>
    )
}