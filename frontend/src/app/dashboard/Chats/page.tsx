"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DashSidebar from "@/components/dashSidebar";

interface Conversation {
    id: number;
    client_id: number;
    freelancer_id: number;
    client_name: string;
    freelancer_name: string;
    last_message: string;
    last_message_at: string;
}

export default function ChatsPage() {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8001/api/conversations")
            .then((res) => res.json())
            .then((data) => {
                setConversations(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div className="flex min-h-screen">
            <DashSidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-4">Chats</h1>

                {loading ? (
                    <p>Loading conversations...</p>
                ) : conversations.length === 0 ? (
                    <p>No conversations found.</p>
                ) : (
                    <ul className="space-y-4 max-w-3xl">
                        {conversations.map((conv) => (
                            <Link key={conv.id} href={`/dashboard/Chats/${conv.id}`}>
                                <li className="border p-4 rounded-md hover:bg-gray-50 cursor-pointer">
                                    <p className="font-semibold">
                                        {conv.client_name} ↔ {conv.freelancer_name}
                                    </p>
                                    <p className="text-sm text-gray-600">{conv.last_message}</p>
                                    <p className="text-xs text-gray-400">
                                        {new Date(conv.last_message_at).toLocaleString()}
                                    </p>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </main>
        </div>
    );
}
