let user_name_room = "" ;

function change()
{
    document.getElementById("heading").style.color = "white" ;
    document.getElementById("heading").style.fontFamily = "monospace" ;

}
function normal()
{
    document.getElementById("heading").style.color = "yellow" ;
    document.getElementById("heading").style.fontFamily = "impact" ;
}
function logout()
{
    localStorage.removeItem("user_name") ;
    window.location = "index.html" ;
}
var firebaseConfig = {
    apiKey: "AIzaSyBFUEaJqw9ooP_EnM19flNjExtcs_CPOOo",
    authDomain: "anjali-menon-project-93.firebaseapp.com",
    databaseURL: "https://anjali-menon-project-93-default-rtdb.firebaseio.com",
    projectId: "anjali-menon-project-93",
    storageBucket: "anjali-menon-project-93.appspot.com",
    messagingSenderId: "96744447122",
    appId: "1:96744447122:web:e67c16b1b8e808330a9a4b",
    measurementId: "G-TH5DXRH60D"
  };
  firebase.initializeApp(firebaseConfig) ;

function addRoom() {
    user_name_room = localStorage.getItem("User name") ; 
    room_name = document.getElementById("room_name_input").value;
    firebase.database().ref(user_name_room).child(room_name).update({
        purpose: "add room" 
    }) ;

    localStorage.setItem("Room name" , room_name) ;
}

