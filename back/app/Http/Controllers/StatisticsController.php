<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon; 

class StatisticsController extends Controller
{
    public function getTotalGenderPercentages():JsonResponse
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
      
   }


// public function getTotalWomenByYear(): JsonResponse
// {
//     // Obtenemos el año actual
//     $currentYear = now()->year;

//     // Consulta para contar mujeres por año actual
//     $currentYearWomen = Person::where('gender', 'female')
//         ->whereYear('created_at', $currentYear)
//         ->count();

//     // Consulta para contar mujeres por año anterior
//     $previousYear = $currentYear - 1;
//     $previousYearWomen = Person::where('gender', 'female')
//         ->whereYear('created_at', $previousYear)
//         ->count();

//     // Calculamos los porcentajes
//     $totalCurrentYearWomen = $currentYearWomen + $previousYearWomen;
    
//     // Comprobamos si el total es cero antes de la división
//     if ($totalCurrentYearWomen === 0) {
//         $currentYearPercentage = 0;
//         $previousYearPercentage = 0;
//     } else {
//         $currentYearPercentage = ($currentYearWomen / $totalCurrentYearWomen) * 100;
//         $previousYearPercentage = ($previousYearWomen / $totalCurrentYearWomen) * 100;
//     }

//     // Calculamos la diferencia en porcentaje entre current_year y previous_year
//     $percentageDifference = $currentYearPercentage - $previousYearPercentage;

//     return response()->json([
//         'current_year' => [
//             'year' => $currentYear,
//             'total_women' => $currentYearWomen,
//             'percentage' => $currentYearPercentage,
//         ],
//         'previous_year' => [
//             'year' => $previousYear,
//             'total_women' => $previousYearWomen,
//             'percentage' => $previousYearPercentage,
//         ],
//         'percentage_difference' => $percentageDifference, // Nueva clave con la diferencia en porcentaje
//     ], 200);
// }

public function getTotalWomenByYear(): JsonResponse
{
    // Obtenemos el año actual
    $currentYear = now()->year;

    // Consulta para contar mujeres por año actual
    $currentYearWomen = Person::where('gender', 'Mujer')
        ->whereRaw('YEAR(created_at) = ?', [$currentYear])
        ->count();

    // Consulta para contar mujeres por año anterior
    $previousYear = $currentYear - 1;
    $previousYearWomen = Person::where('gender', 'Mujer')
        ->whereRaw('YEAR(created_at) = ?', [$previousYear])
        ->count();

    // Calculamos los porcentajes
    $totalCurrentYearWomen = $currentYearWomen + $previousYearWomen;
    
    // Comprobamos si el total es cero antes de la división
    if ($totalCurrentYearWomen === 0) {
        $currentYearPercentage = 0;
        $previousYearPercentage = 0;
    } else {
        $currentYearPercentage = ($currentYearWomen / $totalCurrentYearWomen) * 100;
        $previousYearPercentage = ($previousYearWomen / $totalCurrentYearWomen) * 100;
    }

    // Calculamos la diferencia en porcentaje entre current_year y previous_year
    $percentageDifference = $currentYearPercentage - $previousYearPercentage;

    return response()->json([
        'current_year' => [
            'year' => $currentYear,
            'total_women' => $currentYearWomen,
            'percentage' => $currentYearPercentage,
        ],
        'previous_year' => [
            'year' => $previousYear,
            'total_women' => $previousYearWomen,
            'percentage' => $previousYearPercentage,
        ],
        'percentage_difference' => $percentageDifference, // Nueva clave con la diferencia en porcentaje
    ], 200);
}



   public function getTotalAgePercentages(): JsonResponse
   {
       // Consulta para obtener la fecha de nacimiento de las personas
       $birthdates = Person::select('birthdate')->get();
   
       // Obtiene la fecha actual
       $currentDate = Carbon::now();
   
       // Inicializa contadores
       $totalPeople = 0;
       $totalPeopleUnder30 = 0;
   
       foreach ($birthdates as $birthdate) {
           // Calcula la edad de la persona
           $age = $currentDate->diffInYears(Carbon::parse($birthdate->birthdate));
           
           // Incrementa el contador de personas
           $totalPeople++;
   
           // Comprueba si la persona tiene menos de 30 años
           if ($age < 30) {
               $totalPeopleUnder30++;
           }
       }
   
       // Calcula el porcentaje de personas menores de 30 años
       $percentageUnder30 = ($totalPeopleUnder30 / $totalPeople) * 100;
   
       return response()->json([
           'totalPeopleUnder30' => $totalPeopleUnder30,
           'totalPeople' => $totalPeople,
           'percentageUnder30' => $percentageUnder30,
       ], 200);
   }
   


}
