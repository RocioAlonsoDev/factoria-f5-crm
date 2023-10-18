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
        Schema::create('person__bootcamp', function (Blueprint $table) {
            $table->unsignedBigInteger('id_bootcamp');
            $table->foreign('id_bootcamp')->references('id')->on('bootcamps');
            $table->unsignedBigInteger('id_person');
            $table->foreign('id_person')->references('id')->on('people');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('person__bootcamp');
    }
};
