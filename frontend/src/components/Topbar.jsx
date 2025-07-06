import { useState } from "react";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex justify-between items-center border-b border-neutral-200 pb-4 px-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <div className="flex items-center gap-6">
                {/* Company text */}
                <div className="font-bold relative left-4 text-[#7A4D8B]">Company</div>

                {/* Switch */}
                <div className="relative w-[50px] h-[25px]">
                    <input
                        type="checkbox"
                        id="toggle"
                        className="peer absolute w-full h-full opacity-0 z-10 cursor-pointer"
                        checked={enabled}
                        onChange={() => setEnabled(!enabled)}
                    />
                    <label
                        htmlFor="toggle"
                        className={`absolute top-0 left-0 w-full h-full rounded-full transition-all duration-300 cursor-pointer
                            ${enabled
                            ? "bg-[#7A4D8B]"
                            : "bg-gradient-to-b from-gray-400 to-gray-200"
                        }`}
                    ></label>
                    <span
                        className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] rounded-full bg-white shadow-md transition-transform duration-300
                            ${enabled ? "translate-x-[25px]" : ""}
                        `}
                    ></span>
                </div>


                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#fffff] pointer " />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-1.5 bg-gray-100 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7A4D8B] text-sm"
                    />
                </div>

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-gray-400" />

                {/* Notifications */}
                <div className="relative">
                    <Bell className="w-6 h-6 text-neutral-900 cursor-pointer" />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </div>
            </div>
        </div>
    );
}
