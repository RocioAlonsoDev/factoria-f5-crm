<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BootcampRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
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
            'startDate' =>'required|date', 
            'endDate' =>'required|date',
            'description'=>'required|string',
            'school'=> 'required',
            'promo'=>'required|string', 
        ];
    }
}
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BootcampRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
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
            'startDate' =>'required|date', 
            'endDate' =>'required|date',
            'description'=>'required|string',
            'school'=>'required',
            'promo'=>'required|string', 
        ];
    }
}
