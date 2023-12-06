var firebaseConfig = {
  apiKey: "AIzaSyA1lP11mDP9-RyqRUWAW7j5FUZTlSQeTik",
  authDomain: "chatroom-768be.firebaseapp.com",
  databaseURL: "https://chatroom-768be-default-rtdb.firebaseio.com",
  projectId: "chatroom-768be",
  storageBucket: "chatroom-768be.appspot.com",
  messagingSenderId: "494194557921",
  appId: "1:494194557921:web:1f7c65f4be775da16308a0",
  measurementId: "G-Z1CVPPV624"
  }
    firebase.initializeApp(firebaseConfig)
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "ChatPage.html";
    }
    function getData() { firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childkey = childSnapshot.key;
            Room_names = childkey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "ChatPage.html";
}

function sair() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
         window.location = "index.html";
}