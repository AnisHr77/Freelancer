'use client';

import ProfileForm from '@/components/personelform';
import ProjectForm from '@/components/projectsform';
import SkillsForm from '@/components/skillform';
import { useParams } from 'next/navigation';

export default function FreelancerQuestionPage() {
    const { QuestionCategory } = useParams();

    return (
        <div className='' >
            <div className="pl-10 mt-5   grid gap-4 ">
                <p className=" font-bold text-[45px] text-[#3F5FFF] " >Tasklinker</p>
            </div>
            {QuestionCategory === "profile" && <ProfileForm />}
            {QuestionCategory === "skills" && <SkillsForm />}
            {QuestionCategory === "project" && <ProjectForm />}
        </div>
    );
}
