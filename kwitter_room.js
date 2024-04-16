
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyD-yIlSAFumdkj4wz2GhyzNq7raXvt6TNY",
  authDomain: "letschatsocial2023.firebaseapp.com",
  databaseURL: "https://letschatsocial2023-default-rtdb.firebaseio.com",
  projectId: "letschatsocial2023",
  storageBucket: "letschatsocial2023.appspot.com",
  messagingSenderId: "409322496611",
  appId: "1:409322496611:web:1529fc29a2e0d10dbe0e56",
  measurementId: "G-QTSTPH7ND1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome "+ user_name+"";
function addRoom(){
  room_name = document.getElementById("room_name").value

  firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name- "+ Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row

  //End code
  });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name)
  window.location = "kwitter_page.html"
}
