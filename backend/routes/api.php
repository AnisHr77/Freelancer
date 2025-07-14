<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    ProjectController,
    ProposalController,
    ContractController,
    MessageController,
    ReviewController,
    AuthController,
    DashboardController,
    ConversationController,
    UserController
};

// ======================
// ✅ Auth Routes
// ======================
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// ======================
// ✅ Dashboard Data
// ======================
Route::get('/dashboard/overview', [DashboardController::class, 'overview']);
Route::get('/dashboard/earning-chart', [DashboardController::class, 'earningChart']);
Route::get('/dashboard/analytics', [DashboardController::class, 'analytics']);
Route::get('/dashboard/analyticsall', [DashboardController::class, 'analyticsAll']);
Route::get('/dashboard/application-status', [DashboardController::class, 'applicationStatus']);
Route::get('/dashboard/active-projects', [ProjectController::class, 'activeProjects']);

// ======================
// ✅ User Basic Info (Mock)
// ======================
Route::get('/user', function (Request $request) {
    return response()->json([
        'name' => 'Anis Hadj Ramdane',
        'location' => 'Alger, Algeria',
    ]);
});

// ======================
// ✅ Messaging & Conversations
// ======================
// Admin: Get all conversations between all users
// routes/api.php

Route::get('/admin/conversations', [ConversationController::class, 'index']);
Route::get('/conversations/{id}', [ConversationController::class, 'show']);
Route::get('/conversations/{id}/messages', [ConversationController::class, 'messages']); // ✅ Use this one


// ======================
// ✅ Users Management
// ======================
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

// ======================
// ✅ User-Specific Resources
// ======================
Route::get('/proposals/user', [ProposalController::class, 'userProposals']);
Route::get('/reviews/user', [ReviewController::class, 'userReviews']);

// ======================
// ✅ API Resource Routes
// ======================
Route::apiResource('projects', ProjectController::class);
Route::apiResource('proposals', ProposalController::class);
Route::apiResource('contracts', ContractController::class);
Route::apiResource('messages', MessageController::class);
Route::apiResource('reviews', ReviewController::class);
