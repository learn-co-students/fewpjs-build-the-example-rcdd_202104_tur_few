// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// Adding class hidden to error modal:
const errorMsg = document.getElementById('modal');          // Getting the error message div
errorMsg.setAttribute("class", "hidden");                   // Making the error go away on page loads

// Adding an event listener for all heart button:
const hearStatus = document.getElementsByClassName('like-glyph');
for(let i = 0; i < hearStatus.length; i++){                 // Iterating through all heart buttons to add event listener

  hearStatus[i].addEventListener("click", function(e){      // Adding an event listener for all hearts
    if(hearStatus[i].textContent === EMPTY_HEART){          // If the heart is empty excute these statements
      mimicServerCall()                                     // Fetching from the server
      .then(() => {                                         // If fetching is a success do the following:
        hearStatus[i].textContent = FULL_HEART;             // Make the heart full.
        hearStatus[i].className += " activated-heart";      // Adding a class that has styling to make the heart red.

      })
      .catch(() => errorMsg.classList.remove('hidden'));    // If failed show the error message
      setTimeout(function(){errorMsg.setAttribute("class", "hidden")}, 3000); // After 3 seconds, hide the error message.
    }
    else if(hearStatus[i].textContent === FULL_HEART){      // If the heart is full excute these statements
      hearStatus[i].textContent = EMPTY_HEART;              // Make the heart empty.
      hearStatus[i].classList.remove('activated-heart');    // remove the class that allow red styling from the heart.
    }
  })
}

function heartFunc(status){

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
