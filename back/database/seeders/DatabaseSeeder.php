<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Status;
use App\Models\Person;
use App\Models\Bootcamp;
use App\Models\Person_Bootcamp;
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
    public function run()
    {
       
        DB::table('users')->insert([
            'name' => 'Admin',
            'surname' => 'Admin', 
            'email' => 'admin@gmail.com',
            'password' => bcrypt('123456Aa*'), 
            'id_role' => 1,
     ]);
        DB::table('users')->insert([
            'name' => 'Ana',
            'surname' => 'Alvarez', 
            'email' => 'ana@gmail.com',
            'password' => bcrypt('123456Aa*'), 
            'id_role' => 2,
     ]);
        DB::table('users')->insert([
            'name' => 'Cristina',
            'surname' => 'Fernández', 
            'email' => 'cristina@gmail.com',
            'password' => bcrypt('123456Aa*'), 
            'id_role' => 2,
     ]);
        DB::table('users')->insert([
            'name' => 'Manuela',
            'surname' => 'Grajales', 
            'email' => 'manuela@gmail.com',
            'password' => bcrypt('123456Aa*'), 
            'id_role' => 3,
     ]);
        DB::table('users')->insert([
            'name' => 'Maria',
            'surname' => 'Villaverde', 
            'email' => 'maria@gmail.com',
            'password' => bcrypt('123456Aa*'), 
            'id_role' => 3,
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