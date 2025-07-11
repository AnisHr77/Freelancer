// app/dashboard/billing/page.tsx
import DashSidebar from "@/components/Dashboard/dashSidebar";

export default function BillingPage() {
    return (
        <div className="flex min-h-screen">
            <DashSidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Billing</h1>
                <p className="text-gray-600">Manage your billing history and payment methods.</p>
            </main>
        </div>
    );
}
