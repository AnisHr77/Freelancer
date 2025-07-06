// app/dashboard/users/page.tsx
import DashSidebar from "@/components/dashSidebar";

export default function UsersPage() {
    return (
        <div className="flex min-h-screen">
            <DashSidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Users</h1>
                <p className="text-gray-600">Manage registered users and freelancers.</p>
            </main>
        </div>
    );
}
