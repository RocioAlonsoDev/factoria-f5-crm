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
                'name' => 'No definido',
                'startDate' => '2023-11-21',
                'endDate' => '2024-03-01',
                'description' => 'Sit vitae tempore odio.',
                'school' => 'No definido',
                'promo' => 'No definido',
                'created_at' => '2023-10-18 10:58:58'
     ]);

     DB::table('bootcamps')->insert([
                'name' => 'Digital Academy',
                'startDate' => '2023-11-21',
                'endDate' => '2024-03-01',
                'description' => 'Quam laborum aut occaecati vel.',
                'school' => 'Asturias',
                'promo' => 'G2023',
                'created_at' => '2023-10-18 10:58:58'
     ]);

     DB::table('bootcamps')->insert([
                'name' => 'FemCoders Norte',
                'startDate' => '2023-11-21',
                'endDate' => '2024-03-01',
                'description' => 'Sed omnis dolorem esse aut neque.',
                'school' => 'Cataluña',
                'promo' => 'FCN2023',
                'created_at' => '2023-10-18 10:58:58'
     ]);

    DB::table('bootcamps')->insert([
                'name' => 'Rural Camp',
                'startDate' => '2023-11-21',
                'endDate' => '2024-03-01',
                'description' => 'Rerum sapiente quam quia ut quo.',
                'school' => 'Asturias',
                'promo' => 'RC2023',
                'created_at' => '2023-10-18 10:58:58'
     ]);

     DB::table('bootcamps')->insert([
                'name' => 'Bootcamp IA Madrid',
                'startDate' => '2023-11-21',
                'endDate' => '2024-03-01',
                'description' => 'Quia eligendi et aut aperiam occaecati.',
                'school' => 'Madrid',
                'promo' => 'IAM2023',
                'created_at' => '2023-10-18 10:58:58'
     ]);

    }
}