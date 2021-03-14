<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\Scrim as ScrimResource;
use App\Models\Scrim;

class ScrimController extends Controller
{
    public function all(Request $request)
    {
        return ScrimResource::collection(Scrim::orderBy('id', 'desc')->get());
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
           'title' => 'required|string',
           'game_id' => 'required|exists:games,id',
           'platform_id' => 'required|exists:platforms,id',
           'region_id' => 'required|exists:regions,id',
           'type' => 'required|string',
           'message' => 'nullable|string',
        ]);

        $scrim = Scrim::create($validatedData);

        return response()->json(new ScrimResource($scrim), 200);
    }
}
