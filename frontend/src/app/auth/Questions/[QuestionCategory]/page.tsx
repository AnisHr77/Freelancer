'use client';

import ProfileForm from '@/components/personelform';
import SkillsForm from '@/components/skillform';
import { useParams } from 'next/navigation';

export default function FreelancerQuestionPage() {
    const { QuestionCategory } = useParams(); 

    return (
        <div>
            <h1>Category: {QuestionCategory}</h1>

            {QuestionCategory === "profile" && <ProfileForm />}
            {QuestionCategory === "skills" && <SkillsForm />}
        </div>
    );
}
