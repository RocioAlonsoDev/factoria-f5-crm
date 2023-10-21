<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Bootcamp extends Model
{
    use HasFactory;
    protected $hidden = [];

    protected $fillable = [
        'name',
        'startDate', 
        'endDate',
        'description', 
        'school', 
        'promo',
    ];

    public function personBootcamp()
    {
    return $this->hasMany(Person_Bootcamp::class/*, 'person__bootcamp', 'bootcamp_id', 'id'*/);
    }

    public function person(): BelongsTo
    {
        return $this->belongsTo(Bootcamp::class);
                   
    }
}
