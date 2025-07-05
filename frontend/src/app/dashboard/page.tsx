'use client';

import Sidebar from "@/components/dashSidebar";
import Topbar from "@/components/Topbar";
import AnalyticsCard from "@/components/AnalyticsCard";
import EarningChart from "@/components/EarningChart";
import ActiveProjects from "@/components/ActiveProjects";
import UserProfile from "@/components/UserProfile";
import ApplicationStatus from "@/components/ApplicationStatus";

export default function Page() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-800">

            <Sidebar />
            <main className="flex-1 p-6 space-y-6">
                <Topbar />
                <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <AnalyticsCard percentage={90} completedTasks={1298} />
                            <EarningChart income={108900} growth={2.3} />
                        </div>
                        <ActiveProjects />
                    </div>
                    <div className="space-y-6">
                        <UserProfile name="John Doe" location="Ca, California" />
                        <ApplicationStatus />
                    </div>
                </section>
            </main>
        </div>
    );
}
