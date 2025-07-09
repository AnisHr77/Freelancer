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
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800">
            <DashSidebar />

            <main className="flex-1 p-4 md:p-8">
                <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold">User List</h1>
                        <p className="text-sm text-gray-500">Manage all platform users</p>
                    </div>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow w-full sm:w-auto"
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
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Role</th>
                            <th className="px-4 py-3">Joined</th>
                            <th className="px-4 py-3 text-right">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                                <td className="px-4 py-3 flex items-center gap-3 min-w-[180px]">
                                    <Image
                                        src={"data:image/png;base64,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"}
                                        alt={user.name}
                                        width={36}
                                        height={36}
                                        className="rounded-full"
                                    />
                                    <span className="font-medium truncate">{user.name}</span>
                                </td>
                                <td className="px-4 py-3 text-gray-600 break-all min-w-[200px]">{user.email}</td>
                                <td className="px-4 py-3">
                                    <select
                                        value={user.role}
                                        onChange={async (e) => {
                                            const newRole = e.target.value;
                                            setUsers((prev) =>
                                                prev.map((u) =>
                                                    u.id === user.id ? { ...u, role: newRole } : u
                                                )
                                            );
                                            try {
                                                await axios.put(
                                                    `http://localhost:8001/api/users/${user.id}`,
                                                    { role: newRole },
                                                    { withCredentials: true }
                                                );
                                            } catch (error) {
                                                console.error("Failed to update role", error);
                                                setUsers((prev) =>
                                                    prev.map((u) =>
                                                        u.id === user.id ? { ...u, role: user.role } : u
                                                    )
                                                );
                                            }
                                        }}
                                        className={`px-2 py-1 rounded text-xs font-semibold uppercase w-full sm:w-auto ${
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
                                <td className="px-4 py-3 text-gray-500 min-w-[120px]">
                                    {new Date(user.created_at).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-3 text-right min-w-[100px]">
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
