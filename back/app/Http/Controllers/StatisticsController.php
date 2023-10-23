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
                   'percentage' => number_format(($item->count / $totalPeople) * 100, 2)
               ];
           });
   
           return response()->json(['data' => $genderPercentages], 200);
      
   }

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
        $currentYearPercentage = number_format(($currentYearWomen / $totalCurrentYearWomen) * 100, 2);
        $previousYearPercentage = number_format(($previousYearWomen / $totalCurrentYearWomen) * 100, 2);
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
       $percentageUnder30 = number_format(($totalPeopleUnder30 / $totalPeople) * 100, 2);
   
       return response()->json([
           'totalPeopleUnder30' => $totalPeopleUnder30,
           'totalPeople' => $totalPeople,
           'percentageUnder30' => $percentageUnder30,
           'currentYear' => $currentDate->year,
       ], 200);
   }
   


public function getTotalPeopleBySchool(): JsonResponse
{
    // Obtenemos el año actual y el año previo
    $currentYear = Carbon::now()->year;
    $previousYear = $currentYear - 1;

    // Consulta para contar personas por escuela en el año actual
    $currentYearCounts = DB::table('people')
        ->join('bootcamps', 'people.id_bootcamp', '=', 'bootcamps.id')
        ->select('bootcamps.school', DB::raw('count(*) as count'))
        ->whereRaw('YEAR(people.created_at) = ?', [$currentYear])
        ->groupBy('bootcamps.school')
        ->get();
    
    // Consulta para contar personas por escuela en el año previo
    $previousYearCounts = DB::table('people')
        ->join('bootcamps', 'people.id_bootcamp', '=', 'bootcamps.id')
        ->select('bootcamps.school', DB::raw('count(*) as count'))
        ->whereRaw('YEAR(people.created_at) = ?', [$previousYear])
        ->groupBy('bootcamps.school')
        ->get();

    // Calcula los porcentajes y las diferencias
    $currentYearTotalPeople = $currentYearCounts->sum('count');
    $previousYearTotalPeople = $previousYearCounts->sum('count');

    $schoolPercentages = $currentYearCounts->map(function ($item) use ($currentYearTotalPeople, $previousYearCounts, $previousYearTotalPeople, $currentYear, $previousYear) {
        $currentYearCount = $item->count;

        // Busca el valor correspondiente en el año previo
        $previousYearRecord = $previousYearCounts->first(function ($previousItem) use ($item) {
            return $previousItem->school === $item->school;
        });

        // Verifica si se encontró un registro para el año previo
        if ($previousYearRecord !== null) {
            $previousYearCount = $previousYearRecord->count;
        } else {
            $previousYearCount = 0; // Valor predeterminado en caso de que no se encuentre un registro
        }

        $currentYearPercentage = ($currentYearCount / $currentYearTotalPeople) * 100;
        $previousYearPercentage = ($previousYearCount / $previousYearTotalPeople) * 100;

        return [
            'currentYear' => $currentYear,
            'previousYear' => $previousYear,
            'school' => $item->school,
            'currentCount' => $currentYearCount, 
            'previousCount' => $previousYearCount,
            'currentPercentage' => number_format($currentYearPercentage, 2),
            'previousPercentage' => number_format($previousYearPercentage, 2),
            'difference' => $currentYearCount - $previousYearCount,
        ];
    });
    
    return response()->json(['data' => $schoolPercentages], 200);
}

public function getTotalCoderCurrentYear()
{
    // Obten el año actual
    $currentYear = Carbon::now()->year;

    // Realiza la consulta para obtener el total de personas con el estado "Coder" y creadas durante el año actual
    $totalCoderPeople = Person::where('id_status', 'Coder')
        ->whereYear('created_at', $currentYear)
        ->count();

    // Realiza otra consulta para obtener el total de personas creadas durante el año actual con cualquier estado
    $totalPeopleForCurrentYear = Person::whereYear('created_at', $currentYear)
        ->count();

    // Calcula el porcentaje
    $percentageCoderPeople = ($totalCoderPeople / $totalPeopleForCurrentYear) * 100;

    return [
        'year' => $currentYear,
        'totalCoderPeople' => $totalCoderPeople,
        'totalPeopleForCurrentYear' => $totalPeopleForCurrentYear,
        'percentageCoderPeople' => number_format($percentageCoderPeople, 2)
    ];
}


}
