<?php

namespace YourNamespace;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use PDO; // Assurez-vous que PDO est activé dans votre installation PHP

class MessageHandler implements MessageComponentInterface
{
    private $pdo;

    public function __construct()
    {
        $this->pdo = new PDO('mysql:host=localhost;dbname=votre_base_de_donnees', 'utilisateur', 'mot_de_passe');
    }

    public function onOpen(ConnectionInterface $conn)
    {
        // Logique à exécuter lorsqu'une connexion WebSocket est ouverte
    }

    public function onMessage(ConnectionInterface $from, $msg)
    {
        // Logique à exécuter lorsqu'un message est reçu
        $messageData = json_decode($msg, true);

        // Enregistrez le message dans la base de données
        $this->saveMessage($messageData);

        // Diffusez le message à tous les utilisateurs connectés
        $this->broadcastMessage($msg);
    }

    public function onClose(ConnectionInterface $conn)
    {
        // Logique à exécuter lorsqu'une connexion WebSocket est fermée
    }

    public function onError(ConnectionInterface $conn, \Exception $e)
    {
        // Logique à exécuter en cas d'erreur
    }

    private function saveMessage($messageData)
    {
        $query = 'INSERT INTO messages (sender_id, receiver_id, content) VALUES (:sender_id, :receiver_id, :content)';
        $stmt = $this->pdo->prepare($query);
        $stmt->bindParam(':sender_id', $messageData['sender_id']);
        $stmt->bindParam(':receiver_id', $messageData['receiver_id']);
        $stmt->bindParam(':content', $messageData['content']);
        $stmt->execute();
    }

    private function broadcastMessage($msg)
    {
        // Logique pour diffuser le message à tous les utilisateurs connectés
    }
}
