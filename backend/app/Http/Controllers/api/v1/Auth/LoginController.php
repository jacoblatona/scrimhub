<?php

namespace App\Http\Controllers\api\v1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        if(!auth()->attempt($loginData))
        {
            return response()->json([
                'message' => 'Invalid Credentials'
            ], 401);
        }

        $token = auth()->user()->createToken('accessToken')->accessToken;

        return response()->json([
            'user' => auth()->user(),
            'authToken' => $token
        ], 200);

    }
}
