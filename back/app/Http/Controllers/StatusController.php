<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use App\Http\Requests\StatusRequest;
use Illuminate\Http\JsonResponse;

class StatusController extends Controller
{
   
    public function index():JsonResponse
    {
        $status = Status::all();
        return response()->json(['data'=>$status], 200);
    }

   
    public function store(StatusRequest $request):JsonResponse
    {
        $status = Status::create($request->all());
        return response()->json([
            'success'=>true,
            'data'=>$status], 201);
    }


    public function show($id):JsonResponse
    {
        $status = Status::find($id);
        return response ()->json($status, 200);
    }

    public function update(StatusRequest $request, $id):JsonResponse
    {
        $status = Status::find($id);
        $status->name=$request->name;
        $status->save();

        return response()->json([
            'success'=>true
        ], 200);
    }

    public function destroy($id):JsonResponse
    {
        Status::find($id)->delete();
        return response()->json(
            [
                'succes'=>true
            ], 200);
    }
}
