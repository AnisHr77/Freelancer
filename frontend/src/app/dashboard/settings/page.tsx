// app/dashboard/settings/page.tsx
import DashSidebar from "@/components/dashSidebar";

export default function SettingsPage() {
    return (
        <div className="flex min-h-screen">
            <DashSidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-gray-600">Customize application behavior and preferences.</p>
            </main>
        </div>
    );
}
