<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Person;
use App\Models\Status;
use Database\Factories\PersonFactory;
use App\Models\Bootcamp;


class PersonSeeder extends Seeder
{
    public function run(): void
    {
    //     $faker = \Faker\Factory::create();

    //     $bootcampIds = Bootcamp::pluck('id')->toArray(); 
    //     $people = Person::factory()->count(10)->create();

    //     $statuses = Status::pluck('id')->toArray(); 

    //     $people->each(function ($person) use ($statuses, $faker, $bootcampIds) {
    //         $person->update([
    //             'id_status' => $faker->randomElement($statuses),
    //             'id_bootcamp' => $faker->randomElement($bootcampIds),
    //         ]);
    //     });
    // }
// }

        // Person::factory()->count(10)->create();


    DB::table('people')->insert([
        'name' => 'Maria',
        'surname' =>'García',
        'email' => 'mariagarcia@ejemplo.com',
        'image' => 'https://pbs.twimg.com/media/DfKT_QFU8AE4krM.jpg:large',
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
        'image' => 'https://i.pinimg.com/originals/ef/51/5f/ef515f644fb775ec98b893cbbfb25049.jpg',
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
        'image' => 'https://qph.cf2.quoracdn.net/main-qimg-d2de26e1ee550bf4d2035ce876e4fde7-lq',
        'phone' => '555 555 555',
        'address' => 'Paseo de la Luna, 789',
        'city' => 'Valencia', 
        'region' => 'Comunidad Valenciana', 
        'dataprotection' => 'sí',
        'birthdate' => '1978-06-25', 
        'gender' => 'fluido',
        'dni' => '45678912C',
        'id_status' => 3, 
        'id_bootcamp' => 2, 
    ]);

    DB::table('people')->insert([
        'name' => 'Carlos',
        'surname' =>'Lopez',
        'email' => 'carloslopez@ejemplo.com',
        'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1svaxqfsdvEjpkg7vZzyrJ5KtGHBamg1h4g&usqp=CAU',
        'phone' => '444 444 444',
        'address' => 'Plaza del Bosque, 234',
        'city' => 'Sevilla', 
        'region' => 'Andalucía', 
        'dataprotection' => 'sí',
        'birthdate' => '1978-06-25', 
        'gender' => 'no binario',
        'dni' => '78912345D',
        'id_status' => 4, 
        'id_bootcamp' => 3, 
    ]);
}

}

