"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    MdDashboard, MdContacts, MdGroup, MdReceipt, MdPayment,
    MdDevices, MdPerson, MdSettings, MdLogout, MdMenu, MdClose
} from "react-icons/md";
import { useState, useRef, useEffect } from "react";

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
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarRef = useRef(null);
    const burgerRef = useRef(null);

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
                setSidebarOpen(false);
            }
        }

        if (sidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarOpen]);

    return (
        <>
            {/* Burger Icon */}
            <button
                ref={burgerRef}
                onClick={toggleSidebar}
                aria-label={sidebarOpen ? "Close menu" : "Open menu"}
                aria-expanded={sidebarOpen}
                aria-controls="sidebar"
                className="absolute top-8 right-4 z-50 md:hidden bg-white p-2 rounded-md text-neutral-800 hover:text-[#3F5FFF] transition"
            >
                {!sidebarOpen && <MdMenu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                id="sidebar"
                className={`fixed top-0 left-0 z-50 h-screen  max-w-66 bg-[#111] text-white p-4 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block md:h-auto md:w-72 flex flex-col`}
            >
                {/* Close Button (Mobile) */}
                <div className="md:hidden flex justify-end mb-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-white hover:text-red-500"
                        aria-label="Close menu"
                    >
                        <MdClose size={24} />
                    </button>
                </div>

                {/* Sidebar content */}
                <div className="flex flex-col flex-grow overflow-y-auto md:overflow-visible mt-1 mb-2 md:mt-12">
                    {/* Main Menu */}
                    <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2 md:mb-4">
                            Main Menu
                        </p>
                        <ul className="flex flex-col space-y-6 border-b border-b-neutral-800 pb-4">
                            {mainMenuItems.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className={`flex items-center gap-3 w-full px-3 py-3 rounded-lg transition-all duration-200 text-sm font-medium
                    ${
                                            pathname === href
                                                ? "bg-[#1f1f1f] text-[#3F5FFF]"
                                                : "hover:bg-[#1f1f1f] hover:text-[#3F5FFF]"
                                        }`}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <Icon className="text-lg" />
                                        <span>{label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Preferences */}
                    <div className="pt-6">
                        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2 border-b border-b-neutral-800 pb-2">
                            Preference
                        </p>
                        <ul className="space-y-1 md:space-y-2">
                            {preferenceItems.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium
                    ${
                                            pathname === href
                                                ? "bg-[#1f1f1f] text-[#3F5FFF]"
                                                : "hover:bg-[#1f1f1f] hover:text-[#3F5FFF]"
                                        }`}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <Icon className="text-lg" />
                                        <span>{label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logout Button */}
                    <div className="mt-auto pt-8">
                        <button className="bg-neutral-800 flex items-center gap-3 w-full px-3 py-2 rounded-lg text-white hover:text-red-600 hover:bg-[#1f1f1f] transition text-sm font-medium">
                            <MdLogout className="text-lg" />
                            Log Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Overlay on mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
                    aria-hidden="true"
                />
            )}
        </>
    );
}
