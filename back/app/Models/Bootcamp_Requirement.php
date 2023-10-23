<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bootcamp_Requirement extends Model
{
    use HasFactory;
    protected $hidden = [];

    protected $fillable = [
            'id_requirement',
            'id_bootcamp',
            
    ];

}
