<?php
use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'me']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
