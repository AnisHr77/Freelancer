'use client';

import ProfileForm from '@/components/personelform';
import ProjectForm from '@/components/projectsform';
import SkillsForm from '@/components/skillform';
import { useParams } from 'next/navigation';

export default function FreelancerQuestionPage() {
    const { QuestionCategory } = useParams();

    return (
        <div>
            <div className="pl-10 mt-4 grid gap-4 ">
                <p className=" font-bold text-[40px] text-[#3F5FFF] " >Tasklinker</p>
                
            </div>
            <h1 className=' font-semibold text-[20px] ml-10 mt-4 ' >{QuestionCategory}  Deitailes </h1>
            {QuestionCategory === "personal" && <ProfileForm />}
            {QuestionCategory === "skills" && <SkillsForm />}
            {QuestionCategory === "project" && <ProjectForm />}
        </div>
    );
}
