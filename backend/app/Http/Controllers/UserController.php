<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            ['id' => 1, 'name' => 'Anis'],
            ['id' => 2, 'name' => 'Ali'],
            ['id' => 3, 'name' => 'Sara'],
        ]);
    }
}
