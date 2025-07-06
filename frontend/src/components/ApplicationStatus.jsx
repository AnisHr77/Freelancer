"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ApplicationStatus() {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/dashboard/application-status")
            .then((res) => setApps(res.data))
            .catch((err) => console.error("Failed to load applications", err));
    }, []);

    return (
        <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Application Status</h2>
            <ul className="space-y-4">
                {apps.map((app, i) => (
                    <li key={i}>
                        <p className="font-semibold">{app.title}</p>
                        <div className="text-xs text-gray-500 mb-1">Applied on {app.date}</div>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {app.tags.map((tag, j) => (
                                <span key={j} className="bg-gray-200 px-2 py-1 rounded">{tag}</span>
                            ))}
                            {app.label && (
                                <span className={`px-2 py-1 rounded ${app.label === 'Interview' ? 'bg-green-200' : 'bg-red-200'}`}>
                                    {app.label}
                                </span>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
