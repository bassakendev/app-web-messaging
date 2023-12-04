$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function() {
	$("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
  $("#profile").toggleClass("expanded");
	$("#contacts").toggleClass("expanded");
});

$("#status-options ul li").click(function() {
	$("#profile-img").removeClass();
	$("#status-online").removeClass("active");
	$("#status-away").removeClass("active");
	$("#status-busy").removeClass("active");
	$("#status-offline").removeClass("active");
	$(this).addClass("active");
	
	if($("#status-online").hasClass("active")) {
		$("#profile-img").addClass("online");
	} else if ($("#status-away").hasClass("active")) {
		$("#profile-img").addClass("away");
	} else if ($("#status-busy").hasClass("active")) {
		$("#profile-img").addClass("busy");
	} else if ($("#status-offline").hasClass("active")) {
		$("#profile-img").addClass("offline");
	} else {
		$("#profile-img").removeClass();
	};
	
	$("#status-options").removeClass("active");
});

function newMessage() {
	message = $(".message-input input").val();
	if($.trim(message) == '') {
		return false;
	}
	$('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + message);
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
};

$('.submit').click(function() {
  newMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    newMessage();
    return false;
  }
});

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


