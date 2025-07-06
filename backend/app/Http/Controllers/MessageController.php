<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index()
    {
        return response()->json(Message::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'sender_id' => 'required|exists:users,id',
            'receiver_id' => 'required|exists:users,id',
            'content' => 'required|string',
        ]);

        $message = Message::create($validated);
        return response()->json($message, 201);
    }

    public function show(Message $message)
    {
        return response()->json($message);
    }

    public function update(Request $request, Message $message)
    {
        $message->update($request->all());
        return response()->json($message);
    }

    public function destroy(Message $message)
    {
        $message->delete();
        return response()->json(['message' => 'Message deleted']);
    }

    public function conversations()
    {
        $userId = 1; // Remplacer par auth()->id()

        // récupérer les conversations uniques (sender + receiver)
        $conversations = Message::select(DB::raw('
            IF(sender_id = '.$userId.', receiver_id, sender_id) as user_id
        '))
            ->where('sender_id', $userId)
            ->orWhere('receiver_id', $userId)
            ->groupBy('user_id')
            ->get();

        return response()->json($conversations);
    }

    public function getMessages($id)
    {
        $messages = Message::where('conversation_id', $id)
            ->with('sender:id,name') // charge le nom du sender
            ->orderBy('created_at', 'asc')
            ->get()
            ->map(function ($message) {
                return [
                    'id' => $message->id,
                    'sender_id' => $message->sender_id,
                    'sender_name' => $message->sender->name ?? 'Unknown',
                    'message' => $message->message,
                    'created_at' => $message->created_at,
                ];
            });

        return response()->json([
            'conversation_id' => (int) $id,
            'messages' => $messages,
        ]);
    }
}

