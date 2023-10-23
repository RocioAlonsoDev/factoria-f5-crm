<?php

namespace App\Http\Controllers;

use App\Models\Bootcamp_Requirement;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\BootcampRequirementRequest;


class BootcampRequirementController extends Controller
{

    public function index():JsonResponse
    {
        $bootcampsRequirements = Bootcamp_Requirement::all();
        return response()->json(['data'=>$bootcampsRequirements], 200);
    }

    public function store(BootcampRequirementRequest $request):JsonResponse
    {
        $bootcampsRequirements = Bootcamp_Requirement::create($request->all());

        return response()->json([
            'success'=>true,
            'data'=>$bootcampsRequirements], 201);
    }

    public function show($id):JsonResponse
    {
        $bootcampsRequirements = Bootcamp_Requirement::find($id);
        return response ()->json($bootcampsRequirements, 200);
    }

    public function destroy($id):JsonResponse
    {
        Bootcamp_Requirement::find($id)->delete();
        return response()->json([
            'success'=>true
        ], 200);
    }
}
