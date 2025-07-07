import { PopularservicesData } from "@/lib/Popularservisesdata";
import Card from "@/components/Card";
export default function Popularservices() {
    return (
        <div className="flex flex-col items-center mt-20 gap-10">
            <h1 className="text-center font-bold text-[25px]   md:text-[30px] w-80 md:w-148"  >Discover our most popular services and get the <span className=" text-[#3F5FFF] " >job done with ease on GigNotion</span>  </h1>
            <div className=" grid grid-cols-1 gap-8    md:grid-cols-3 lg:grid-cols-4 ">
                {PopularservicesData.map((section, index) => (
                    <Card
                        title={section.title}
                        category={section.category}
                        name={section.name}
                        rating={section.rating}
                        price={section.price}
                        imageUrl={section.imageUrl}
                        profileImage={section.profilepicture}
                    />
                ))}
            </div>
        </div>
    );
}