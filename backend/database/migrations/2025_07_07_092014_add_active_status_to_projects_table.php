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
        Schema::table('projects', function (Blueprint $table) {
            $table->enum('status', ['open', 'in_progress', 'active', 'completed'])->default('open')->change();
        });
    }

    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->enum('status', ['open', 'in_progress', 'completed'])->default('open')->change();
        });
    }

    /**
     * Reverse the migrations.
     */

};
