function navSlide() {
  const nav = document.querySelector(".nav-container");
  const menu = document.querySelector(".links");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
  });
}
navSlide();

//playvideo
// var playing = document.getElementById("myVideo"); 

// function playVideo() { 
//   playing.play(); 
// } 

var vidbutton = document.getElementById("vidbutton");
vidbutton.addEventListener("click", playPause);

myVideo = document.getElementById("myvid");
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        vidbutton.innerHTML = "Pause";
        }
    else  {
        myVideo.pause(); 
        vidbutton.innerHTML = "Play";
        }
}

// const accordion = document.querySelector('.accordion');
// const panel = document.querySelector('.panel');


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


let login = document.querySelector('.login-main');
let loginPop = document.querySelector('#log-pop');
let close = document.querySelector('#close');

loginPop.addEventListener("click", ()=>{
  login.style.display="flex";
})
close.addEventListener("click", ()=>{
  login.style.display="none";
})
