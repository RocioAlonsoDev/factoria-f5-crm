<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::table('people')->insert([
                'name' => 'Hola',
                'surname' =>'Mundo',
                'email' => 'hola@mundo.com',
                'phone' => '666 666 666',
                'address' => 'c/ Algun lugar de Asturias',
                'city' => 'Oviedo', 
                'region' => 'Asturias', 
                'dataprotection' => 'sí',
                'birthdate' => '1980-08-23', 
                'gender' => 'mujer',
                'dni' => '888888888V',
                'id_status' => 1, 
                'id_bootcamp' => 1, 
         ]);

    }
}
