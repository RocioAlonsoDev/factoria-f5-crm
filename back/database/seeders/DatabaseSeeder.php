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
        //$faker = FakerFactory::create(); // Crea una instancia de Faker

        // Crea los estados primero
        //Status::factory()->count(4)->create();

        // Crea las bootcamps
        //Bootcamp::factory()->count(5)->create();

        // // Obtiene los IDs de los estados y las bootcamps
        // $statusIds = Status::pluck('id')->toArray();
        // $bootcampIds = Bootcamp::pluck('id')->toArray();

        // // Crea las personas
        // Person::factory()
        //     ->count(10)
        //     ->create([
        //         'id_status' => function () use ($faker, $statusIds) {
        //             return $faker->randomElement($statusIds);
        //         },
        //         'id_bootcamp' => function () use ($faker, $bootcampIds) {
        //             return $faker->randomElement($bootcampIds);
        //         },
        //     ]);

        DB::table('users')->insert([
            'name' => 'Admin',
            'surname' => 'Admin', 
            'email' => 'admin@gmail.com',
            'image' => 'https://i.pinimg.com/564x/ca/40/cd/ca40cdf8bde9af7fe54d85c0dec73e27.jpg', 
            'password' => bcrypt('123456Aa*'), 
            'id_role' => 1,
     ]);
        DB::table('users')->insert([
            'name' => 'Ana',
            'surname' => 'Alvarez', 
            'email' => 'ana@gmail.com',
            'password' => '123456Aa*', 
            'id_role' => 1,
     ]);
        DB::table('users')->insert([
            'name' => 'Cristina',
            'surname' => 'Fernández', 
            'email' => 'cristina@gmail.com',
            'image' => 'https://img.freepik.com/fotos-premium/there-is-a-cat-that-is-sitting-on-a-rock-in-a-garden-generative-ai_900396-35758.jpg',
            'password' => bcrypt('123456Aa*'), 
            'id_role' => 2,
     ]);
        DB::table('users')->insert([
            'name' => 'Manuela',
            'surname' => 'Grajales', 
            'email' => 'manuela@gmail.com',
            'image' => 'https://img.freepik.com/fotos-premium/gato-traje-azul-dragon_662214-41149.jpg',
            'password' => bcrypt('123456Aa*'), 
            'id_role' => 3,
     ]);
        DB::table('users')->insert([
            'name' => 'Maria',
            'surname' => 'Villaverde', 
            'email' => 'maria@gmail.com',
            'image' => 'https://img.freepik.com/fotos-premium/ilustracion-gata-como-shaman-levantandose-humo_530527-29.jpg',
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