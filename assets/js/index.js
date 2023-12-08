function newMessage() {
    let messageInput = document.querySelector(".message-input textarea");
    let message = messageInput.value.trim();

    if (message === '') {
        return false;
    }

    let messagesContainer = document.querySelector('.messages');

    let newMessageDiv = document.createElement('div');
    newMessageDiv.className = 'sent';

    let img = document.createElement('img');
    img.src = 'http://emilcarlsson.se/assets/mikeross.png';
    img.alt = '';

    let paragraph = document.createElement('p');
    paragraph.textContent = message;

    newMessageDiv.appendChild(img);
    newMessageDiv.appendChild(paragraph);

    messagesContainer.appendChild(newMessageDiv);

    messageInput.value = '';

    let activeContactPreview = document.querySelector('.contact.active .preview');
    activeContactPreview.innerHTML = '<span>You: </span>' + message;

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

const submit = document.querySelector('.submit')

submit.addEventListener('click', () => {
    newMessage();
	// alert('ok')
});

// const draggableElement = document.getElementById('frame');

// draggableElement.addEventListener('dragstart', (event) => {
//     // Données à transférer pendant le déplacement
//     event.dataTransfer.setData('text/plain', 'Drag me!');
// });

// draggableElement.addEventListener('dragend', () => {
//     // Actions à effectuer à la fin du déplacement
//     console.log('Element dropped!');
// });

const draggableElement = document.getElementById('frame');

let offsetX, offsetY;

draggableElement.addEventListener('mousedown', (event) => {
    // Calcul des décalages par rapport à la position de la souris
    offsetX = event.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = event.clientY - draggableElement.getBoundingClientRect().top;

    // Activation du déplacement
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
});

function handleMouseMove(event) {
    // Déplacement de l'élément en fonction de la position de la souris
    draggableElement.style.left = event.clientX - offsetX + 'px';
    draggableElement.style.top = event.clientY - offsetY + 'px';
}

function handleMouseUp() {
    // Désactivation du déplacement
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}

// window.addEventListener('keydown', function(e) {
//     if (e.which === 13) {
//         newMessage();
//         e.preventDefault();
//     }
// });


// script.js

// const socket = new WebSocket('ws://localhost:8080');

// // Écoutez les messages
// socket.addEventListener('message', (event) => {
//     const message = JSON.parse(event.data);
    
//     // Mettez à jour l'interface utilisateur avec le nouveau message
//     updateUI(message);
// });

// // Fonction pour mettre à jour l'interface utilisateur
// function updateUI(message) {
//     // Logique pour mettre à jour l'interface utilisateur avec le nouveau message
// }

// // Fonction pour envoyer un message
// function sendMessage(senderId, receiverId, content) {
//     const message = {
//         sender_id: senderId,
//         receiver_id: receiverId,
//         content: content,
//     };

//     // Mettez à jour l'interface utilisateur immédiatement
//     updateUI(message);

//     // Envoyez le message au serveur WebSocket
//     socket.send(JSON.stringify(message));
// }


// // script.js

// // ...

// // Fonction pour mettre à jour l'interface utilisateur
// function updateUI(message) {
//     // Supposons que vous ayez des éléments HTML pour représenter les conversations
//     const conversationContainer = document.getElementById('conversation-container');

//     // Créez un élément pour le nouveau message
//     const messageElement = document.createElement('div');
//     messageElement.className = 'message';
//     messageElement.textContent = `${message.sender_id}: ${message.content}`;

//     // Ajoutez le message à la conversation
//     conversationContainer.appendChild(messageElement);

//     // Faites défiler vers le bas pour afficher le nouveau message
//     conversationContainer.scrollTop = conversationContainer.scrollHeight;
// }


