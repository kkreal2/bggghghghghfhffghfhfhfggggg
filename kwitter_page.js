//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCfN89_WnGG55FPeVK_Yz-6d4R-ZsC2YBk",
      authDomain: "kwitter-f424e.firebaseapp.com",
      databaseURL: "https://kwitter-f424e-default-rtdb.firebaseio.com",
      projectId: "kwitter-f424e",
      storageBucket: "kwitter-f424e.appspot.com",
      messagingSenderId: "521798994489",
      appId: "1:521798994489:web:f8e032fbf306920debdbe8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}