'use client';
import QuestionHandler from '@/components/skillform';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function FreelancerQuestionPage() {
    const { QuestionCategory } = useParams();

    const questions = [
        { id: 1, question: "What is your name?", type: "text" },
        {
            id: 2,
            question: "Select your hobbies",
            type: "checkbox",
            options: ["Reading", "Gaming", "Traveling"],
        },
        {
            id: 3,
            question: "Your money by hour?",
            type: "select",
            options: ["5", "20", "100"],
        },
        {
            id: 4,
            question: "Your languages?",
            type: "select",
            options: ["arabic", "english", "french"],
        },
        {
            id: 5,
            question: "Your work?",
            type: "select",
            options: ["Male", "Female", "Other"],
        },
        {
            id: 6,
            question: "Your skills?",
            type: "select",
            options: ["react", "php", "python"],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string | string[]>>({});

    const currentQuestion = questions[currentIndex];

    const handleAnswers = (value: string | string[]) => {
        setAnswers({ ...answers, [currentQuestion.id]: value });
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log("Finished!", answers);
        }
    };

    console.log("Answers so far:", answers);

    return (
        <div className="w-screen">
            <QuestionHandler
                onAnswer={handleAnswers}
                questions={currentQuestion}  
            />
        </div>
    );
}
