<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PersonRequest extends FormRequest
{
    
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>'required|string',
            'surname'=>'required|string',
            'email'=>'required|string',
            'image'=>'',
            'phone'=>'required|string',
            'address'=>'required|string',
            'city'=>'required|string',
            'region'=>'required|string',
            'birthdate'=>'required',
            'dataprotection'=>'required',
            'gender'=>'required',
            'dni'=>'required|string',
            'id_status'=>'required|numeric',
            'id_bootcamp'=>'required|numeric',
            
        ];
    }
}
