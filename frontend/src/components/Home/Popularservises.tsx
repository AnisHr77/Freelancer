import { PopularservicesData } from "@/lib/Popularservisesdata";
import Card from "@/components/Card";
export default function Popularservices() {
    const firstsection = PopularservicesData[0];
    const secondsection = PopularservicesData[1];

    return (
        <div className="flex flex-col items-center mt-20 gap-10">
            <h1 className="text-center font-bold text-[25px] md:text-[30px] w-80 md:w-148"  >Discover our most popular services and get the <span className=" text-[#3F5FFF] " >job done with ease on GigNotion</span>  </h1>
            <div className=" flex gap-8 ">
                <div className=" cards grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 ">
                    {firstsection.map((card, index) => (
                        <Card
                            title={card.title}
                            category={card.category}
                            name={card.name}
                            rating={card.rating}
                            price={card.price}
                            imageUrl={card.imageUrl}
                            profileImage={card.profilepicture}
                        />
                    ))}
                </div>
                <div className=" section2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 ">
                    {secondsection.map((section, index) => (
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

        </div>
    );
}