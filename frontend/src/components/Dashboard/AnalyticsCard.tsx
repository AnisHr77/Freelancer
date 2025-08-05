"use client";

import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

interface AnalyticsData {
    freelancer_id: number;
    freelancer_name: string;
    completed_tasks: number;
    total_contracts: number;
    completion_rate: number;
    response_rate: number;
    tasks_progress: number;
}

export default function AnalyticsList() {
    const [averageData, setAverageData] = useState<AnalyticsData | null>(null);

    useEffect(() => {
        axios.get("http://localhost:8001/api/dashboard/analyticsall")
            .then((res) => {
                const dataList: AnalyticsData[] = res.data;

                if (dataList.length === 0) {
                    setAverageData(null);
                    return;
                }

                const sum = dataList.reduce((acc, curr) => ({
                    completed_tasks: acc.completed_tasks + curr.completed_tasks,
                    total_contracts: acc.total_contracts + curr.total_contracts,
                    completion_rate: acc.completion_rate + curr.completion_rate,
                    response_rate: acc.response_rate + curr.response_rate,
                    tasks_progress: acc.tasks_progress + curr.tasks_progress,
                }), {
                    completed_tasks: 0,
                    total_contracts: 0,
                    completion_rate: 0,
                    response_rate: 0,
                    tasks_progress: 0,
                });

                const count = dataList.length;

                const avgData: AnalyticsData = {
                    freelancer_id: 0,
                    freelancer_name: "Average",
                    completed_tasks: Math.round(sum.completed_tasks / count),
                    total_contracts: Math.round(sum.total_contracts / count),
                    completion_rate: Math.round(sum.completion_rate / count),
                    response_rate: Math.round(sum.response_rate / count),
                    tasks_progress: Math.round(sum.tasks_progress / count),
                };

                setAverageData(avgData);
            })
            .catch((err) => console.error("Failed to fetch analytics", err));
    }, []);

    if (!averageData) {
        return <p>Loading...</p>;
    }

    const chartData = [
        {
            name: "Progress",
            value: averageData.tasks_progress,
            fill: "#7a4d8b",
        },
    ];

    return (
        <div className="bg-white shadow rounded-xl p-6 sm:p-10 md:p-12 max-w-xs sm:max-w-sm mx-auto text-center">
            <h3 className="font-bold text-lg sm:text-xl mb-2">{averageData.freelancer_name}</h3>

            <div className="flex flex-col items-center justify-center w-full h-36 relative">
                <ResponsiveContainer width="100%" height={150} minWidth={210}>
                    <RadialBarChart
                        innerRadius="70%"
                        outerRadius="100%"
                        data={chartData}
                        startAngle={90}
                        endAngle={-270}
                    >
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 100]}
                            angleAxisId={0}
                            tick={false}
                        />
                        <RadialBar
                            background
                            clockWise
                            dataKey="value"
                            cornerRadius={20}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>

                <div className="absolute text-xl sm:text-2xl font-bold text-[#7a4d8b]">
                    {averageData.tasks_progress}%
                </div>
            </div>

            <div className="mt-4">
                <p className="font-semibold text-[#7a4d8b] text-sm sm:text-base">
                    {averageData.response_rate}% Response Rate
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                    {averageData.completed_tasks} Completed Tasks ({averageData.completion_rate}%)
                </p>
            </div>
        </div>
    );
}
