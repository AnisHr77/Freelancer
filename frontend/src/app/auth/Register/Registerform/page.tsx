'use client'
import Role from "@/components/RoleCard";
import { useRouter } from "next/navigation";
import { FaUser, FaBriefcase } from "react-icons/fa";

export default function ChooseRole() {
    const router = useRouter();
    const registerfreelance = () => {
        router.push("/auth/Register")
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#eaf0ff] via-white to-[#e2e9ff] flex flex-col items-center">
            <div className="w-full text-center py-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#7a4d8b] tracking-wide drop-shadow-md">
                    Task<span className="text-[#3F5FFF]">linker</span>
                </h1>
                <p className="text-gray-600 text-lg mt-2">
                    Connect. Collaborate. Complete.
                </p>
            </div>

            <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <p className="text-xl sm:text-2xl font-medium text-gray-700 mb-10 text-center">
                    Please choose your role to continue
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
                    <div onClick={registerfreelance} className="">
                        <Role icon={<FaBriefcase />} userrole="Continue as Freelancer" />
                    </div>
                    <div className="">
                        <Role icon={<FaUser />} userrole="Continue as Client" />
                    </div>
                </div>
            </div>

            <div className="mt-auto py-10 text-center text-sm text-gray-500">
                You can change your role later in your account settings.
            </div>
        </div>
    );
}
