// components/AddUserModal.tsx
'use client'
import { useState } from "react";
import axios from "axios";

export default function AddUserModal({ onClose, onUserAdded }: any) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "client",
        status: "active",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:8001/api/users", form, {
                withCredentials: true,
            });
            onUserAdded();
            onClose();
        } catch (err) {
            console.error("Error adding user", err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-xl font-semibold mb-4">Add New User</h2>

                <div className="space-y-3">
                    <input type="text" name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" />
                    <input type="email" name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" />
                    <input type="password" name="password" onChange={handleChange} placeholder="Password" className="w-full border p-2 rounded" />
                    <select name="role" onChange={handleChange} className="w-full border p-2 rounded">
                        <option value="client">Client</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="admin">Admin</option>
                    </select>
                    <select name="status" onChange={handleChange} className="w-full border p-2 rounded">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
                    <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
                </div>
            </div>
        </div>
    );
}
