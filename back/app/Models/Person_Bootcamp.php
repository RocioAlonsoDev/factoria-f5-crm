<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Bootcamp;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Person_Bootcamp extends Model
{   
    protected $table = 'person__bootcamp';
    use HasFactory;
    protected $hidden = [];

    protected $fillable = [
        'id_person', 
        'id_bootcamp',
        
    ];
    

    public function person()
    {
        return $this->belongsToMany(Person::class, 'person__bootcamp', 'id_person', 'id_bootcamp');
    }

    public function bootcamp()
    {
        return $this->belongsToMany(Bootcamp::class, 'person__bootcamp', 'id_person', 'id_bootcamp');
    }
}
