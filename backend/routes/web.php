<?php

use App\Http\Controllers\AuthController;

Route::get('/register', [AuthController::class, 'showRegisterForm']);
Route::post('/register', [AuthController::class, 'register'])->name('register');

Route::get('/login', [AuthController::class, 'showLoginForm']);
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/dashboard', function () {
    $user = Auth::user();

    if ($user && str_contains($user->email, '@admin')) {
        return view('dashboard');
    }

    abort(403, 'Access denied.');
})->middleware('auth');

