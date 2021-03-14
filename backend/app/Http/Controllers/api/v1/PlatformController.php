<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\Platform as PlatformResource;
use App\Models\Platform;

class PlatformController extends Controller
{
    public function all(Request $request)
    {
        return PlatformResource::collection(Platform::all());
    }
}
