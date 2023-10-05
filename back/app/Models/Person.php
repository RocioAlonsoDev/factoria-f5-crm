<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;
    protected $hidden = [];

    protected $fillable = [
            'name',
            'surname',
            'email',
            'image',
            'phone',
            'address',
            'city',
            'region',
            'birthdate',
            'dataprotection',
            'gender',
            'dni',
            'id_status',
            'id_bootcamp',
            
    ];

}
