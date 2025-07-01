<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Show register form + handle register
Route::get('/register', [AuthController::class, 'showForm']);
Route::post('/register', [AuthController::class, 'register'])->name('register');

// ✅ Add this login route (even if you're not using it via web)
Route::get('/login', function () {
    return response()->json(['message' => 'Please login'], 401);
})->name('login');
