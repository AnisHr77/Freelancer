import Image from "next/image";
interface FeaturesCardProps {
    imageUrl: String,
    title: String,
    desc: String,
}
export default function FeaturesCard({ imageUrl, title, desc }: FeaturesCardProps) {
    return (
        <div className="  w-full h-80 ">
            <div className=" shadow-2xl rounded-[5px] p-2 w-85 md:w-80 h-70 flex flex-col gap-2 bg-white ">
                <Image alt="" width={50} height={50} src={imageUrl as string} className=" bg-[#3F5FFF] w-12 h-12 rounded-full " />
                <p className=" text-[20px] ">{title}</p>
                <p className=" mt-8 text-[gray] text-[14px] ">{desc}</p>
            </div>
        </div>
    );
}