<?php

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection(require 'config.php');

$capsule->setAsGlobal();
$capsule->bootEloquent();
