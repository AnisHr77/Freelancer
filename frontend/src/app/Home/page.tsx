import Header from "@/components/Home/Header";
import Popularservices from "@/components/Home/Popularservises";
import ServicesCards from "@/components/Home/Services-Cards";
export default function Home() {
    return (
        <div className="">
            <Header />
            <div className="  ">
                <Popularservices />
            </div>
            <ServicesCards />
        </div>
    );
}

