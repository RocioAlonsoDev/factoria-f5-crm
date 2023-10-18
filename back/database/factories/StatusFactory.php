<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Status;


class StatusFactory extends Factory
{
    protected $model = Status::class;

    public function definition()
    {
        return [
            'name' => $this->faker->unique()->randomElement([
                'Postulante',
                'Coder',
                'ExCoder',
                'Lista de Espera',
            ]),
        ];
    }
}
