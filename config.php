<?php
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

return [
    'database' => [
        'driver'   => 'mysql',
        'host'     => $_ENV['DB_HOST'],
        'database' => $_ENV['DB_NAME'],
        'username' => $_ENV['DB_USER'],
        'password' => $_ENV['DB_PASSWORD'],
        'charset'  => $_ENV['DB_CHARSET'],
        'collation' => $_ENV['DB_COLLATION'],
        'prefix'   => '',
    ]
];
