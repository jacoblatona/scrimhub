<?php

namespace App\Http\Controllers\api\v1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $registerData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|confirmed',
        ]);

        $registerData['password'] = bcrypt($registerData['password']);

        $user = User::create($registerData);
        $token = $user->createToken('accessToken')->accessToken;

        return response()->json([
            'user' => $user,
            'authToken' => $token
        ], 200);

    }
}
