<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\BootcampSeeder;
use Database\Seeders\StatusSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\PersonSeeder;
use Database\Seeders\Person_BootcampSeeder;
use Database\Seeders\Bootcamp_UserSeeder;
use Database\Seeders\Bootcamp_RequirementSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('users')->insert([
            'name' => 'Ana',
            'surname' => 'Alvarez', 
            'email' => 'ana@gmail.com',
            'password' => '123456', 
            'id_role' => 1,
     ]);
     $this->call(StatusSeeder::class);
     $this->call(RoleSeeder::class);
     $this->call(BootcampSeeder::class);
     $this->call(PersonSeeder::class);
     $this->call(Person_BootcampSeeder::class);
     $this->call(Bootcamp_UserSeeder::class);
     $this->call(Bootcamp_RequirementSeeder::class);
    }
}
