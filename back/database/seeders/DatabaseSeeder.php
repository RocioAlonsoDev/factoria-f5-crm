<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Status;
use App\Models\Person;
use App\Models\Bootcamp;
use App\Models\Person_Bootcamp;
use Database\Factories\PersonFactory;
use Faker\Factory as FakerFactory;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $faker = FakerFactory::create(); // Crea una instancia de Faker

        // Crea los estados primero
        Status::factory()->count(4)->create();

        // Crea las bootcamps
        Bootcamp::factory()->count(5)->create();

        // Obtiene los IDs de los estados y las bootcamps
        $statusIds = Status::pluck('id')->toArray();
        $bootcampIds = Bootcamp::pluck('id')->toArray();

        // Crea las personas
        Person::factory()
            ->count(10)
            ->create([
                'id_status' => function () use ($faker, $statusIds) {
                    return $faker->randomElement($statusIds);
                },
                'id_bootcamp' => function () use ($faker, $bootcampIds) {
                    return $faker->randomElement($bootcampIds);
                },
            ]);
    }
}