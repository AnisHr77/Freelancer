'use client';

import Sidebar from "@/components/Dashboard/dashSidebar";
import Topbar from "@/components/Dashboard/Topbar";
import AnalyticsCard from "@/components/Dashboard/AnalyticsCard";
import EarningChart from "@/components/Dashboard/EarningChart";
import ActiveProjects from "@/components/Dashboard/ActiveProjects";
import UserProfile from "@/components/Dashboard/UserProfile";
import ApplicationStatus from "@/components/Dashboard/ApplicationStatus";

export default function Page() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-800">

            <Sidebar />
            <main className="flex-1 p-6 space-y-6">
                <Topbar />
                <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <AnalyticsCard  />
                            <EarningChart />
                        </div>
                        <ActiveProjects />
                    </div>
                    <div className="space-y-6">
                        <UserProfile  />
                        <ApplicationStatus />
                    </div>
                </section>
            </main>
        </div>
    );
}
