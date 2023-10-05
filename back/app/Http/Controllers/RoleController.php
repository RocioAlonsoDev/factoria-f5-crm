<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Models\Role;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        $role = Role::all();
        return response()->json(
            ['data'=>$role], 200);
    }

    public function store(RoleRequest $request):JsonResponse
    {
        $role = Role::create($request->all());
        return response()->json([
            'data'=>$role,
            'success'=>true
        ], 201);
    }

    public function show(string $id)
    {
        $role = Role::find($id);
        return response()->json($role, 200);
    }


    public function update(Role $request, string $id)
    {
        $role = Role::find($id);
        $role->name = $request->name;
        $role->save();

        return response()->json([
            'data'=>$role,
            'success'=>true
        ], 200);
    }

    public function destroy(string $id)
    {
        Role::find($id)->delete();

        return response()->json([
            'success'=>true
        ], 200);

    }
}
