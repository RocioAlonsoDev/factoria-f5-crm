<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Person_BootcampSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('person__bootcamp')->insert([
            'id_bootcamp' => 1,
            'id_person' => 1,
     ]);
        DB::table('person__bootcamp')->insert([
            'id_bootcamp' => 1,
            'id_person' => 2,
     ]);
        DB::table('person__bootcamp')->insert([
            'id_bootcamp' => 2,
            'id_person' => 3,
     ]);
        DB::table('person__bootcamp')->insert([
            'id_bootcamp' => 3,
            'id_person' => 4,
     ]);
    }

}
