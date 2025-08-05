<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Survey; // ✅ Add this line
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function index()
    {
        $questions = Question::with('options')->get();
        return response()->json($questions);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'text' => 'required|string',
            'type' => 'required|string',
            'options' => 'array'
        ]);

        $question = Question::create([
            'text' => $data['text'],
            'type' => $data['type'],
        ]);

        if (!empty($data['options'])) {
            $question->options()->createMany(
                collect($data['options'])->map(fn($option) => ['option_text' => $option])->toArray()
            );
        }

        return response()->json($question->load('options'), 201);
    }

  
}
