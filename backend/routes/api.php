<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\{
    SurveyController,
    ProjectController
};

use App\Http\Controllers\{
    ProposalController,
    ContractController,
    MessageController,
    ReviewController,
    AuthController,
    DashboardController,
    ConversationController,
    UserController,
};

// ✅ Auth Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// ✅ Dashboard
Route::get('/dashboard/overview', [DashboardController::class, 'overview']);
Route::get('/dashboard/earning-chart', [DashboardController::class, 'earningChart']);
Route::get('/dashboard/analytics', [DashboardController::class, 'analytics']);
Route::get('/dashboard/analyticsall', [DashboardController::class, 'analyticsAll']);
Route::get('/dashboard/application-status', [DashboardController::class, 'applicationStatus']);
Route::get('/dashboard/active-projects', [DashboardController::class, 'activeProjects']);

// ✅ User Info (Mock)
Route::get('/user', function (Request $request) {
    return response()->json([
        'name' => 'Anis Hadj Ramdane',
        'location' => 'Alger, Algeria',
    ]);
});

// ✅ Conversations & Messaging
Route::get('/admin/conversations', [ConversationController::class, 'index']);
Route::get('/conversations/{id}', [ConversationController::class, 'show']);
Route::get('/conversations/{id}/messages', [ConversationController::class, 'messages']);
Route::apiResource('messages', MessageController::class);

// ✅ Users Management
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

// ✅ User-specific
Route::get('/proposals/user', [ProposalController::class, 'userProposals']);
Route::get('/reviews/user', [ReviewController::class, 'userReviews']);

// ✅ Contracts
Route::get('/contracts', [ContractController::class, 'index']);
Route::post('/contracts', [ContractController::class, 'store']);
Route::get('/contracts/statistics', [ContractController::class, 'statistics']);
Route::apiResource('contracts', ContractController::class);

// ✅ Surveys (Questions + Responses)
Route::get('/surveys', [SurveyController::class, 'index']);
Route::post('/surveys', [SurveyController::class, 'store']);
Route::get('/surveys/full', [SurveyController::class, 'allSurveysWithQuestions']);

// ✅ Projects, Proposals, Reviews
Route::apiResource('projects', ProjectController::class);
Route::apiResource('proposals', ProposalController::class);
Route::apiResource('reviews', ReviewController::class);
