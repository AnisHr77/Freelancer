// app/dashboard/services/page.tsx
import DashSidebar from "@/components/Dashboard/dashSidebar";

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen">
            <DashSidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Connected Services</h1>
                <p className="text-gray-600">View and manage connected platforms and integrations.</p>
            </main>
        </div>
    );
}
