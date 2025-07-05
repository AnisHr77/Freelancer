"use client";

import {
    MdDashboard,
    MdContacts,
    MdGroup,
    MdReceipt,
    MdPayment,
    MdDevices,
    MdPerson,
    MdSettings,
    MdLogout,
} from "react-icons/md";

const mainMenuItems = [
    { label: "Dashboard", icon: MdDashboard },
    { label: "Contact Info", icon: MdContacts },
    { label: "My Team", icon: MdGroup },
    { label: "Tax Report", icon: MdReceipt },
    { label: "Billing", icon: MdPayment },
    { label: "Connected Services", icon: MdDevices },
];

const preferenceItems = [
    { label: "Profile", icon: MdPerson },
    { label: "Settings", icon: MdSettings },
];

export default function DashSidebar() {
    return (
        <aside className="bg-[#111] text-white w-full md:w-60 p-6 flex flex-col justify-between min-h-screen shadow-lg">

            {/* TOP SECTION */}
            <div>
                <div className="mt-8">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Main Menu</p>
                    <ul className="space-y-6 border-b border-b-neutral-800 pb-4">
                        {mainMenuItems.map(({ label, icon: Icon }) => (
                            <li key={label}>
                                <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#1f1f1f] hover:text-purple-400 text-sm font-medium">
                                    <Icon className="text-lg" />
                                    <span>{label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-6">
                    <p className="text-sm uppercase tracking-wide text-gray-500 mb-2 border-b border-b-neutral-800 pb-2">Preference</p>
                    <ul className="space-y-4">
                        {preferenceItems.map(({ label, icon: Icon }) => (
                            <li key={label}>
                                <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#1f1f1f] hover:text-purple-400 text-sm font-medium">
                                    <Icon className="text-lg" />
                                    <span>{label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            <div>
                <button className=" bg-neutral-800 flex items-center gap-3 w-full px-3 py-2 rounded-lg text-white hover:text-red-600 hover:bg-[#1f1f1f] transition-all duration-200 text-sm font-medium">
                    <MdLogout className="text-lg" />
                    Log Out
                </button>
            </div>
        </aside>
    );
}
