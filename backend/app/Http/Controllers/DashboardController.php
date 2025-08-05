<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Proposal;
use App\Models\Message;
use App\Models\Contract;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class DashboardController extends Controller
{

    public function overview(Request $request)
    {
        $userId = $request->user()->id ?? 16; // récupère l'utilisateur connecté ou 1 par défaut (à adapter)

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


    public function earningChart(Request $request)
    {
        $userId = $request->user()->id ?? 16;

        $earnings = Contract::selectRaw('MONTH(end_date) as month, SUM(payment_amount) as income')
            ->where('status', 'completed')
            ->whereYear('end_date', now()->year)
            ->whereHas('proposal', function ($query) use ($userId) {
                $query->where('freelancer_id', $userId);
            })
            ->groupByRaw('MONTH(end_date)')
            ->get();

        \Log::info('Earnings:', $earnings->toArray());

        $data = collect(range(1, 12))->map(function ($month) use ($earnings) {
            $found = $earnings->firstWhere('month', $month);
            return [
                'month' => \Carbon\Carbon::create()->month($month)->format('M'),
                'income' => $found ? (float) $found->income : 0,
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


    public function analytics(Request $request)
    {
        $userId = $request->user()->id ?? 16;

        $completed = Contract::whereHas('proposal', function ($q) use ($userId) {
            $q->where('freelancer_id', $userId);
        })->where('status', 'completed')->count();

        $total = Contract::whereHas('proposal', function ($q) use ($userId) {
            $q->where('freelancer_id', $userId);
        })->count();

        $completionRate = $total > 0 ? round(($completed / $total) * 100) : 0;

        return response()->json([
            'completed_tasks' => $completed,
            'total_contracts' => $total,
            'completion_rate' => $completionRate,
            'response_rate' => 85,
            'tasks_progress' => $completionRate,
        ]);
    }


    public function analyticsAll()
    {
        $freelancers = User::where('role', 'freelancer')->get();

        $data = [];

        foreach ($freelancers as $freelancer) {
            $userId = $freelancer->id;

            $completed = Contract::whereHas('proposal', function ($q) use ($userId) {
                $q->where('freelancer_id', $userId);
            })->where('status', 'completed')->count();

            $total = Contract::whereHas('proposal', function ($q) use ($userId) {
                $q->where('freelancer_id', $userId);
            })->count();

            $completionRate = $total > 0 ? round(($completed / $total) * 100) : 0;

            $data[] = [
                'freelancer_id' => $userId,
                'freelancer_name' => $freelancer->name,
                'completed_tasks' => $completed,
                'total_contracts' => $total,
                'completion_rate' => $completionRate,
                'response_rate' => 85,
                'tasks_progress' => $completionRate,
            ];
        }

        return response()->json($data);
    }

    public function applicationStatus(Request $request)
    {
        $freelancerId = $request->user()->id ?? 13;

        $proposals = Proposal::with('project')
            ->where('freelancer_id', $freelancerId)
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get();

        $data = $proposals->map(function ($proposal) {
            $status = $proposal->status;
            $label = match ($status) {
                'pending' => null,
                'rejected' => 'Not selected',
                'interview' => 'Interview',
                default => ucfirst($status),
            };

            return [
                'title' => $proposal->project->title ?? 'N/A',
                'status' => $status,
                'date' => Carbon::parse($proposal->created_at)->format('M d'),
                'tags' => ['Remote', 'Contract'], // à adapter si besoin
                'label' => $label,
            ];
        });

        return response()->json($data);
    }

    public function activeProjects(Request $request)
    {
        $userId = $request->query('user_id') ?? $request->user()->id ?? 13;

        $activeProjects = Project::where('user_id', $userId)
            ->where('status', 'active')
            ->get();

        return response()->json($activeProjects);
    }

}
