<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Person_Bootcamp;


class Person_BootcampFactory extends Factory
{
  
    public function definition(): array
    {
        return [            
            'id_bootcamp' => $this->faker->numberBetween(1, 5), 
            'id_person' => $this->faker->numberBetween(1, 10), 
        ];
    }
}
