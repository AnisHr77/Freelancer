"use client";

import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EarningChart() {
    const [data, setData] = useState([]);
    const [income, setIncome] = useState(0);
    const [growth, setGrowth] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8001/api/dashboard/earning-chart")
            .then((res) => {
                setData(res.data.data);
                setIncome(res.data.income);
                setGrowth(res.data.growth);
            })
            .catch((err) => console.error("Failed to fetch earning data", err));
    }, []);

    return (
        <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Earning Reports</h2>
            <p className="text-2xl font-semibold text-black">${income.toLocaleString()}</p>
            <p className="text-sm text-[#7A4D8B] mb-4">{growth}% growth this year</p>

            <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#C0E4D4" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#B9F8CF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                        <XAxis dataKey="month" stroke="#7A4D8B" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="income"
                            stroke="#7A4D8B"
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
