'use client';

import { useState, useEffect } from "react";

interface User {
    id?: number;
    name: string;
    email: string;
    role: "client" | "freelancer" | "admin";
    position: string;
    department: string;
    phone: string;
}

interface Props {
    user?: User | null;
    onClose: () => void;
    onSubmit: (data: User & { password?: string }) => void;
}

export default function AddUserModal({ user, onClose, onSubmit }: Props) {
    const isEdit = !!user;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'client',
        position: '',
        department: '',
        phone: '',
        password: '',
    });

    useEffect(() => {
        if (isEdit && user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                role: user.role || 'client',
                position: user.position || '',
                department: user.department || '',
                phone: user.phone || '',
                password: '',
            });
        } else {
            setFormData({
                name: '',
                email: '',
                role: 'client',
                position: '',
                department: '',
                phone: '',
                password: '',
            });
        }
    }, [user, isEdit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || (!isEdit && !formData.password)) {
            alert('Please fill all required fields.');
            return;
        }
        if (isEdit) {
            const { password, ...dataWithoutPassword } = formData;
            onSubmit(dataWithoutPassword);
        } else {
            onSubmit(formData);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
                <h2 className="text-xl font-semibold mb-4">{isEdit ? "Edit User" : "Add New User"}</h2>

                <div className="space-y-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full border p-2 rounded"
                    />
                    {!isEdit && (
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full border p-2 rounded"
                        />
                    )}
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Position"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Department"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full border p-2 rounded"
                    />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="client">Client</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
                    <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
                        {isEdit ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
}
