"use client";

import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", income: 3000 },
    { month: "Feb", income: 4000 },
    { month: "Mar", income: 4200 },
    { month: "Apr", income: 7000 },
    { month: "May", income: 6000 },
    { month: "Jun", income: 9000 },
    { month: "Jul", income: 10000 },
    { month: "Aug", income: 8700 },
    { month: "Sep", income: 9300 },
    { month: "Oct", income: 9700 },
    { month: "Nov", income: 10000 },
    { month: "Dec", income: 11000 },
];

export default function EarningChart({ income, growth }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Earning Reports</h2>
            <p className="text-2xl font-semibold text-black">${income.toLocaleString()}</p>
            <p className="text-sm text-purple-600 mb-4">{growth}% growth this year</p>

            <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                        <XAxis dataKey="month" stroke="#6b7280" />
                        {/* ✅ Removed YAxis to hide محور y */}
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="income"
                            stroke="#8B5CF6"
                            fillOpacity={1}
                            fill="url(#colorIncome)"
                            strokeWidth={2}
                            dot={{ r: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
