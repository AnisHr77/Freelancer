<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use Illuminate\Http\Request;

class ContractController extends Controller
{
    public function index()
    {
        return response()->json(Contract::all());
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'proposal_id' => 'required|exists:proposals,id',
                'start_date' => 'required|date',
                'end_date' => 'nullable|date',
                'status' => 'nullable|string',
                'payment_amount' => 'nullable|numeric',
            ]);

            $contract = Contract::create($validated);
            return response()->json($contract, 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        }
    }


    public function show(Contract $contract)
    {
        return response()->json($contract);
    }

    public function update(Request $request, Contract $contract)
    {
        $contract->update($request->all());
        return response()->json($contract);
    }

    public function destroy(Contract $contract)
    {
        $contract->delete();
        return response()->json(['message' => 'Contract deleted']);
    }

    public function statistics()
    {
        $activeContracts = \App\Models\Contract::where('status', 'active')->get();

        $stats = $activeContracts->map(function ($contract) {
            return [
                'contract_id' => $contract->id,
                'payment_amount' => $contract->payment_amount,
                'platform_earnings' => $contract->payment_amount * 0.15,
                'freelancer_earning' => $contract->payment_amount * 0.85,
                'start_date' => $contract->start_date->toDateString(),
            ];
        });

        return response()->json([
            'total_earnings' => $stats->sum('platform_earnings'),
            'total_payments' => $stats->sum('payment_amount'),
            'data' => $stats,
        ]);
    }


}
