<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ConversationController;


    Route::get('/dashboard/overview', [DashboardController::class, 'overview']);
    Route::get('dashboard/earning-chart', [DashboardController::class, 'earningChart']);
    Route::get('/projects/active', [ProjectController::class, 'activeProjects']);
    Route::get('/proposals/user', [ProposalController::class, 'userProposals']);
    Route::get('/messages/conversations', [MessageController::class, 'conversations']);
    Route::get('/reviews/user', [ReviewController::class, 'userReviews']);
    Route::get('/dashboard/analytics', [DashboardController::class, 'analytics']);
    Route::get('/dashboard/analyticsall', [DashboardController::class, 'analyticsAll']);
    Route::get('/dashboard/active-projects', [DashboardController::class, 'activeProjects']);
    Route::get('dashboard/application-status', [DashboardController::class, 'applicationStatus']);
    Route::get('/user/profile', function () {
    return response()->json([
        'name' => 'Anis Hadj Ramdane',
        'location' => 'Alger, Algeria',
    ]);
});
    //tt3awed
    Route::get('/conversations', [ConversationController::class, 'index']);
    Route::get('/conversations/{id}', [ConversationController::class, 'show']);
    Route::get('/conversations/{id}/messages', [MessageController::class, 'getMessages']);










Route::apiResource('projects', ProjectController::class);
Route::apiResource('proposals', ProposalController::class);
Route::apiResource('contracts', ContractController::class);
Route::apiResource('messages', MessageController::class);
Route::apiResource('reviews', ReviewController::class);
Route::post('/register', [AuthController::class, 'register']);
