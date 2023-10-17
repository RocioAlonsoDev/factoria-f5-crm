<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Person_Bootcamp;
use Database\Factories\PersonBootcampFactory;

class PersonBootcampSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Person_Bootcamp::factory()->count(10)->create();
    }
}
