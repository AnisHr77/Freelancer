import Card from "@/components/Card";
import FeaturesCard from "@/components/features-card";
import Header from "@/components/Home/Header";
import Joinsection from "@/components/Home/Joinsection";
import Popularservices from "@/components/Home/Popularservises";
import ServicesCards from "@/components/Home/Services-Cards";
export default function Home() {
    return (
        <div className="">
            <Header />
            <Popularservices/>
            <ServicesCards />
        </div>
    );
}

