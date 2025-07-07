<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        // Exemple pour MySQL : ajout de 'admin' à l'enum
        DB::statement("ALTER TABLE users MODIFY role ENUM('admin','freelancer','client') NOT NULL DEFAULT 'client'");
    }

    public function down()
    {
        // Revenir à l'ancien enum sans 'admin'
        DB::statement("ALTER TABLE users MODIFY role ENUM('freelancer','client') NOT NULL DEFAULT 'client'");
    }

};
