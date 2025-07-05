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


    Route::get('/dashboard/overview', [DashboardController::class, 'overview']);
    Route::get('/dashboard/earnings', [DashboardController::class, 'earningsReport']);
    Route::get('/projects/active', [ProjectController::class, 'activeProjects']);
    Route::get('/proposals/user', [ProposalController::class, 'userProposals']);
    Route::get('/messages/conversations', [MessageController::class, 'conversations']);
    Route::get('/reviews/user', [ReviewController::class, 'userReviews']);



Route::apiResource('projects', ProjectController::class);
Route::apiResource('proposals', ProposalController::class);
Route::apiResource('contracts', ContractController::class);
Route::apiResource('messages', MessageController::class);
Route::apiResource('reviews', ReviewController::class);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
