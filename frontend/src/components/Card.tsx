import Image from "next/image";

interface CardProps {
    title: String,
    category: String,
    imageUrl: String,
    name: String,
    profileImage:String,
    price: String
    rating: String,
}
export default function Card({ title, category, imageUrl, name, profileImage, price, rating }: CardProps) {
    return (
        <div className="  cards   relative pt-5 w-60 h-90 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 ">
            <Image alt="" src={imageUrl as string} width={200} height={200} className="w-full h-30 object-cover rounded-[20px]" />
            <p className="text-[gray] ">{category}</p>
            <p className="text-[#020236] font-semibold w-full h-5 ">{title}</p>
            <div className=" mt-4 ">
                {rating}
            </div>
            <div className="flex items-center gap-2">
                <Image alt="" src={profileImage as string} width={50} height={50} className="w-10 h-10 rounded-full" />
                <p>{name}</p>
            </div>
            <hr className=" text-[#c7c3c3] " ></hr>
            <p className="bg-[#000034] mt-2 rounded-[5px] text-center text-white w-20">{price}</p>
        </div>
    );
}