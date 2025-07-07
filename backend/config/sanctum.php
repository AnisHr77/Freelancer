<?php

use Laravel\Sanctum\Sanctum;

return [

    // config/sanctum.php
    'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost')),
    'domain' => env('SESSION_DOMAIN', null),
    'driver' => env('SESSION_DRIVER', 'file'),



    'guard' => ['web'],

    'expiration' => null,

    'middleware' => [
        'authenticate_session' => Laravel\Sanctum\Http\Middleware\AuthenticateSession::class,
        'encrypt_cookies' => Illuminate\Cookie\Middleware\EncryptCookies::class,
        'validate_csrf_token' => Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class,
    ],

];
