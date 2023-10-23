<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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
            'motivation',
            'englishLevel',
            'degree',
            'anotherCourse',
            'howArrived',
            'employmentStatus',
            'exerciseUrl',
            
    ];

    public function selectionDays()
{
    return $this->belongsToMany(SelectionDay::class, 'person_selection_day', 'id_person', 'id_selection_day')
        ->withPivot(['school', 'comments', 'turn', 'decision'])
        ->withTimestamps();
}

    public function personBootcamp(): BelongsToMany
    {
        return $this->belongsToMany(Person_Bootcamp::class, 'person__bootcamp', 'person_id', 'id');
    }

    public function status():BelongsTo
    {
        return $this->belongsTo(Status::class, 'id_status');
    }

    public function bootcamp():BelongsTo
    {
        return $this->belongsTo(Bootcamp::class, 'id_bootcamp');
    }

}
