interface ReviewsCardProps {
    imageSrc: string;
    reviewText: string;
    reviewerName: string;
    reviewerRole: string;
}
export default function ReviewsCard({ imageSrc, reviewText, reviewerName, reviewerRole }: ReviewsCardProps) {
    return (
        <div className=" lg:w-80 w-90 xl:w-90 h-60 shadow-2xl flex flex-col items-center p-6 bg-white rounded-lg relative pt-10 ">
            <img src={imageSrc} alt="User Avatar" className="w-16 h-16  rounded-full absolute -top-10 " />
            <p className="text-gray-700 mb-4">"{reviewText}"</p>
            <p className="font-semibold">{reviewerName}</p>
            <p className="text-gray-500">{reviewerRole}</p>
        </div>
    );
}