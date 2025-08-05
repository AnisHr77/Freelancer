import ReviewsCard from "../ReviewsCard";

export default function Reviews() {
    return (
        <section className="w-full h-auto py-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
                <h2 className="text-center text-[24px] lg:text-[35px] font-bold mb-6"> See what our happy users Have to say</h2>
                <p className=" text-[#585858] text-center md:w-155  text-[20px]  " >TaskLinker connects ambitious professionals with world-class opportunities, empowering seamless collaboration through secure, smart, and scalable freelance solutions.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6 mt-20">
                    <ReviewsCard imageSrc="/face.png" reviewText="TaskLinker has transformed the way I find talent. The platform is user-friendly and efficient!" reviewerName="John Doe" reviewerRole="Freelancer" />
                    <ReviewsCard imageSrc="/emily.jpg" reviewText="TaskLinker has transformed the way I find talent. The platform is user-friendly and efficient!" reviewerName="John Doe" reviewerRole="Freelancer" />
                    <ReviewsCard imageSrc="/john.jpg" reviewText="TaskLinker has transformed the way I find talent. The platform is user-friendly and efficient!" reviewerName="John Doe" reviewerRole="Freelancer" />
                </div>
            </div>
        </section>
    );
}