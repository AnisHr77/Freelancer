<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Message;

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
            'message' => 'required|string',
        ]);

        $message = Message::create([
            'sender_id'   => $validated['sender_id'],
            'receiver_id' => $validated['receiver_id'],
            'message'     => $validated['message'],
            'is_read'     => false,
        ]);

        return response()->json($message, 201);
    }

    public function show(Message $message)
    {
        return response()->json($message);
    }

    public function update(Request $request, Message $message)
    {
        $request->validate([
            'message' => 'string|nullable',
            'is_read' => 'boolean|nullable',
        ]);

        $message->update($request->only(['message', 'is_read']));
        return response()->json($message);
    }

    public function destroy(Message $message)
    {
        $message->delete();
        return response()->json(['message' => 'Message deleted']);
    }

    // ✅ Admin: All conversations between user pairs
    public function allConversations()
    {
        $conversations = DB::table('messages')
            ->select(
                DB::raw('LEAST(sender_id, receiver_id) AS user1'),
                DB::raw('GREATEST(sender_id, receiver_id) AS user2'),
                DB::raw('MAX(id) as last_message_id')
            )
            ->groupBy('user1', 'user2')
            ->orderByDesc('last_message_id')
            ->get();

        $results = $conversations->map(function ($conv) {
            $lastMessage = Message::with('sender:id,name', 'receiver:id,name')
                ->find($conv->last_message_id);

            return [
                'conversation_id' => $conv->last_message_id,
                'user1_id' => $conv->user1,
                'user2_id' => $conv->user2,
                'user1_name' => $lastMessage->sender->id == $conv->user1 ? $lastMessage->sender->name : $lastMessage->receiver->name,
                'user2_name' => $lastMessage->sender->id == $conv->user2 ? $lastMessage->sender->name : $lastMessage->receiver->name,
                'last_message' => $lastMessage->message,
                'last_message_at' => $lastMessage->created_at,
            ];
        });

        return response()->json($results);
    }

    // ✅ Messages between two users
    public function getMessages($otherUserId)
    {
        $userId = auth()->id() ?? 1; // fallback for testing

        $messages = Message::where(function ($q) use ($userId, $otherUserId) {
            $q->where('sender_id', $userId)->where('receiver_id', $otherUserId);
        })->orWhere(function ($q) use ($userId, $otherUserId) {
            $q->where('sender_id', $otherUserId)->where('receiver_id', $userId);
        })
            ->with('sender:id,name')
            ->orderBy('created_at', 'asc')
            ->get()
            ->map(function ($msg) {
                return [
                    'id' => $msg->id,
                    'sender_id' => $msg->sender_id,
                    'sender_name' => $msg->sender->name ?? 'Unknown',
                    'message' => $msg->message,
                    'created_at' => $msg->created_at,
                ];
            });

        return response()->json(['messages' => $messages]);
    }
}
