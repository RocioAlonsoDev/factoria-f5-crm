<?php

namespace App\Http\Controllers;

use App\Models\Bootcamp;
use Illuminate\Http\Request;
use App\Http\Requests\BootcampRequest;
use Illuminate\Http\JsonResponse;

class BootcampController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():JsonResponse
    {
        $bootcamps = Bootcamp::with('personBootcamp.person')->get();
        //$bootcamps = Bootcamp::all();
        return response()->json(['data'=>$bootcamps], 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(BootcampRequest $request):JsonResponse
    {
        $bootcamp=Bootcamp::create($request->all());

        return response()->json([
            'success'=>true,
            'data'=>$bootcamp], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id):JsonResponse
    {
        $bootcamp = Bootcamp::find($id);
        return response ()->json($bootcamp, 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(BootcampRequest $request, $id):JsonResponse
    {
        $bootcamp = Bootcamp::find($id);
        
        $bootcamp->name=$request->name;
        $bootcamp->startDate=$request->startDate;
        $bootcamp->endDate=$request->endDate;
        $bootcamp->description=$request->description;
        $bootcamp->school=$request->school;
        $bootcamp->promo=$request->promo;
        $bootcamp->save();

        return response()->json([
            'success'=>true
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id):JsonResponse
    {
        Bootcamp::find($id)->delete();
        return response()->json([
            'success'=>true
        ], 200);
    }
}
