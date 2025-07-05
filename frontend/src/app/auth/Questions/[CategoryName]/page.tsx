"use client";
import { useParams, useRouter } from "next/navigation";
import { Questions, categoryOrder } from "@/lib/questionsData";
import { useState } from "react";

export default function CategoryPage() {
    const { categoryName } = useParams();
    const router = useRouter();
    const currentCategory = categoryName as string;
    const questions = Questions[currentCategory];

    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleChange = (label: string, value: string) => {
        setAnswers(prev => ({ ...prev, [label]: value }));
    };

    const handleNext = () => {
        const currentIndex = categoryOrder.indexOf(currentCategory);
        const nextCategory = categoryOrder[currentIndex + 1];
        if (nextCategory) {
            router.push(`/freelancerquestions/${nextCategory}`);
        } else {
            console.log("All answers:", answers);
            router.push("/thank-you");
        }
    };

    // 🔐 Don't try to map if questions is undefined
    if (!questions) {
        return (
            <div className="p-10 text-red-500">
                <h2>Error: Invalid category "{currentCategory}"</h2>
                <p>Check your route or category name.</p>
            </div>
        );
    }

    return (
        <div className="p-10">
            <h2 className="text-xl font-bold mb-6">{currentCategory.toUpperCase()}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                {questions.map((q, index) => (
                    <div key={index} className="mb-4">
                        <label className="block font-medium mb-1">{q.label}</label>
                        {q.type === "select" ? (
                            <select onChange={e => handleChange(q.label, e.target.value)} className="border p-2 w-full">
                                <option value="">Select</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>
                        ) : (
                            <input
                                type={q.type}
                                onChange={e => handleChange(q.label, e.target.value)}
                                className="border p-2 w-full"
                                required
                            />
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
                >
                    Next
                </button>
            </form>
        </div>
    );
}
