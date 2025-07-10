<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Contract extends Model
{
    protected $fillable = ['proposal_id', 'start_date', 'end_date', 'payment_amount', 'status'];

    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }



    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }
}
