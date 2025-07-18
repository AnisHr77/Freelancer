<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        return response()->json(Review::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'project_id' => 'required|exists:projects,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string',
        ]);

        $review = Review::create($validated);
        return response()->json($review, 201);
    }

    public function show(Review $review)
    {
        return response()->json($review);
    }

    public function update(Request $request, Review $review)
    {
        $review->update($request->all());
        return response()->json($review);
    }

    public function destroy(Review $review)
    {
        $review->delete();
        return response()->json(['message' => 'Review deleted']);
    }

    public function userReviews()
    {
        $freelancerId = 1; // ou auth()->id()

        $reviews = Review::whereExists(function ($query) use ($freelancerId) {
            $query->select('*')
                ->from('contracts')
                ->join('proposals', 'contracts.proposal_id', '=', 'proposals.id')
                ->whereColumn('reviews.contract_id', 'contracts.id')
                ->where('proposals.freelancer_id', $freelancerId);
        })->get();




        return response()->json($reviews);
    }
}
