"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, User } from "lucide-react";
import DashSidebar from "@/components/dashSidebar";

interface Message {
    id: number;
    sender_id: number;
    sender_name: string;
    sender_email?: string;
    message: string;
    created_at: string;
}

interface ConversationDetails {
    user1: { id: number; name: string; email: string };
    user2: { id: number; name: string; email: string };
}

interface Props {
    params: {
        id: string;
    };
}

export default function ConversationPage({ params }: Props) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [conversationDetails, setConversationDetails] = useState<ConversationDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8001/api/conversations/${params.id}/messages`)
            .then((res) => {
                setMessages(res.data.messages);
                setConversationDetails(res.data.details);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <DashSidebar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <DashSidebar />

            <main className="flex-1 flex flex-col max-w-4xl mx-auto bg-white shadow-sm">
                <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                        <button className="p-2 rounded-md hover:bg-gray-100">
                            <a href="/dashboard/Chats">
                            <ArrowLeft size={20} />
                            </a>
                        </button>
                        <h1 className="text-lg font-semibold text-gray-800">Conversation #{params.id}</h1>
                        <div className="w-6"></div>
                    </div>

                    {conversationDetails && (
                        <div className="mt-4 flex items-center justify-between">
                            <UserInfo user={conversationDetails.user1} />
                            <div className="text-gray-400 mx-2">↔</div>
                            <UserInfo user={conversationDetails.user2} />
                        </div>
                    )}
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.length === 0 ? (
                        <p className="text-center text-gray-500">No messages in this conversation</p>
                    ) : (
                        messages.map((msg) => {
                            const isSenderUser1 = msg.sender_id === conversationDetails?.user1.id;
                            return (
                                <div key={msg.id} className="flex flex-col space-y-1">
                                    <div className="flex items-center space-x-2">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <User className="text-blue-600" size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">{msg.sender_name}</p>
                                            <p className="text-xs text-gray-500">{new Date(msg.created_at).toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="ml-10 p-3 rounded-lg shadow bg-blue-50">
                                        <p className="text-gray-800">{msg.message}</p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 text-center">
                    <p className="text-sm text-gray-500">Admin view — observing conversation</p>
                </div>
            </main>
        </div>
    );
}

function UserInfo({ user }: { user: { name: string; email: string } }) {
    return (
        <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
                <User className="text-blue-600" size={20} />
            </div>
            <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
            </div>
        </div>
    );
}
