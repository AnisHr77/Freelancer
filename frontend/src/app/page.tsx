import AuthCheck from "@/components/AuthCheck";
import Card from "@/components/Card";
import FeaturesCard from "@/components/features-card";
import Header from "@/components/Home/Header";
import Joinsection from "@/components/Home/Joinsection";
import ServicesCards from "@/components/Home/Services-Cards";

export default function HomePage() {
    return (
        <div className=" flex flex-col gap-20 ">
            <AuthCheck/>
            <Header />
            <ServicesCards/>
            <Joinsection/>
        </div>
    );
}
