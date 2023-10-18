<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Person_Bootcamp;
use Database\Factories\Person_BootcampFactory;

class PersonBootcampSeeder extends Seeder
{
    
    public function run(): void
    {
        $factory = new Person_BootcampFactory();

        for ($i = 1; $i <= 10; $i++) {
            Person_Bootcamp::create([
                'id_bootcamp' => $this->faker->numberBetween(1, 5),
                'id_person' => $this->faker->numberBetween(1, 10),
            ]);
        }
    }
}


