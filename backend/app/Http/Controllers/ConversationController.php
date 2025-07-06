<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use Illuminate\Http\Request;

class ConversationController extends Controller
{
    public function index()
    {
        $conversations = Conversation::with(['client', 'freelancer', 'messages' => function($q) {
            $q->latest()->limit(1);
        }])->get();

        $response = $conversations->map(function($conv) {
            return [
                'id' => $conv->id,
                'client_id' => $conv->client_id,
                'freelancer_id' => $conv->freelancer_id,
                'client_name' => $conv->client->name,
                'freelancer_name' => $conv->freelancer->name,
                'last_message' => $conv->messages->first()->message ?? null,
                'last_message_at' => $conv->messages->first()->created_at ?? null,
            ];
        });

        return response()->json($response);
    }

    public function messages($id)
    {
        $conversation = Conversation::with(['messages.sender'])->findOrFail($id);

        return response()->json([
            'conversation_id' => $conversation->id,
            'messages' => $conversation->messages->map(function($message) {
                return [
                    'id' => $message->id,
                    'sender_id' => $message->sender_id,
                    'sender_name' => $message->sender->name,
                    'message' => $message->message,
                    'created_at' => $message->created_at,
                ];
            }),
        ]);
    }


    public function show($id, Request $request)
    {
        $conversation = Conversation::with('messages.sender')->findOrFail($id);

        // Optionnel : Vérifier que l'utilisateur connecté appartient à la conversation

        return response()->json($conversation);
    }
}
