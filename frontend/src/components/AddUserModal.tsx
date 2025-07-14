'use client';

import { useState, useEffect } from "react";
import { X, User, Mail, Key, Briefcase, Building, Phone } from "lucide-react";

type UserRole = "client" | "freelancer" | "admin";

interface User {
    id?: number;
    name: string;
    email: string;
    role: UserRole;
    position: string;
    department: string;
    phone: string;
}

interface AddUserModalProps {
    user?: User | null;
    onClose: () => void;
    onSubmit: (data: User & { password?: string }) => void;
}

export default function AddUserModal({ user, onClose, onSubmit }: AddUserModalProps) {
    const isEdit = !!user;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'client' as UserRole,
        position: '',
        department: '',
        phone: '',
        password: '',
    });
    const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isEdit && user) {
            setFormData({
                name: user.name,
                email: user.email,
                role: user.role,
                position: user.position,
                department: user.department,
                phone: user.phone,
                password: '',
            });
        }
    }, [user, isEdit]);

    const validateForm = () => {
        const newErrors: typeof errors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!isEdit && !formData.password) {
            newErrors.password = 'Password is required';
        } else if (!isEdit && formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            if (isEdit) {
                const { password, ...dataWithoutPassword } = formData;
                await onSubmit(dataWithoutPassword);
            } else {
                await onSubmit(formData);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-xl shadow-2xl w-[95%] max-w-md overflow-hidden animate-scaleIn">
                <div className="relative p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <h2 className="text-2xl font-bold">
                        {isEdit ? "Edit User Profile" : "Create New User"}
                    </h2>
                    <p className="text-blue-100 mt-1">
                        {isEdit ? "Update user information" : "Add a new user to the system"}
                    </p>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="space-y-4">
                        {/* Name Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                                    errors.name ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                                }`}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <span>⚠</span> {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                                    errors.email ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                                }`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <span>⚠</span> {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Field (only for new users) */}
                        {!isEdit && (
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Key className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                                        errors.password ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <span>⚠</span> {errors.password}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Position Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Briefcase className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                placeholder="Job Position"
                                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        {/* Department Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Building className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="Department"
                                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        {/* Role Select */}
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                                User Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                            >
                                <option value="client">Client</option>
                                <option value="freelancer">Freelancer</option>
                                <option value="admin">Administrator</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-5 py-2.5 text-white font-medium rounded-lg transition-colors duration-200 ${
                                isSubmitting
                                    ? 'bg-blue-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                            }`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
                            ) : isEdit ? (
                                "Update User"
                            ) : (
                                "Create User"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}