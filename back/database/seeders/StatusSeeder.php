<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Status;
use Database\Factories\StatusFactory;


class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Status::factory()->count(10)->create();


        DB::table('statuses')->insert([
            'name' => 'Aspirante',
     ]);

        DB::table('statuses')->insert([
        'name' => 'Convocada/o',
    ]);

        DB::table('statuses')->insert([
        'name' => 'Coder',
    ]);

        DB::table('statuses')->insert([
        'name' => 'Descartada/o',
    ]);

    }
}
