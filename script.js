console.log("Starting our program");

// Add listener to our Button
var contactButton = document.getElementById("contactbutton");
contactButton.addEventListener("click",onClick);

function onClick(){

  this.innerHTML = "Bezig..";

  setTimeout(function(){
              console.log("Run timer..");

              contactButton.innerHTML = "Verstuurd!";
 
            },
            500);

}


