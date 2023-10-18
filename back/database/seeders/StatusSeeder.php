<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Status;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

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
