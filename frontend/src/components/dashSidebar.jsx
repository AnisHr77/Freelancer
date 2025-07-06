"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    { label: "Dashboard", icon: MdDashboard, href: "/dashboard" },
    { label: "Chats", icon: MdContacts, href: "/dashboard/Chats" },
    { label: "Users", icon: MdGroup, href: "/dashboard/users" },
    { label: "Tax Report", icon: MdReceipt, href: "/dashboard/tax-report" },
    { label: "Billing", icon: MdPayment, href: "/dashboard/billing" },
    { label: "Connected Services", icon: MdDevices, href: "/dashboard/services" },
];

const preferenceItems = [
    { label: "Profile", icon: MdPerson, href: "/dashboard/profile" },
    { label: "Settings", icon: MdSettings, href: "/dashboard/settings" },
];


export default function DashSidebar() {
    const pathname = usePathname();

    return (
        <aside className="bg-[#111] text-white w-full md:w-60 p-6 flex flex-col justify-between min-h-screen shadow-lg">
            {/* TOP SECTION */}
            <div>
                <div className="mt-8">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                        Main Menu
                    </p>
                    <ul className="space-y-4 border-b border-b-neutral-800 pb-4">
                        {mainMenuItems.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium
                    ${pathname === href
                                        ? "bg-[#1f1f1f] text-[#7A4D8B]"
                                        : "hover:bg-[#1f1f1f] hover:text-[#7A4D8B]"
                                    }`}
                                >
                                    <Icon className="text-lg" />
                                    <span>{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-6">
                    <p className="text-sm uppercase tracking-wide text-gray-500 mb-2 border-b border-b-neutral-800 pb-2">
                        Preference
                    </p>
                    <ul className="space-y-2">
                        {preferenceItems.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium
                    ${pathname === href
                                        ? "bg-[#1f1f1f] text-[#7A4D8B]"
                                        : "hover:bg-[#1f1f1f] hover:text-[#7A4D8B]"
                                    }`}
                                >
                                    <Icon className="text-lg" />
                                    <span>{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* LOGOUT */}
            <div>
                <button className="bg-neutral-800 flex items-center gap-3 w-full px-3 py-2 rounded-lg text-white hover:text-red-600 hover:bg-[#1f1f1f] transition-all duration-200 text-sm font-medium">
                    <MdLogout className="text-lg" />
                    Log Out
                </button>
            </div>
        </aside>
    );
}
