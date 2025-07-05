<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        return response()->json(Project::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'title' => 'required|string',
            'description' => 'required|string',
            'budget' => 'required|numeric',
            'status' => 'nullable|string'
        ]);

        $project = Project::create($validated);
        return response()->json($project, 201);
    }

    public function show(Project $project)
    {
        return response()->json($project);
    }

    public function update(Request $request, Project $project)
    {
        $project->update($request->all());
        return response()->json($project);
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return response()->json(['message' => 'Project deleted']);
    }
    public function activeProjects()
    {
        $userId = 1;

        $projects = Project::select('id', 'title', 'description', 'budget', 'deadline', 'status')
            ->where('user_id', $userId)
            ->where('status', 'active')
            ->orderBy('created_at', 'desc')
            ->get();


        return response()->json($projects);
    }


}

