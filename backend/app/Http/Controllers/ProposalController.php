<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use Illuminate\Http\Request;

class ProposalController extends Controller
{
    public function index()
    {
        return response()->json(Proposal::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'user_id' => 'required|exists:users,id',
            'amount' => 'required|numeric',
            'message' => 'required|string',
            'status' => 'nullable|string',
        ]);

        $proposal = Proposal::create($validated);
        return response()->json($proposal, 201);
    }

    public function show(Proposal $proposal)
    {
        return response()->json($proposal);
    }

    public function update(Request $request, Proposal $proposal)
    {
        $proposal->update($request->all());
        return response()->json($proposal);
    }

    public function destroy(Proposal $proposal)
    {
        $proposal->delete();
        return response()->json(['message' => 'Proposal deleted']);
    }
}

