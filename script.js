console.log("Starting our program");

// Add listener to our Button
var contactButton = document.getElementById("contactbutton");
contactButton.addEventListener("click",onClick);

function onClick(){
  // 
  console.log("on click");
  //change button text

  this.innerHTML = "Thanks for clicking";

  setTimeout(function(){
              console.log("Run timer..");
              console.log(contactButton.innerHTML);
              contactButton.innerHTML = "Button...";
              console.log("done timer..");
            },
            500);

}


console.log("Finished our program.");