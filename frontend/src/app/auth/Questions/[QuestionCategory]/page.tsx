'use client';

import ProfileForm from '@/components/personelform';
import ProjectForm from '@/components/projectsform';
import SkillsForm from '@/components/skillform';
import { useParams } from 'next/navigation';

export default function FreelancerQuestionPage() {
    const { QuestionCategory } = useParams();

    return (
        <div className=' w-screen ' >
         
            {QuestionCategory === "profile" && <ProfileForm />}
            {QuestionCategory === "skills" && <SkillsForm />}
            {QuestionCategory === "project" && <ProjectForm />}
        </div>
    );
}
