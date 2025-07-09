'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import DashSidebar from "@/components/dashSidebar";
import AddUserModal from "@/components/AddUserModal";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

export default function UsersPage() {
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios
            .get("http://localhost:8001/api/users", { withCredentials: true })
            .then((res) => setUsers(res.data))
            .catch((err) => console.error("Failed to fetch users:", err));
    };

    const handleDeleteUser = async (id: number) => {
        if (!confirm("Are you sure you want to delete this user?")) return;
        try {
            await axios.delete(`http://localhost:8001/api/users/${id}`, {
                withCredentials: true,
            });
            setUsers((prev) => prev.filter((u) => u.id !== id));
        } catch (err) {
            console.error("Failed to delete user:", err);
            alert("Failed to delete user.");
        }
    };

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
                            onUserAdded={fetchUsers}
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
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                                <td className="px-4 py-3 flex items-center gap-3 min-w-[180px]">
                                    <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white text-xs uppercase">
                                        {user.name.slice(0, 2)}
                                    </div>
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
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        className="text-red-600 hover:text-red-800 text-sm"
                                    >
                                        Delete
                                    </button>
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
