<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\QuestionAnswer;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    // GET /surveys
    public function index()
    {
        $questions = Question::with('options')->get();
        return response()->json($questions);
    }

    // POST /surveys (create question + optional options)
    public function store(Request $request)
    {
        $data = $request->validate([
            'text' => 'required|string',
            'type' => 'required|string',
            'options' => 'nullable|array'
        ]);

        $question = Question::create([
            'text' => $data['text'],
            'type' => $data['type'],
        ]);

        if (!empty($data['options'])) {
            $question->options()->createMany(
                collect($data['options'])->map(fn($opt) => ['option_text' => $opt])->toArray()
            );
        }

        return response()->json($question->load('options'), 201);
    }

    // POST /surveys/answers (submit answer)
    public function submitAnswer(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required|exists:users,id',
            'answers' => 'required|array',
            'answers.*.question_id' => 'required|exists:questions,id',
            'answers.*.answer' => 'required' // Can be string or array (e.g. JSON)
        ]);

        $saved = [];

        foreach ($data['answers'] as $entry) {
            $saved[] = QuestionAnswer::create([
                'user_id' => $data['user_id'],
                'question_id' => $entry['question_id'],
                'answer' => is_array($entry['answer']) ? json_encode($entry['answer']) : $entry['answer'],
            ]);
        }

        return response()->json(['message' => 'Answers submitted', 'data' => $saved]);
    }
}

