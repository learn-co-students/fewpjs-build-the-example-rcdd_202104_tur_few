// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll('li.like');
for (let like of likes) {
  like.addEventListener('click',function(event){
    fillLike(event);
  })
}

function fillLike(event) {
  const currentLike = event.target;

  if (currentLike.innerText == EMPTY_HEART) {
    // empty heart handling
    const serverResponse = mimicServerCall()
      .then(function(response){
        currentLike.innerText = FULL_HEART;
        currentLike.classList.add("activated-heart");
      })
      .catch(function(response){
        const modal= document.querySelector('#modal');
        modal.classList.remove("hidden");
        modal.innerText = response;
        setTimeout(function() {
          modal.classList.add("hidden")
        },3000);
      })
  } else {
    // full heart handling
    currentLike.innerText = EMPTY_HEART;
    currentLike.classList.remove("activated-heart");
  }
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
