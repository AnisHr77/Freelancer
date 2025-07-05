"use client";
const projects = [
    { name: "Steven Terry", project: "Landing page", price: "$800", time: "1 days 2 hours", progress: 90 },
    { name: "Audrey Jones", project: "Development", price: "$300", time: "4 days 8 hours", progress: 50 },
    { name: "Brian Fisher", project: "Translator", price: "$180", time: "14 days 2 hours", progress: 95 },
    { name: "Molly Mills", project: "Data Analyst", price: "$920", time: "8 days 20 hours", progress: 20 },
];

export default function ActiveProjects() {
    return (
        <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Active Projects</h2>
            <div className="space-y-4">
                {projects.map((p, i) => (
                    <div key={i} className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <p className="font-bold">{p.name}</p>
                            <p className="text-sm">{p.project}</p>
                        </div>
                        <div className="text-sm text-gray-600">{p.price}</div>
                        <div className="text-sm text-gray-600">{p.time}</div>
                        <div className="w-full md:w-1/4 bg-gray-200 h-2 rounded">
                            <div className="bg-purple-500 h-2 rounded" style={{ width: `${p.progress}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
