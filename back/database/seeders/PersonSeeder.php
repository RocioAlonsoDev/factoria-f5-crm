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
                'name' => 'Maria',
                'surname' =>'García',
                'email' => 'mariagarcia@ejemplo.com',
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

         DB::table('people')->insert([
            'name' => 'Juan',
            'surname' =>'Rodríguez',
            'email' => 'juanrodriguez@ejemplo.com',
            'phone' => '666 666 666',
            'address' => 'Avenida del Sol, 456',
            'city' => 'Barcelona', 
            'region' => 'Cataluña', 
            'dataprotection' => 'sí',
            'birthdate' => '1985-12-08', 
            'gender' => 'hombre',
            'dni' => '98765432B',
            'id_status' => 2, 
            'id_bootcamp' => 1, 
     ]);

     DB::table('people')->insert([
        'name' => 'Ana',
        'surname' =>'Martínez',
        'email' => 'anamartinez@ejemplo.com',
        'phone' => '555 555 555',
        'address' => 'Paseo de la Luna, 789',
        'city' => 'Valencia', 
        'region' => 'Comunidad Valenciana', 
        'dataprotection' => 'sí',
        'birthdate' => '1978-06-25', 
        'gender' => 'fluido',
        'dni' => '45678912C',
        'id_status' => 3, 
        'id_bootcamp' => 1, 
 ]);

        DB::table('people')->insert([
            'name' => 'Carlos',
            'surname' =>'Lopez',
            'email' => 'carloslopez@ejemplo.com',
            'phone' => '444 444 444',
            'address' => 'Plaza del Bosque, 234',
            'city' => 'Sevilla', 
            'region' => 'Andalucía', 
            'dataprotection' => 'sí',
            'birthdate' => '1978-06-25', 
            'gender' => 'no binario',
            'dni' => '78912345D',
            'id_status' => 4, 
            'id_bootcamp' => 1, 
        ]);

    }
}
