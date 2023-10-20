<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Person;
use App\Models\Status;
use Database\Factories\PersonFactory;
use App\Models\Bootcamp;


class PersonSeeder extends Seeder
{
    public function run(): void
    {

    DB::table('people')->insert([
        'name' => 'Maria',
        'surname' =>'García',
        'email' => 'mariagarcia@ejemplo.com',
        'image' => 'https://pbs.twimg.com/media/DfKT_QFU8AE4krM.jpg:large',
        'phone' => '666 666 666',
        'address' => 'c/ Algun lugar de Asturias',
        'city' => 'Oviedo', 
        'region' => 'Asturias', 
        'dataprotection' => 'sí',
        'birthdate' => '1980-08-23', 
        'gender' => 'mujer',
        'dni' => '888888888V',
        'id_status' => 1, 
        'id_bootcamp' => 1, 
     ]);

     DB::table('people')->insert([
        'name' => 'Juan',
        'surname' =>'Rodríguez',
        'email' => 'juanrodriguez@ejemplo.com',
        'image' => 'https://i.pinimg.com/originals/ef/51/5f/ef515f644fb775ec98b893cbbfb25049.jpg',
        'phone' => '666 666 666',
        'address' => 'Avenida del Sol, 456',
        'city' => 'Barcelona', 
        'region' => 'Cataluña', 
        'dataprotection' => 'sí',
        'birthdate' => '1985-12-08', 
        'gender' => 'hombre',
        'dni' => '98765432B',
        'id_status' => 2, 
        'id_bootcamp' => 1, 
        'created_at' => '2023-06-19'
 ]);

    DB::table('people')->insert([
        'name' => 'Ana',
        'surname' =>'Martínez',
        'email' => 'anamartinez@ejemplo.com',
        'image' => 'https://qph.cf2.quoracdn.net/main-qimg-d2de26e1ee550bf4d2035ce876e4fde7-lq',
        'phone' => '555 555 555',
        'address' => 'Paseo de la Luna, 789',
        'city' => 'Valencia', 
        'region' => 'Comunidad Valenciana', 
        'dataprotection' => 'sí',
        'birthdate' => '1978-06-25', 
        'gender' => 'fluido',
        'dni' => '45678912C',
        'id_status' => 3, 
        'id_bootcamp' => 2, 
        'created_at' => '2023-06-19'
    ]);

    DB::table('people')->insert([
        'name' => 'Carlos',
        'surname' =>'Lopez',
        'email' => 'carloslopez@ejemplo.com',
        'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1svaxqfsdvEjpkg7vZzyrJ5KtGHBamg1h4g&usqp=CAU',
        'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1svaxqfsdvEjpkg7vZzyrJ5KtGHBamg1h4g&usqp=CAU',
        'phone' => '444 444 444',
        'address' => 'Plaza del Bosque, 234',
        'city' => 'Sevilla', 
        'region' => 'Andalucía', 
        'dataprotection' => 'sí',
        'birthdate' => '1978-06-25', 
        'gender' => 'no binario',
        'dni' => '78912345D',
        'id_status' => 4, 
        'id_bootcamp' => 3,
        'created_at' => '2023-06-19' 
    ]);

    DB::table('people')->insert([
        'name' => 'Angélica',
        'surname' =>'Castro',
        'email' => 'angélicacastro@ejemplo.com',
        'image' => 'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg',
        'phone' => '555 555 555',
        'address' => 'Plaza del Castaño, 234',
        'city' => 'Pontevedra', 
        'region' => 'Galicia', 
        'dataprotection' => 'no',
        'birthdate' => '1980-05-15', 
        'gender' => 'mujer',
        'dni' => '34912345J',
        'id_status' => 4, 
        'id_bootcamp' => 5, 
        'created_at' => '2022-06-19'
    ]);

    DB::table('people')->insert([
        'name' => 'Manuel',
        'surname' =>'Menéndez',
        'email' => 'manuelmenendez@ejemplo.com',
        'image' => 'https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467_1280.jpg',
        'phone' => '666 666 666',
        'address' => 'Plaza del Abedul, 567',
        'city' => 'Granollers', 
        'region' => 'Cataluña', 
        'dataprotection' => 'sí',
        'birthdate' => '1987-09-05', 
        'gender' => 'hombre',
        'dni' => '98912345L',
        'id_status' => 4, 
        'id_bootcamp' => 4, 
        'created_at' => '2021-09-09'
    ]);

    DB::table('people')->insert([
        'name' => 'Azucena',
        'surname' =>'Flores',
        'email' => 'azucenaflores@ejemplo.com',
        'image' => 'https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_1280.jpg',
        'phone' => '777 777 777',
        'address' => 'Plaza del Roble, 33',
        'city' => 'Bilbao', 
        'region' => 'País Vasco', 
        'dataprotection' => 'no',
        'birthdate' => '2006-11-07', 
        'gender' => 'mujer',
        'dni' => '76512345P',
        'id_status' => 4, 
        'id_bootcamp' => 3, 
        'created_at' => '2023-02-10'
    ]);

    DB::table('people')->insert([
        'name' => 'Pedro',
        'surname' =>'Picazo',
        'email' => 'pedropicazo@ejemplo.com',
        'image' => 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
        'phone' => '777 777 777',
        'address' => 'Calle Soria, 5',
        'city' => 'Langreo', 
        'region' => 'Asturias', 
        'dataprotection' => 'sí',
        'birthdate' => '1991-02-23', 
        'gender' => 'hombre',
        'dni' => '12312345L',
        'id_status' => 4, 
        'id_bootcamp' => 2, 
        'created_at' => '2023-08-08'
    ]);

    DB::table('people')->insert([
        'name' => 'Lucía',
        'surname' =>'Jiménez',
        'email' => 'luciajimenez@ejemplo.com',
        'image' => 'https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg',
        'phone' => '888 888 888 888',
        'address' => 'Calle Solsticio, 19',
        'city' => 'Zaragoza', 
        'region' => 'Aragón', 
        'dataprotection' => 'no',
        'birthdate' => '1990-03-13', 
        'gender' => 'fluido',
        'dni' => '56412345K',
        'id_status' => 4, 
        'id_bootcamp' => 3, 
        'created_at' => '2022-01-19'
    ]);

    DB::table('people')->insert([
        'name' => 'Roberto',
        'surname' =>'García',
        'email' => 'robertogarcia@ejemplo.com',
        'image' => 'https://cdn.pixabay.com/photo/2016/11/19/14/28/bed-1839564_1280.jpg',
        'phone' => '999 999 999',
        'address' => 'Calle Estrella, 12',
        'city' => 'Madrid', 
        'region' => 'Comunidad de Madrid', 
        'dataprotection' => 'sí',
        'birthdate' => '2010-12-07', 
        'gender' => 'no binario',
        'dni' => '90872345M',
        'id_status' => 4, 
        'id_bootcamp' => 4, 
        'created_at' => '2023-09-11'
    ]);
}
}



