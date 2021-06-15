// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphs=document.getElementsByClassName('like-glyph');
 const like=(e) =>{
   const heart = e.target;
   mimicServerCall("url")
     .then(()=>{
       if(heart.innerText===EMPTY_HEART){
         heart.innerText=FULL_HEART
         heart.classList.add('activated-heart')

       }else{
         heart.innerText=EMPTY_HEART
         heart.classList.remove('activated-heart')
       }
     })
     .catch(e =>{
       const modal = document.getElementById("modal");
       modal.className = "";
       modal.innerText = e;
       setTimeout(() =>  modal.className = "hidden", 2000);
     });
 }

 [...glyphs].forEach((glyph)=>{
   glyph.onclick=(e)=>like(e);

 })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let fail = Math.random() < .2
      if (fail) {
        reject("Error!");
      } else {
        resolve("New action");
      }
    }, 300);
  });
}
