"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, Users, Clock, ChevronRight, AlertCircle } from "lucide-react";
import DashSidebar from "@/components/dashSidebar";

interface Conversation {
    conversation_id: number;
    user1_id: number;
    user2_id: number;
    user1_name: string;
    user2_name: string;
    user1_email?: string;
    user2_email?: string;
    last_message: string;
    last_message_at: string;
    message_count?: number;
}

export default function AdminConversationsPage() {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const res = await fetch("http://localhost:8001/api/admin/conversations");
                if (!res.ok) throw new Error("Failed to fetch conversations");
                const data = await res.json();
                setConversations(data);
            } catch (err) {
                setError("Error fetching conversations");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchConversations();
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-50">
            <DashSidebar />

            <main className="flex-1 p-6 md:p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div className="mb-4 md:mb-0">
                            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
                                <MessageSquare className="mr-3 text-blue-600" size={24} />
                                Conversation Monitoring
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Admin view of all user conversations
                            </p>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-xs w-fit">
                            <p className="text-sm font-medium text-gray-700">
                                Total Conversations: <span className="text-blue-600 font-semibold">{conversations.length}</span>
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-64 bg-white rounded-lg shadow-sm">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                            <p className="text-gray-500">Loading conversations...</p>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                            <div className="flex items-center">
                                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                                <p className="text-red-700 font-medium">{error}</p>
                            </div>
                        </div>
                    ) : conversations.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                            <Users className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                            <h3 className="text-lg font-medium text-gray-700">No conversations found</h3>
                            <p className="text-gray-500 mt-1">There are currently no active conversations to display.</p>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                            {/* Table Header */}
                            <div className="hidden md:grid grid-cols-12 bg-gray-50 px-6 py-3 border-b border-gray-200">
                                <div className="col-span-5 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Participants
                                </div>
                                <div className="col-span-5 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Last Message
                                </div>
                                <div className="col-span-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Last Activity
                                </div>
                                <div className="col-span-1"></div>
                            </div>

                            {/* Conversations List */}
                            <ul className="divide-y divide-gray-200">
                                {conversations.map((conv) => (
                                    <li key={conv.conversation_id} className="hover:bg-gray-50 transition-colors duration-150">
                                        <Link href={`/dashboard/Chats/${conv.conversation_id}`} legacyBehavior>
                                            <a className="block">
                                                <div className="grid grid-cols-1 md:grid-cols-12 items-center px-4 py-4 md:px-6 gap-4">
                                                    {/* Participants (Mobile) */}
                                                    <div className="md:hidden space-y-3">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-medium text-sm">
                                                                    {conv.user1_name?.charAt(0) || "?"}
                                                                </div>
                                                                <div className="ml-2">
                                                                    <p className="text-sm font-medium text-gray-900">{conv.user1_name}</p>
                                                                    <p className="text-xs text-gray-500">{conv.user1_email || "No email"}</p>
                                                                </div>
                                                            </div>
                                                            <ChevronRight className="h-4 w-4 text-gray-400" />
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center text-purple-600 font-medium text-sm">
                                                                {conv.user2_name?.charAt(0) || "?"}
                                                            </div>
                                                            <div className="ml-2">
                                                                <p className="text-sm font-medium text-gray-900">{conv.user2_name}</p>
                                                                <p className="text-xs text-gray-500">{conv.user2_email || "No email"}</p>
                                                            </div>
                                                        </div>
                                                        <div className="pl-10">
                                                            <p className="text-xs text-gray-500 mb-1">Last Message:</p>
                                                            <p className="text-sm text-gray-800 truncate">
                                                                {conv.last_message || "No messages yet"}
                                                            </p>
                                                            <div className="flex items-center mt-1 text-xs text-gray-500">
                                                                <Clock className="mr-1 h-3 w-3 text-gray-400" />
                                                                {new Date(conv.last_message_at).toLocaleDateString()}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Participants (Desktop) */}
                                                    <div className="hidden md:flex md:col-span-5 items-center min-w-0">
                                                        <div className="flex items-center min-w-0">
                                                            <div className="flex-shrink-0 bg-blue-100 rounded-full h-10 w-10 flex items-center justify-center text-blue-600 font-medium">
                                                                {conv.user1_name?.charAt(0) || "?"}
                                                            </div>
                                                            <div className="ml-3 min-w-0">
                                                                <p className="text-sm font-medium text-gray-900 truncate">{conv.user1_name}</p>
                                                                <p className="text-xs text-gray-500 truncate">{conv.user1_email || "No email"}</p>
                                                            </div>
                                                        </div>
                                                        <div className="mx-2 text-gray-400">↔</div>
                                                        <div className="flex items-center min-w-0">
                                                            <div className="flex-shrink-0 bg-purple-100 rounded-full h-10 w-10 flex items-center justify-center text-purple-600 font-medium">
                                                                {conv.user2_name?.charAt(0) || "?"}
                                                            </div>
                                                            <div className="ml-3 min-w-0">
                                                                <p className="text-sm font-medium text-gray-900 truncate">{conv.user2_name}</p>
                                                                <p className="text-xs text-gray-500 truncate">{conv.user2_email || "No email"}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Last Message */}
                                                    <div className="hidden md:block md:col-span-5 text-sm text-gray-800 truncate min-w-0 px-2">
                                                        {conv.last_message || "No messages yet"}
                                                    </div>

                                                    {/* Last Activity */}
                                                    <div className="hidden md:flex md:col-span-1 items-center text-sm text-gray-500 min-w-0">
                                                        <Clock className="mr-1.5 h-4 w-4 text-gray-400 flex-shrink-0" />
                                                        <span className="truncate">
                                                            {new Date(conv.last_message_at).toLocaleDateString()}
                                                        </span>
                                                    </div>

                                                    {/* Chevron (Desktop) */}
                                                    <div className="hidden md:flex md:col-span-1 justify-end">
                                                        <ChevronRight className="h-5 w-5 text-gray-400" />
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}