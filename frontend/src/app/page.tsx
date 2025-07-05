import Card from "@/components/Card";
import Header from "@/components/Home/Header";
import Logos from "@/components/Home/Logos";

export default function HomePage() {
    return (
        <div className="">
            <Header />
            {/* <Logos/> */}
            <div className="flex justify-around ">
                <Card
                    title="Card Title"
                    desc="Card Description"
                    imageUrl="/images.jpeg"
                    name="John Doe"
                    profileImage="/header.png"
                    price="$100"
                    rating="4.5"
                />
                 <Card
                    title="Card Title"
                    desc="Card Description"
                    imageUrl="/Freelancer.png"
                    name="John Doe"
                    profileImage="/header.png"
                    price="$100"
                    rating="4.5"
                />
                 <Card
                    title="Card Title"
                    desc="Card Description"
                    imageUrl="/images.jpeg"
                    name="John Doe"
                    profileImage="/header.png"
                    price="$100"
                    rating="4.5"
                />
                 <Card
                    title="Card Title"
                    desc="Card Description"
                    imageUrl="/images.jpeg"
                    name="John Doe"
                    profileImage="/header.png"
                    price="$100"
                    rating="4.5"
                />
                
            </div>

        </div>
    );
}
