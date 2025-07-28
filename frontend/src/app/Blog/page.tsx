// import React from 'react'

// const Page = () => {
//     return (
//         <div>Page</div>
//     )
// }

// export default Page



// components/WhatWeOffer.tsx
import { FaUserTie, FaShieldAlt, FaBolt, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const offers = [
    {
        title: "Verified Talent",
        icon: <FaUserTie className="text-3xl text-indigo-500" />,
        desc: "Work with hand-picked freelancers ready to deliver excellence.",
    },
    {
        title: "Secure Payments",
        icon: <FaShieldAlt className="text-3xl text-green-500" />,
        desc: "Built-in escrow protects your money until you're 100% satisfied.",
    },
    {
        title: "Lightning Fast Matching",
        icon: <FaBolt className="text-3xl text-yellow-500" />,
        desc: "Get instantly connected with freelancers tailored to your needs.",
    },
    {
        title: "Trust & Transparency",
        icon: <FaHandshake className="text-3xl text-pink-500" />,
        desc: "Ratings, reviews, and clear timelines keep your projects on track.",
    },
];

export default function WhatWeOffer() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    What <span className="text-indigo-400">We Offer</span>
                </h2>
                <p className="text-gray-300 mb-12 text-lg">
                    TaskLinker gives you everything you need to hire smarter and work faster.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offers.map((offer, index) => (
                        // <motion.div
                        //     key={index}
                        //     initial={{ opacity: 0, y: 30 }}
                        //     whileInView={{ opacity: 1, y: 0 }}
                        //     transition={{ duration: 0.6, delay: index * 0.2 }}
                        //     className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-indigo-500/30 transition-shadow hover:scale-[1.03] duration-300 cursor-pointer"
                        // >
                        <div className="">
                            <div className="mb-4">{offer.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                            <p className="text-gray-300 text-sm">{offer.desc}</p>
                        </div>

                        // </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
