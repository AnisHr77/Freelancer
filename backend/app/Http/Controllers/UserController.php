<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
public function index()
{
return response()->json(User::all());
}

public function store(Request $request)
{
$validated = $request->validate([
'name' => 'required|string',
'email' => 'required|email|unique:users',
'password' => 'required|string|min:6'
]);

$validated['password'] = bcrypt($validated['password']);

$user = User::create($validated);
return response()->json($user, 201);
}

public function show(User $user)
{
return response()->json($user);
}

public function update(Request $request, User $user)
{
$user->update($request->all());
return response()->json($user);
}

public function destroy(User $user)
{
$user->delete();
return response()->json(['message' => 'User deleted']);
}
}
