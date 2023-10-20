<?php

namespace App\Http\Controllers;

use App\Models\Person_Bootcamp;
use Illuminate\Http\Request;

class PersonBootcampController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getPeopleInBootcamp($bootcamp)
    {
        $people = Person_Bootcamp::where('id_bootcamp', $bootcamp)->get();
        if ($people->count() > 0) {
            return response()->json(['data' => $people], 200);
        } else {
            return response()->json(['error' => 'No se encontraron personas en el bootcamp'], 404);
        }
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Person_Bootcamp $person_Bootcamp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Person_Bootcamp $person_Bootcamp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Person_Bootcamp $person_Bootcamp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Person_Bootcamp $person_Bootcamp)
    {
        //
    }
}
