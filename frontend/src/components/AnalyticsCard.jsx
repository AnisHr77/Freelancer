"use client";

import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AnalyticsList() {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/dashboard/analyticsall")
            .then((res) => setDataList(res.data))
            .catch((err) => console.error("Failed to fetch analytics", err));
    }, []);

    return (
        <div >
            {dataList.map((data) => {
                const chartData = [
                    {
                        name: "Progress",
                        value: data.tasks_progress,
                        fill: "#7A4D8B",
                    },
                ];

                return (
                    <div key={data.freelancer_id} className="bg-white shadow rounded-xl p-12 text-center">
                        <h3 className="font-bold text-lg mb-2">{data.freelancer_name}</h3>

                        <div className="flex flex-col items-center justify-center w-full h-36 relative">
                            <ResponsiveContainer width={120} height={120}>
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

                            <div className="absolute text-xl font-bold text-[#7A4D8B]">
                                {data.tasks_progress}%
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="font-semibold text-[#7A4D8B]">
                                {data.response_rate}% Response Rate
                            </p>
                            <p className="text-sm text-gray-500">
                                {data.completed_tasks} Completed Tasks ({data.completion_rate}%)
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
