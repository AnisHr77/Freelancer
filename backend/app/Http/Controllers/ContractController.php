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
        $validated = $request->validate([
            'proposal_id' => 'required|exists:proposals,id',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
            'status' => 'nullable|string',
        ]);

        $contract = Contract::create($validated);
        return response()->json($contract, 201);
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
}
