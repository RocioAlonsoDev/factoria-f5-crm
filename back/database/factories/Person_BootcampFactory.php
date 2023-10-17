<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Person_Bootcamp;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PersonBootcamp>
 */
class Person_BootcampFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_bootcamp' => $this->faker->randomNumber(),
            'id_user' => $this->faker->randomNumber(),
        ];
    }
}
