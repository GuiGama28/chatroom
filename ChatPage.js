var firebaseConfig = {
      apiKey: "AIzaSyA1lP11mDP9-RyqRUWAW7j5FUZTlSQeTik",
  authDomain: "chatroom-768be.firebaseapp.com",
  databaseURL: "https://chatroom-768be-default-rtdb.firebaseio.com",
  projectId: "chatroom-768be",
  storageBucket: "chatroom-768be.appspot.com",
  messagingSenderId: "494194557921",
  appId: "1:494194557921:web:1f7c65f4be775da16308a0",
  measurementId: "G-Z1CVPPV624"
    };
      firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

      function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });

            document.getElementById("msg").value = "";
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
 {
       document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot)
      { childKey  = childSnapshot.key;
      childData = childSnapshot.val();
      if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageData['name'];
message = messageData['message'];
like = messageData['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='lido.png'>,/h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn bt' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();

function updatelike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updates_likes
      });

}
function sair() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
           window.location = "index.html";
  }
