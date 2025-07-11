'use client';

import { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import DashSidebar from "@/components/dashSidebar";
import AddUserModal from "@/components/AddUserModal";
=======
import DashSidebar from "@/components/Dashboard/dashSidebar";
import AddUserModal from "@/components/Dashboard/AddUserModal";
>>>>>>> 5f3930d ( Add api and token in backend and fix same thing in frontend)
import { FaEdit, FaTrash } from "react-icons/fa";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    department?: string;
    position?: string;
    phone?: string;
    created_at: string;
}

export default function UsersPage() {
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [editingUser, setEditingUser] = useState<User | null>(null);

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
        }
    };

    const handleAddUser = async (data: any) => {
        try {
            await axios.post("http://localhost:8001/api/users", data, {
                withCredentials: true,
            });
            fetchUsers();
            setShowModal(false);
        } catch (err) {
            console.error("Failed to add user:", err);
            alert("Failed to add user. Check console.");
        }
    };

    const handleUpdateUser = async (data: any) => {
        if (!editingUser) return;
        try {
            await axios.put(
                `http://localhost:8001/api/users/${editingUser.id}`,
                data,
                { withCredentials: true }
            );
            fetchUsers();
            setShowModal(false);
        } catch (err) {
            console.error("Failed to update user:", err);
            alert("Failed to update user. Check console.");
        }
    };

    const openAddModal = () => {
        setEditingUser(null);
        setShowModal(true);
    };
    const openEditModal = (user: User) => {
        setEditingUser(user);
        setShowModal(true);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-900">
            <div className="w-64 flex-shrink-0">
                <DashSidebar />
            </div>

            <main
                className="flex-1 p-4 md:p-8 overflow-hidden max-h-screen"
                // overflow-y-auto للتمرير العمودي للصفحة
            >
                <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold">Team List</h1>
                        <p className="text-sm text-gray-500">Manage all platform users</p>
                    </div>
                    <button
                        className="bg-[#3F5FFF] hover:bg-[#354fc9] text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto"
                        onClick={openAddModal}
                    >
                        + Add User
                    </button>
                </div>

                {showModal && (
                    <AddUserModal
                        user={editingUser}
                        onClose={() => setShowModal(false)}
                        onSubmit={editingUser ? handleUpdateUser : handleAddUser}
                    />
                )}

                {/* صندوق الجدول: scroll أفقي فقط، ارتفاع محدود */}
                <div className="bg-white rounded-xl shadow overflow-x-auto max-h-[600px]">
                    <table className="min-w-max w-full text-sm whitespace-nowrap">
                        <thead className="bg-gray-100 text-gray-600 text-xs uppercase sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3 text-left">Name</th>
                            <th className="px-6 py-3 text-left">Position</th>
                            <th className="px-6 py-3 text-left">Department</th>
                            <th className="px-6 py-3 text-left">Email</th>
                            <th className="px-6 py-3 text-left">Phone</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center py-10 text-gray-400">
                                    No users found.
                                </td>
                            </tr>
                        )}
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <div className="w-9 h-9 bg-[#3F5FFF] rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
                                        {user.name.slice(0, 2)}
                                    </div>
                                    <span>{user.name}</span>
                                </td>
                                <td className="px-6 py-4">{user.position || "—"}</td>
                                <td className="px-6 py-4">{user.department || "—"}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.phone || "—"}</td>
                                <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      Active
                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end items-center gap-3">
                                        <button
                                            onClick={() => openEditModal(user)}
                                            className="text-[#3F5FFF] hover:text-[#2c3cae] text-base"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteUser(user.id)}
                                            className="text-red-500 hover:text-red-700 text-base"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
