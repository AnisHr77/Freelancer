"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Project {
    id: number;
    title: string;
    description: string;
    budget: number;
    deadline: string;
    status: string;
}

export default function ActiveProjects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/dashboard/active-projects")
            .then((res) => setProjects(res.data))
            .catch((err) => console.error("Failed to fetch active projects", err));
    }, []);

    return (
        <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Active Projects</h2>
            <div className="space-y-4">
                {projects.map((p) => (
                    <div key={p.id} className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex-1">
                            <p className="font-bold">{p.title}</p>
                            <p className="text-sm text-gray-500">{p.description}</p>
                        </div>
                        <div className="text-sm text-gray-600 font-medium">${p.budget}</div>
                        <div className="text-sm text-gray-600">{new Date(p.deadline).toLocaleDateString()}</div>
                        <div className="w-full md:w-1/4 bg-gray-200 h-2 rounded">
                            {/* Progress can be added later when available */}
                            <div className="bg-[#7a4d8b] h-2 rounded" style={{ width: `60%` }} />
                        </div>
                    </div>
                ))}
                {projects.length === 0 && (
                    <p className="text-gray-500">No active projects found.</p>
                )}
            </div>
        </div>
    );
}
