<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['user_id', 'title', 'description', 'budget', 'status', 'deadline','progress_percentage'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
