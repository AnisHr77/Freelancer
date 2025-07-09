"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ActiveProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/dashboard/active-projects")
            .then((res) => setProjects(res.data))
            .catch((err) => console.error("Failed to fetch active projects", err));
    }, []);

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
                            <div className="bg-[#3F5FFF] h-2 rounded" style={{ width: `${p.progress}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
