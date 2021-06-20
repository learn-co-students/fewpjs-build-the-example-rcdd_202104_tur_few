// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// "Make popup invicible when button clicked" STARTS
  let btnToClosePopUp = document.getElementById("closeTheError");
  btnToClosePopUp.addEventListener("click", (e) => e.target.parentElement.classList.toggle("hidden"))
// "Make popup invicible when button clicked" ENDS

// ======================================================= //


// ""
let likeButtons = [...document.getElementsByClassName("like-glyph")];
likeButtons.forEach((button) => button.setAttribute("onclick", "callBack(this)"))

function callBack(element) {


  mimicServerCall()
  .then(() => {
    if (element.innerText === EMPTY_HEART) {
      if(element.classList.contains("activated-heart") === false) {
        element.classList.toggle("activated-heart");
      }
      element.innerText = FULL_HEART;
    }
    else if (element.innerText === FULL_HEART) {
      if(element.classList.contains("activated-heart") === true) {
        element.classList.toggle("activated-heart");
      }
      element.innerText = EMPTY_HEART;
    }
  })
  .catch((error) => {
    let popupDiv = document.getElementById("modal"); // get the div to toggle it's class "hidden"
    let popupMessage = document.getElementById("modal-message") // get the p element in div to change the content
    popupDiv.classList.toggle("hidden"); // make the popup visible
    popupMessage.innerText = error; // change the content of the popup
    setTimeout(() => {
      if(popupDiv.classList.contains("hidden") === false) { // if there's no "hidden" class on popupDiv...
        popupDiv.classList.toggle("hidden")        
      }
    }, 3000);
  })
  
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
