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
            'freelancer_id' => 'required|exists:users,id',
            'cover_letter' => 'required|string',
            'bid_amount' => 'required|numeric',
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



    public function userProposals()
    {
        $userId = 1; // Remplacer par auth()->id()

        $proposals = Proposal::with('project')
            ->where('freelancer_id', $userId)
            ->get();

        return response()->json($proposals);
    }


}

