<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Bootcamp_UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('bootcamp__users')->insert([
            'id_bootcamp' => 1,
            'id_user' => 1,
     ]);
        DB::table('bootcamp__users')->insert([
            'id_bootcamp' => 2,
            'id_user' => 2,
     ]);
        DB::table('bootcamp__users')->insert([
            'id_bootcamp' => 3,
            'id_user' => 2,
     ]);
        DB::table('bootcamp__users')->insert([
            'id_bootcamp' => 4,
            'id_user' => 3,
     ]);
        DB::table('bootcamp__users')->insert([
            'id_bootcamp' => 2,
            'id_user' => 4,
     ]);
    }
}
