<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Status;
use Database\Factories\StatusFactory;


class StatusSeeder extends Seeder
{
    
    public function run(): void
    {
        $statuses = [
            ['id' => 1, 'name' => 'Postulante'],
            ['id' => 2, 'name' => 'Coder'],
            ['id' => 3, 'name' => 'ExCoder'],
            ['id' => 4, 'name' => 'Lista de Espera'],
        ];

        foreach ($statuses as $statusData) {
            Status::create($statusData);
        }
    }
}
