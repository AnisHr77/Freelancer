'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import DashSidebar from '@/components/dashSidebar';

interface Contract {
    id: number;
    proposal_id: number;
    start_date: string;
    end_date: string | null;
    payment_amount?: number;
    status: string;
    created_at: string;
    updated_at: string;
}

const statusColors: Record<string, string> = {
    active: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800',
    terminated: 'bg-red-100 text-red-800',
    default: 'bg-gray-100 text-gray-800',
};

export default function ContractsPage() {
    const [contracts, setContracts] = useState<Contract[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    useEffect(() => {
        axios
            .get('http://localhost:8001/api/contracts')
            .then((res) => setContracts(res.data))
            .catch(() => setError('Failed to load contracts. Please try again later.'))
            .finally(() => setLoading(false));
    }, []);

    const formatDate = (dateString: string | null) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const formatCurrency = (amount?: number) => {
        if (amount === undefined) return '-';
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    const getStatusClass = (status: string) => {
        const lower = status.toLowerCase();
        return statusColors[lower] || statusColors.default;
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <DashSidebar />

            <main className="flex-1 p-6 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Contracts</h1>
                            <p className="text-gray-600 mt-1">Manage and review all your contracts</p>
                        </div>
                        <button
                            onClick={() => router.push('/dashboard/contracts/create')}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                            + New Contract
                        </button>
                    </div>

                    {error ? (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                            <p className="text-sm text-red-700">{error}</p>
                        </div>
                    ) : loading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                        </div>
                    ) : contracts.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">No contracts</h3>
                            <p className="mt-1 text-gray-500">Get started by creating a new contract.</p>
                            <div className="mt-6">
                                <button
                                    onClick={() => router.push('/dashboard/contracts/create')}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    <svg className="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                    New Contract
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Proposal</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Period</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                                        <th className="px-6 py-3 relative"><span className="sr-only">Actions</span></th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {contracts.map((contract) => (
                                        <tr key={contract.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">#{contract.id}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">Proposal #{contract.proposal_id}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                <div>{formatDate(contract.start_date)}</div>
                                                <div className="text-gray-400">to {formatDate(contract.end_date)}</div>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                {formatCurrency(contract.payment_amount)}
                                            </td>
                                            <td className="px-6 py-4">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(contract.status)}`}>
                                                        {contract.status}
                                                    </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{formatDate(contract.created_at)}</td>
                                            <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                                                <button
                                                    onClick={() => router.push(`/dashboard/contracts/view/${contract.id}`)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    onClick={() => router.push(`/dashboard/contracts/edit/${contract.id}`)}
                                                    className="text-gray-600 hover:text-gray-900"
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
