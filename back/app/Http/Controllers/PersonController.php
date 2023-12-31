<?php

namespace App\Http\Controllers;

use App\Events\StatusDiscardedEvent;
use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Requests\PersonRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;



class PersonController extends Controller
{
    
    public function index():JsonResponse
    {
        $persons = Person::with('status','bootcamp')->get();
        return response()->json(['data'=>$persons], 200);
    }

    
       
    public function store(PersonRequest $request):JsonResponse
    {
        $person=Person::create($request->all());

        return response()->json([
            'success'=>true,
            'data'=>$person], 201);
    }

    
    public function show($id): JsonResponse
    {
        $person = Person::with('status', 'bootcamp')->find($id);
        return response()->json($person, 200);
    }
    
        
    public function update(PersonRequest $request, $id):JsonResponse
    {
        $person = Person::find($id);
       
        $person->name=$request->name;
        $person->surname=$request->surname;
        $person->email=$request->email;
        $person->image=$request->image;
        $person->phone=$request->phone;
        $person->address=$request->address;
        $person->city=$request->city;
        $person->region=$request->region;
        $person->birthdate=$request->birthdate;
        $person->dataprotection=$request->dataprotection;
        $person->gender=$request->gender;
        $person->dni=$request->dni;
        $person->id_status=$request->id_status;
        $person->id_bootcamp=$request->id_bootcamp;
        $person ->save();

        
        if ($person -> id_status == 3) {
            event(new StatusDiscardedEvent($person));
             }

        return response()->json([
            'success'=>true
            ], 200);
    }

    
    public function destroy($id):JsonResponse
    {
        Person::find($id)->delete();
        return response()->json([
            'success'=>true
        ], 200);
    }

    public function secondPhase(Request $request): JsonResponse
{
    $email = $request->input('email');
    $person = Person::where('email', $email)->first();

    if (!$person) {
        return response()->json(['message' => 'El email proporcionado no figura en el registro'], 404);
    }

    $person->motivation = $request->input('motivation');
    $person->englishLevel = $request->input('englishLevel');
    $person->degree = $request->input('degree');
    $person->anotherCourse = $request->input('anotherCourse');
    $person->howArrived = $request->input('howArrived');
    $person->employmentStatus = $request->input('employmentStatus');
    $person->exerciseUrl = $request->input('exerciseUrl');

    $person->save();

    return response()->json(['message' => 'Información actualizada con éxito'], 200);
}



    // RECRUITMENT METHODS

    public function getPeopleInSelectionDay($selectionDayId)
{
   
    $people = Person::where('selection_day_id', $selectionDayId)->get();

    return response()->json(['data' => $people], 200);
}
}
