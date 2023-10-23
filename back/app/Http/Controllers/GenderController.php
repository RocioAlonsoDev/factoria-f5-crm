<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class GenderController extends Controller
{
    public function getGenderData()
    {
        $totalPeople = Person::count();
        $femaleCount = Person::where('gender', 'Mujer')->count();

        $data = [
            'female_count' => $femaleCount,
            'female_percentage' => ($totalPeople > 0) ? ($femaleCount / $totalPeople) * 100 : 0
        ];

        return response()->json($data, 200);
    }
}
