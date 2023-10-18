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

// <?php

// namespace Database\Seeders;

// use Illuminate\Database\Seeder;
// use App\Models\Bootcamp;
// use Database\Factories\BootcampFactory;

// class BootcampSeeder extends Seeder
// {
//     public function run(): void
//     {
//         $bootcamps = [
//             [
//                 'id' => 1,
//                 'name' => 'No definido',
//                 'startDate' => '2023-11-21',
//                 'endDate' => '2024-03-01',
//                 'description' => 'Sit vitae tempore odio.',
//                 'school' => 'No definido',
//                 'promo' => 'No definido',
//             ],
//             [
//                 'id' => 2,
//                 'name' => 'Gijón',
//                 'startDate' => '2023-11-21',
//                 'endDate' => '2024-03-01',
//                 'description' => 'Sit vitae tempore odio.',
//                 'school' => 'Asturias',
//                 'promo' => 'G2023',
//             ],
//             [
//                 'id' => 3,
//                 'name' => 'FemCoders Norte',
//                 'startDate' => '2023-11-21',
//                 'endDate' => '2024-03-01',
//                 'description' => 'Sit vitae tempore odio.',
//                 'school' => 'Galicia',
//                 'promo' => 'FCN2023',
//             ],
//             [
//                 'id' => 4,
//                 'name' => 'Rural Camp',
//                 'startDate' => '2023-11-21',
//                 'endDate' => '2024-03-01',
//                 'description' => 'Sit vitae tempore odio.',
//                 'school' => 'Madrid',
//                 'promo' => 'RC2023',
//             ],
//             [
//                 'id' => 5,
//                 'name' => 'Bootcamp IA Madrid',
//                 'startDate' => '2023-11-21',
//                 'endDate' => '2024-03-01',
//                 'description' => 'Sit vitae tempore odio.',
//                 'school' => 'Madrid',
//                 'promo' => 'IAM2023',
//             ],
//         ];

//         foreach ($bootcamps as $bootcampData) {
//             Bootcamp::create($bootcampData);
//         }
//     }
// }