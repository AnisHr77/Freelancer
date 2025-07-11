import { useState } from "react";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-200 px-4 sm:px-6 py-4 gap-4">
            {/* Left: Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-black">Dashboard</h1>

            {/* Right: Actions */}
            <div className="flex flex-wrap justify-end items-center gap-3 sm:gap-5 w-full sm:w-auto">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-gray-400" />

                {/* Search */}
                <div className="relative flex-1 min-w-[140px] max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 w-full bg-gray-100 border border-neutral-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#3F5FFF]"
                    />
                </div>

                {/* Company Label - Mobile Only */}


                {/* Toggle Switch */}
                <div className="flex items-center gap-2">
                    <div className="hidden md:block text-sm text-gray-800">Company</div>
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
                            className={`block w-full h-full rounded-full transition-colors duration-300 ${
                                enabled ? "bg-[#3F5FFF]" : "bg-gradient-to-b from-gray-400 to-gray-200"
                            }`}
                        ></label>
                        <span
                            className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] rounded-full bg-white shadow-md transition-transform duration-300 ${
                                enabled ? "translate-x-[25px]" : ""
                            }`}
                        ></span>
                    </div>
                </div>

                {/* Notifications */}
                <div className="relative">
                    <Bell className="w-6 h-6 text-neutral-900 cursor-pointer" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </div>
            </div>
        </div>
    );
}
