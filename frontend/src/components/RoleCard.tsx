import { ReactNode } from "react";

interface RoleProps {
    icon?: ReactNode;
    userrole: string;
}

export default function Role({ icon, userrole }: RoleProps) {
    return (
        <div className="flex justify-center items-center">
            <div className="w-72 sm:w-80 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-[#3F5FFF] transition-shadow duration-300 group cursor-pointer border border-gray-200 hover:border-[#3F5FFF]">
                <div className="flex flex-col items-center p-6 space-y-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center overflow-hidden border-4 border-blue-100 group-hover:border-blue-400 transition-all duration-300">
                        {icon && (
                            <div className="text-[#3F5FFF] text-6xl  group-hover:text-blue-700 transition">
                                {icon}
                            </div>
                        )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-[#3F5FFF] transition duration-200">
                        {userrole}
                    </h3>
                </div>
            </div>
        </div>
    );
}
