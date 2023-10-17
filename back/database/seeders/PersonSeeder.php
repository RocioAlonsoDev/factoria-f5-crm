<?php

namespace Database\Seeders;

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
        $faker = \Faker\Factory::create();

        $bootcampIds = Bootcamp::pluck('id')->toArray(); 
        $people = Person::factory()->count(10)->create();

        $statuses = Status::pluck('id')->toArray(); 

        $people->each(function ($person) use ($statuses, $faker, $bootcampIds) {
            $person->update([
                'id_status' => $faker->randomElement($statuses),
                'id_bootcamp' => $faker->randomElement($bootcampIds),
            ]);
        });
    }
}

