// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const error = document.getElementById('modal')
const likeStatus = document.getElementsByClassName('like-glyph')
// console.log(likeStatus) This is an HTML Collection need to make it into an array for forEach
const likeStatusArray = [...likeStatus]
likeStatusArray.forEach(element => {
  element.addEventListener('click', function(e) {
    if(element.textContent === EMPTY_HEART){
      mimicServerCall()
      .then(() => {
        element.textContent = FULL_HEART;
        element.className += 'activated-heart'
      })
      .catch(() => error.classList.remove('hidden'))
      setTimeout(() => error.classList.add('hidden'), 3000)
    }
    else{
      element.textContent = EMPTY_HEART
      element.classList.remove('activated-heart')
    }
  })
});



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
