<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Proposal;
use App\Models\Message;
use App\Models\Contract;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function overview()
    {
        $userId = 1; // Remplacer par auth()->id()

        $activeProjectsCount = Project::where('user_id', $userId)
            ->where('status', 'active')
            ->count();

        $proposalsCount = Proposal::where('freelancer_id', $userId)->count();

        $unreadMessagesCount = Message::where('receiver_id', $userId)
            ->where('is_read', false)
            ->count();

        return response()->json([
            'active_projects' => $activeProjectsCount,
            'proposals' => $proposalsCount,
            'unread_messages' => $unreadMessagesCount,
        ]);
    }

    public function earningsReport()
    {
        $userId = 1; // Remplace par auth()->id() quand tu actives l'auth

        // Récupérer les contrats dont la proposition appartient au freelance connecté
        $contracts = Contract::whereHas('proposal', function ($query) use ($userId) {
            $query->where('freelancer_id', $userId);
        })
            ->where('status', 'completed')
            ->get(['id', 'proposal_id', 'payment_amount', 'status', 'start_date', 'end_date']);

        $totalEarnings = $contracts->sum('payment_amount');

        return response()->json([
            'total_earnings' => $totalEarnings,
            'contracts' => $contracts
        ]);
    }
}
