

var ul = document.getElementById("message-li");

let send = ()=>{
    var message = document.getElementById("message");
    //  var li = document.createElement("li");
    //  var li_text = document.createTextNode(message.value);
    //  li.appendChild(li_text);
    

    //  ul.appendChild(li);


     
var key = firebase.database().ref("messages").push().key;
var messages = {
    value : message.value,
    key:key
}
      firebase.database().ref("messages").child(key).set(messages);
    

      // var li = document.createElement("li");
      // var li_text = document.createTextNode(message.value);
      // li.appendChild(li_text);
      // ul.appendChild(li);  
  
          message.value = "";    

    }


//getting values from other user
  firebase.database().ref("messages").on("child_added",function (data){
    
   
    
    var li = document.createElement("li");
    var li_text = document.createTextNode(data.val().value);

    
    li.appendChild(li_text);
    
    ul.appendChild(li);  

    
  }
  
)  


