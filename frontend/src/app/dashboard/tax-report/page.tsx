// app/dashboard/tax-report/page.tsx
import DashSidebar from "@/components/Dashboard/dashSidebar";

export default function TaxReportPage() {
    return (
        <div className="flex min-h-screen">
            <DashSidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Tax Report</h1>
                <p className="text-gray-600">View tax documentation and earnings summary.</p>
            </main>
        </div>
    );
}
