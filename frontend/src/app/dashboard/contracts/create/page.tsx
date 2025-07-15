'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import DashSidebar from '@/components/dashSidebar';

export default function CreateContractPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        proposal_id: '',
        start_date: '',
        end_date: '',
        payment_amount: '',
        status: 'pending',
    });

    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8001/api/contracts', form);
            router.push('/dashboard/contracts');
        } catch (err: any) {
            console.error(err);
            if (err.response?.status === 422) {
                const errors = err.response.data.errors;
                const messages = Object.values(errors).flat().join(', ');
                setError(messages);
            } else {
                setError('Something went wrong while creating the contract.');
            }
        }

    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <DashSidebar />

            <main className="flex-1 p-6 lg:p-8">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
                    <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Contract</h1>

                    {error && <p className="text-red-600 mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Proposal ID</label>
                            <input
                                type="text"
                                name="proposal_id"
                                value={form.proposal_id}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Start Date</label>
                            <input
                                type="date"
                                name="start_date"
                                value={form.start_date}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">End Date</label>
                            <input
                                type="date"
                                name="end_date"
                                value={form.end_date}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Payment Amount</label>
                            <input
                                type="number"
                                name="payment_amount"
                                value={form.payment_amount}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Status</label>
                            <select
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            >
                                <option value="pending">Pending</option>
                                <option value="active">Active</option>
                                <option value="completed">Completed</option>
                                <option value="terminated">Terminated</option>
                            </select>
                        </div>
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                            >
                                Create Contract
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
