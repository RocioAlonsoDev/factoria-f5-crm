<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Person;

class PersonFactory extends Factory
{
    protected $model = Person::class;

    public function definition()
    {
        return [
            'name' => $this->faker->firstName,
            'surname' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'image' => $this->faker->imageUrl(),
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'city' => $this->faker->city,
            'region' => $this->faker->randomElement(["Andalucía", "Aragón", "Asturias", "Baleares", "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Comunidad de Madrid", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Murcia", "Navarra", "País Vasco", "Ceuta" , "Melilla"]),
            'dataprotection' => $this->faker->randomElement(['sí', 'no']),
            'birthdate' => $this->faker->date,
            'gender' => $this->faker->randomElement(['mujer', 'hombre', 'no binario', 'fluido', 'otros']),
            'dni' => $this->faker->unique()->numerify('#########'), // Esto generará un DNI de 9 dígitos
            'id_status' => $this->faker->randomElement([1, 2, 3]), 
            'id_bootcamp' => $this->faker->randomElement([1, 2, 3]), 
        ];
    }
}