import Card from "@/components/Card";
import FeaturesCard from "@/components/features-card";
import Header from "@/components/Home/Header";
import Joinsection from "@/components/Home/Joinsection";
import ServicesCards from "@/components/Home/Services-Cards";
export default function Home() {
    return (
        <div className="">
            <Header />
            <Card
                title="Card Title"
                desc="Card Description"
                imageUrl="/images.jpeg"
                name="John Doe"
                profileImage="/header.png"
                price="$100"
                rating="4.5"
            />
            <ServicesCards />
            <Joinsection />
        </div>
    );
}

