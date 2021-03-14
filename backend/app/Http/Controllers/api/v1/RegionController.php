<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Region;
use App\Http\Resources\Region as RegionResource;

class RegionController extends Controller
{
    public function all(Request $request)
    {
        return RegionResource::collection(Region::all());
    }
}
