'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import DashSidebar from '@/components/dashSidebar';

export default function EditContractPage() {
    const router = useRouter();
    const { id } = useParams();
    const [form, setForm] = useState<any>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8001/api/contracts/${id}`).then((res) => {
            setForm(res.data);
        });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8001/api/contracts/${id}`, form);
            router.push('/dashboard/contracts');
        } catch (err) {
            console.error(err);
            setError('Something went wrong while updating the contract.');
        }
    };

    if (!form) return <div className="p-6">Loading...</div>;

    return (
        <div className="flex min-h-screen bg-gray-50">
            <DashSidebar />
            <main className="flex-1 p-6 lg:p-8">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
                    <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Contract #{id}</h1>
                    {error && <p className="text-red-600 mb-4">{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="proposal_id" value={form.proposal_id} onChange={handleChange} className="w-full border p-2 rounded" required />
                        <input type="date" name="start_date" value={form.start_date} onChange={handleChange} className="w-full border p-2 rounded" required />
                        <input type="date" name="end_date" value={form.end_date ?? ''} onChange={handleChange} className="w-full border p-2 rounded" />
                        <input type="number" name="payment_amount" value={form.payment_amount} onChange={handleChange} className="w-full border p-2 rounded" />
                        <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
                            <option value="pending">Pending</option>
                            <option value="active">Active</option>
                            <option value="completed">Completed</option>
                            <option value="terminated">Terminated</option>
                        </select>
                        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Update Contract</button>
                    </form>
                </div>
            </main>
        </div>
    );
}
