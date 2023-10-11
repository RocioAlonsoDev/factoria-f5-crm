<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BootcampSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('bootcamps')->insert([
            'name' => 'FEMCoders Norte',
            'startDate' => '2023-04-19',
            'endDate' => '2023-10-25',
            'description' => 'xxxxxxxxxxxxxxxxxxx', 
            'school' => 'Asturias',
            'promo' => '2023'
     ]);

    }
}
