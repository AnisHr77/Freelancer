export const Questions: Record<string, { label: string, type: string }[]> = {
    personaldeitailes: [
        { label: "What services do you offer?", type: "text" },
        { label: "What is your expertise area?", type: "text" },
        { label: "Years of experience?", type: "number" },
    ],
    skillsandtools: [
        { label: "List your key skills", type: "select" },
        { label: "Which tools do you use?", type: "text" },
        { label: "Certifications?", type: "file" },
    ],
    portfolioexperience: [
        { label: "Worked on freelance platforms?", type: "text" },
        { label: "Upload sample work", type: "file" },
        { label: "Portfolio link", type: "url" },
    ]
};

export const categoryOrder = ["personaldeitailes", "skillsandtools", "portfolioexperience"];
