'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import DashSidebar from "@/components/dashSidebar";
import AddUserModal from "@/components/AddUserModal";


interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
    avatar_url?: string; // optional avatar
}

export default function UsersPage() {

    const [showModal, setShowModal] = useState(false);

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:8001/api/users", { withCredentials: true })
            .then((res) => setUsers(res.data))
            .catch((err) => console.error("Failed to fetch users:", err));
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-800">
            <DashSidebar />

            <main className="flex-1 p-8">
                <div className="mb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">User List</h1>
                        <p className="text-gray-500">Manage all platform users</p>
                    </div>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                        onClick={() => setShowModal(true)}
                    >
                        Add User
                    </button>

                    {showModal && (
                        <AddUserModal
                            onClose={() => setShowModal(false)}
                            onUserAdded={() => {
                                axios.get("http://localhost:8001/api/users", { withCredentials: true })
                                    .then((res) => setUsers(res.data));
                            }}
                        />
                    )}
                </div>

                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-50 text-xs text-gray-600 uppercase border-b">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Joined</th>
                            <th className="px-6 py-4 text-right">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <Image
                                        src={
                                            user.avatar_url ||
                                            "data:image/png;base64,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"
                                        }
                                        alt={user.name}
                                        width={36}
                                        height={36}
                                        className="rounded-full"
                                    />
                                    <span className="font-medium">{user.name}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                                <td className="px-6 py-4">
                                    <select
                                        value={user.role}
                                        onChange={async (e) => {
                                            const newRole = e.target.value;

                                            // 1. Mise à jour locale immédiate
                                            setUsers((prev) =>
                                                prev.map((u) =>
                                                    u.id === user.id ? { ...u, role: newRole } : u
                                                )
                                            );

                                            // 2. Envoi au serveur
                                            try {
                                                await axios.put(
                                                    `http://localhost:8001/api/users/${user.id}`,
                                                    { role: newRole },
                                                    { withCredentials: true }
                                                );
                                            } catch (error) {
                                                console.error("Failed to update role", error);

                                                // Optionnel : revert l’état en cas d’erreur
                                                setUsers((prev) =>
                                                    prev.map((u) =>
                                                        u.id === user.id ? { ...u, role: user.role } : u
                                                    )
                                                );
                                            }
                                        }}
                                        className={`px-2 py-1 rounded text-xs font-semibold uppercase ${
                                            user.role === "admin"
                                                ? "bg-red-100 text-red-700"
                                                : user.role === "freelancer"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="freelancer">Freelancer</option>
                                        <option value="client">Client</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {new Date(user.created_at).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <p className="font-medium text-green-500">Active</p>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center py-10 text-gray-400">
                                    No users found.
                                </td>
                            </tr>
                        )}
                        </tbody>

                    </table>
                </div>
            </main>
        </div>
    );
}
