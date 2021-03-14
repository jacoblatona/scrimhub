<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\Region as RegionResource;
use App\Http\Resources\Game as GameResource;
use App\Http\Resources\Platform as PlatformResource;
use App\Models\Region;
use App\Models\Game;
use App\Models\Platform;

class Scrim extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'type' => $this->type,
            'message' => $this->message,
            'region' => new RegionResource(Region::find($this->region_id)),
            'game' => new GameResource(Game::find($this->game_id)),
            'platform' => new PlatformResource(Platform::find($this->platform_id))
        ];
    }
}
