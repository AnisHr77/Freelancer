import Image from "next/image";
import FeaturesCard from "../features-card";
import { Cards } from "@/lib/CardsData";

export default function ServicesCards() {
    return (
        <div className=" flex flex-col items-center gap-20 mt-20 ">
            <h1 className="text-center font-bold text-[25px]  md:text-[30px] w-90 md:w-148 " >We're dedicated to your success. Join our community today and
                <span className=" text-[#3F5FFF] ">discover the power of freelance talent and quality services</span>
            </h1>
            <div className=" grid grid-cols-1 gap-10  lg:grid-cols-3 md:grid-cols-2      ">

                <FeaturesCard
                    imageUrl={Cards.card1.imageUrl}
                    title={Cards.card1.title}
                    desc={Cards.card1.desc}
                />
                <FeaturesCard
                    imageUrl={Cards.card2.imageUrl}
                    title={Cards.card2.title}
                    desc={Cards.card2.desc}
                />
                
                <FeaturesCard
                    imageUrl={Cards.card3.imageUrl}
                    title={Cards.card3.title}
                    desc={Cards.card3.desc}
                />
                
                <FeaturesCard
                    imageUrl={Cards.card4.imageUrl}
                    title={Cards.card4.title}
                    desc={Cards.card4.desc}
                />
                <FeaturesCard
                    imageUrl={Cards.card5.imageUrl}
                    title={Cards.card5.title}
                    desc={Cards.card5.desc}
                />
                <FeaturesCard
                    imageUrl={Cards.card6.imageUrl}
                    title={Cards.card6.title}
                    desc={Cards.card6.desc}
                />

            </div>
        </div>
    )

}