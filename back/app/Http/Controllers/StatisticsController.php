<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    public function getGenderPercentages($id):JsonResponse
    {
           // Consulta para contar personas por género
           $genderCounts = Person::select('gender', DB::raw('count(*) as count'))
               ->groupBy('gender')
               ->get();
   
           // Calcula los porcentajes
           $totalPeople = $genderCounts->sum('count');
           $genderPercentages = $genderCounts->map(function ($item) use ($totalPeople) {
               return [
                   'gender' => $item->gender,
                   'count' => $item->count,
                   'percentage' => ($item->count / $totalPeople) * 100,
               ];
           });
   
           return response()->json(['data' => $genderPercentages], 200);
   
//    $person = Person::find($id);
//    return response ()->json($person, 200);
   
   }
}
