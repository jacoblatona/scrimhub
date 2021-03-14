<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Game;

use App\Http\Resources\Game as GameResource;

class GameController extends Controller
{
    public function all()
    {
        return GameResource::collection(Game::all());
    }
}
