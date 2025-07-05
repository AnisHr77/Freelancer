"use client";

import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";

export default function AnalyticsCard({ percentage, completedTasks }) {
    const data = [
        {
            name: "Progress",
            value: percentage,
            fill: "#8B5CF6", // purple-500
        },
    ];

    return (
        <div className="bg-white shadow rounded-xl p-6 text-center">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Analytics</h2>

            <div className="flex flex-col items-center justify-center w-full h-36">
                <ResponsiveContainer width={120} height={120}>
                    <RadialBarChart
                        innerRadius="70%"
                        outerRadius="100%"
                        data={data}
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
                <div className="absolute text-xl font-bold text-purple-600">
                    {percentage}%
                </div>
            </div>

            <div className="mt-4">
                <p className="font-semibold text-purple-600">{percentage}% Response Rate</p>
                <p className="text-sm text-gray-500">{completedTasks} Order Completion</p>
            </div>
        </div>
    );
}
