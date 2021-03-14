<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scrim extends Model
{
    use HasFactory;

    protected $fillable = [
      'title', 'game_id', 'platform_id', 'region_id', 'type', 'message',
    ];

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function platform()
    {
        return $this->belongsTo(Platform::class);
    }
}
