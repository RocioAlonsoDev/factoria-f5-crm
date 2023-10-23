<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname');
            $table->string('email');
            $table->longText('image')->nullable();
            $table->string('phone');
            $table->string('address');
            $table->string('city');
            $table->enum('region', ["Andalucía", "Aragón", "Asturias", "Baleares", "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Comunidad de Madrid", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Murcia", "Navarra", "País Vasco", "Ceuta" , "Melilla"]);
            $table->enum('dataprotection', ['sí', 'no']);
            $table->date('birthdate');
            $table->enum('gender', ['Mujer', 'Hombre', 'No binario', 'Fluido', 'Otro']);
            $table->string('dni');
            $table->unsignedBigInteger('id_status');
            $table->foreign('id_status')->references('id')->on('statuses')->default(1);
            $table->unsignedBigInteger('id_bootcamp')->default(1);
            $table->foreign('id_bootcamp')->references('id')->on('bootcamps');

            //Second Form

            $table->string('motivation')->default('No ha contestado');
            $table->enum('englishLevel',["No hablo inglés", "Básico", "Medio", "Alto", "Bilingüe", "Nativo"])->default('No hablo inglés');
            $table->string('degree')->default ('No ha contestado');
            $table->string('anotherCourse')->default('No ha contestado');
            $table->string('howArrived')->default('No ha contestado');
            $table->enum('employmentStatus',["Desempleado/a", "Trabajando por cuenta propia", "Trabajando por cuenta ajena", "En un descanso laboral", "Estudiando"])->default('Estudiando');
            $table->string('exerciseUrl')->default('No ha contestado');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};
