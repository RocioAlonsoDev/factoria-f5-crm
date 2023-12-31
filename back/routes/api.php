<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BootcampController;
use App\Http\Controllers\BootcampRequirementController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PersonBootcampController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\StatisticsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::put('/secondform', [PersonController::class, 'secondPhase']);


Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout',[AuthController::class, 'logout']);
    Route::get('/me',[AuthController::class, 'me']);

});

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    
//     return $request->user();
// });


Route::get('user/{user_id}', [AuthController::class, 'getUserDetails']);


Route::resource('/status', StatusController::class);
Route::resource('/bootcamp', BootcampController::class);
Route::resource('/role', RoleController::class);

Route::post('/signup',[AuthController::class, 'signup']);
Route::post('/login',[AuthController::class, 'login']);
Route::resource('/person', PersonController::class);
Route::resource('/status', StatusController::class);
Route::resource('/bootcamp', BootcampController::class);
Route::resource('/bootcampRequirement', BootcampRequirementController::class);
Route::resource('/role', RoleController::class);
Route::resource('/genderper', StatisticsController::class);

Route::get('totalGenderPercentage', [StatisticsController::class, 'getTotalGenderPercentages']);
Route::get('totalWomenByYear', [StatisticsController::class, 'getTotalWomenByYear']);
Route::get('totalAgePercentage', [StatisticsController::class, 'getTotalAgePercentages']);
Route::get('totalPeoplebySchool', [StatisticsController::class, 'getTotalPeopleBySchool']);
Route::get('totalCoderCurrentYear', [StatisticsController::class, 'getTotalCoderCurrentYear']);


// Route::get('/',[MailController::class, 'index']);
 Route::get('/discarded',[MailController::class, 'discarded']);

 //Second form - recruitment



Route::get('/getPeopleInBootcamp/{bootcamp}', [PersonBootcampController::class, 'getPeopleInBootcamp']);
