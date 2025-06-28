<?php

use Illuminate\Support\Facades\Route;

Route::get('/freelancers', function () {
    return ['freelancer 1', 'freelancer 2', 'freelancer 3'];
});
