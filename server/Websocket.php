<?php

require __DIR__ . '/vendor/autoload.php';

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use YourNamespace\MessageHandler;

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new MessageHandler()
        )
    ),
    8080
);

$server->run();
