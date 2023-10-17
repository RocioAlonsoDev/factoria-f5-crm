<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Bootcamp;

class BootcampFactory extends Factory
{
    protected $model = Bootcamp::class;

    public function definition()
    {
        $startDate = $this->faker->dateTimeBetween('+1 week', '+2 months');
        $endDate = $this->faker->dateTimeBetween($startDate, strtotime('+6 months'));

        return [
            'name' => $this->faker->unique()->randomElement([
                'Digital Academy',
                'Gijón',
                'FemCoders Norte',
                'Rural Camp',
                'Bootcamp IA Madrid',
            ]),
            'startDate' => $startDate,
            'endDate' => $endDate,
            'description' => $this->faker->sentence,
            'school' => $this->faker->randomElement(['Cataluña', 'Madrid', 'Asturias']),
            'promo' => $this->faker->word,
        ];
    }
}
