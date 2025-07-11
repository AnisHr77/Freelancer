"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DashSidebar from "@/components/Dashboard/dashSidebar";

interface Message {
    id: number;
    sender_id: number;
    sender_name: string;
    message: string;
    created_at: string;
}

interface ConversationData {
    id: number;
    client_id: number;
    freelancer_id: number;
    messages: Message[];
}

interface Props {
    params: {
        id: string;
    };
}

export default function ConversationPage({ params }: Props) {
    const [conversation, setConversation] = useState<ConversationData | null>(null);
    const [loading, setLoading] = useState(true);
    const conversationId = params.id;

    useEffect(() => {
        axios
            .get(`http://localhost:8001/api/conversations/${conversationId}`)
            .then((res) => {
                setConversation(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [conversationId]);

    if (loading) return <p>Loading...</p>;
    if (!conversation) return <p>Conversation not found.</p>;

    const { client_id, freelancer_id, messages } = conversation;

    return (
        <div className="flex min-h-screen bg-white text-gray-800">
            <DashSidebar />
            <main className="flex-1 p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">
                    Conversation <span className="text-[#3F5FFF]">#{conversationId}</span>
                </h1>

                <div className="space-y-4">
                    {messages.map((msg) => {
                        const isSentByClient = msg.sender_id === client_id;
                        // On suppose que le message envoyé par client est aligné à gauche, freelancer à droite
                        const alignment = isSentByClient ? "justify-start" : "justify-end";
                        const bubbleColor = isSentByClient
                            ? "bg-white text-gray-900"
                            : "bg-[#3F5FFF] text-white";

                        return (
                            <div key={msg.id} className={`flex ${alignment}`}>
                                <div
                                    className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-md ${bubbleColor}`}
                                    title={msg.sender_name}
                                >
                                    <p>{msg.message}</p>
                                    <small className="text-xs text-gray-300 block text-right">
                                        {new Date(msg.created_at).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </small>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
