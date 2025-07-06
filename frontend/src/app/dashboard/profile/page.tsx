// app/dashboard/profile/page.tsx
import DashSidebar from "@/components/dashSidebar";

export default function ProfilePage() {
    return (
        <div className="flex min-h-screen">
            <DashSidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">My Profile</h1>
                <p className="text-gray-600">Update your personal details and preferences.</p>
            </main>
        </div>
    );
}
