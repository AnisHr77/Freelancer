'use client';
import axios from "axios";
import React, { useState } from "react";
export default async function PostQuestions(e: React.FormEvent<HTMLFormElement>) {
    const [success, setSuccess] = useState(false);
    const formdata = new FormData(e.currentTarget);
    const answer1 = formdata.get("answer1");
    const answer2 = formdata.get("answer2");
    const answer3 = formdata.get("answer3");
    e.preventDefault();
    try {
        const response = await axios.post('/api/questions', {
            answer1,
            answer2,
            answer3
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Questions submitted successfully");
            setSuccess(true);
        } else {
            alert("Failed to submit questions");
        }
    }catch(error :any) {
        if (axios.isAxiosError(error)) {
            console.error("Error message:", error.message);
            alert("An error occurred while submitting the questions. Please try again.");
        } else {
            console.error("Unexpected error:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    }
}