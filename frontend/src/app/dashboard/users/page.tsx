'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import DashSidebar from "@/components/Dashboard/dashSidebar";
import AddUserModal from "@/components/Dashboard/AddUserModal";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

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
    const [searchTerm, setSearchTerm] = useState("");

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

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.position && user.position.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.department && user.department.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="flex h-screen bg-gray-50 text-gray-900">
            <div className="w-64 flex-shrink-0">
                <DashSidebar />
            </div>

            <main className="flex-1 flex flex-col overflow-hidden">
                <div className="p-4 md:p-8">
                    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Team Management</h1>
                            <p className="text-sm text-gray-500">Manage all platform users and their permissions</p>
                        </div>
                        <button
                            className="bg-[#3F5FFF] hover:bg-[#354fc9] text-white px-4 py-2 rounded-lg shadow flex items-center gap-2 transition-colors duration-200"
                            onClick={openAddModal}
                        >
                            <FaPlus className="text-sm" />
                            <span>Add User</span>
                        </button>
                    </div>

                    <div className="mb-6 bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaSearch className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#3F5FFF] focus:border-transparent"
                                    placeholder="Search users..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                                <FiFilter />
                                <span>Filters</span>
                            </button>
                        </div>
                    </div>
                </div>

                {showModal && (
                    <AddUserModal
                        user={editingUser}
                        onClose={() => setShowModal(false)}
                        onSubmit={editingUser ? handleUpdateUser : handleAddUser}
                    />
                )}

                <div className="flex-1 overflow-hidden px-4 md:px-8 pb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
                        <div className="overflow-y-auto flex-1">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 sticky top-0">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Position
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Department
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {filteredUsers.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                                            {searchTerm ? "No matching users found" : "No users available"}
                                        </td>
                                    </tr>
                                ) : (
                                    filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-[#3F5FFF] to-[#6A3BFF] rounded-full flex items-center justify-center text-white font-bold text-sm uppercase">
                                                        {user.name.slice(0, 2)}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                        <div className="text-sm text-gray-500">{user.role}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{user.position || "—"}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{user.department || "—"}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.phone || "—"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        user.status === "active"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-gray-100 text-gray-800"
                                                    }`}>
                                                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                                                    </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end space-x-3">
                                                    <button
                                                        onClick={() => openEditModal(user)}
                                                        className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
                                                        title="Edit"
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="text-red-600 hover:text-red-900 transition-colors duration-200"
                                                        title="Delete"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}