<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Proposal;
use App\Models\Message;
use App\Models\Contract;
use Illuminate\Http\Request;
use Carbon\Carbon;


class DashboardController extends Controller
{
    public function overview()
    {
        $userId = auth()->id() ?? 1;

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

    public function earningChart()
    {

        $earnings = \App\Models\Contract::selectRaw('MONTH(end_date) as month, SUM(payment_amount) as income')
            ->where('status', 'completed')
            ->whereYear('end_date', now()->year)
            ->groupByRaw('MONTH(end_date)')
            ->get();


        $data = collect(range(1, 12))->map(function ($month) use ($earnings) {
            $found = $earnings->firstWhere('month', $month);
            return [
                'month' => Carbon::create()->month($month)->format('M'),
                'income' => $found ? (float)$found->income : 0,
            ];
        });


        $totalIncome = $data->sum('income');


        $growth = rand(5, 25);

        return response()->json([
            'income' => $totalIncome,
            'growth' => $growth,
            'data' => $data,
        ]);
    }

    public function analytics()
    {
        $userId = auth()->id() ?? 2;

        $completed = Contract::whereHas('proposal', fn($q) =>
        $q->where('freelancer_id', $userId)
        )->where('status', 'completed')->count();

        $total = Contract::whereHas('proposal', fn($q) =>
        $q->where('freelancer_id', $userId)
        )->count();

        $completionRate = $total > 0 ? round(($completed / $total) * 100) : 0;

        return response()->json([
            'completed_tasks' => $completed,
            'total_contracts' => $total,
            'completion_rate' => $completionRate,
            'response_rate' => 85, // tu peux calculer ça plus tard si tu veux
            'tasks_progress' => $completionRate
        ]);
    }

    public function analyticsAll()
    {
        // Récupérer tous les freelances
        $freelancers = \App\Models\User::where('role', 'freelancer')->get();

        $data = [];

        foreach ($freelancers as $freelancer) {
            $userId = $freelancer->id;

            $completed = \App\Models\Contract::whereHas('proposal', function ($q) use ($userId) {
                $q->where('freelancer_id', $userId);
            })->where('status', 'completed')->count();

            $total = \App\Models\Contract::whereHas('proposal', function ($q) use ($userId) {
                $q->where('freelancer_id', $userId);
            })->count();

            $completionRate = $total > 0 ? round(($completed / $total) * 100) : 0;

            $data[] = [
                'freelancer_id' => $userId,
                'freelancer_name' => $freelancer->name,
                'completed_tasks' => $completed,
                'total_contracts' => $total,
                'completion_rate' => $completionRate,
                'response_rate' => 85, // tu peux changer la logique ici plus tard
                'tasks_progress' => $completionRate,
            ];
        }

        return response()->json($data);
    }

    public function activeProjects()
    {
        $contracts = \App\Models\Contract::with(['proposal.project', 'proposal.freelancer'])
            ->whereIn('status', ['active', 'in_progress'])
            ->get()
            ->map(function ($contract) {
                $start = Carbon::parse($contract->start_date);
                $end = Carbon::parse($contract->end_date);

                return [
                    'name' => $contract->proposal->freelancer->name,
                    'project' => $contract->proposal->project->title,
                    'price' => '$' . number_format($contract->payment_amount),
                    'time' => $start->diffForHumans($end, [
                        'syntax' => \Carbon\CarbonInterface::DIFF_RELATIVE_TO_NOW,
                        'parts' => 2,
                    ]),
                    'progress' => rand(30, 90),
                ];
            });

        return response()->json($contracts);
    }

    public function applicationStatus()
    {
        // Simuler un freelancer pour l'instant (ex: id 2)
        $freelancerId = 2;

        $proposals = \App\Models\Proposal::with('project')
            ->where('freelancer_id', $freelancerId)
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get();

        $data = $proposals->map(function ($proposal) {
            $status = $proposal->status; // ex: pending, rejected, accepted...
            $label = match ($status) {
                'pending' => null,
                'rejected' => 'Not selected',
                'interview' => 'Interview',
                default => ucfirst($status),
            };

            return [
                'title' => $proposal->project->title ?? 'N/A',
                'status' => $status,
                'date' => \Carbon\Carbon::parse($proposal->created_at)->format('M d'),
                'tags' => ['Remote', 'Contract'], // facultatif, tu peux les relier à des champs plus tard
                'label' => $label,
            ];
        });

        return response()->json($data);
    }



}
