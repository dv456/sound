const nav = document.querySelector('.nav-list');
const main = document.querySelector('.main');
const playBtn = document.querySelector('.play');
const audio = new Audio();
audio.src = `./assets/audio/forest.mp3`;
const logo =document.querySelector('.header-logo')
let isPlay = false;

nav.addEventListener('click',changeImage);
function changeImage(event) {       
        let data=event.target.dataset.item;
        main.style.backgroundImage = `url(./assets/img/${data}.jpg)`; 
}
nav.addEventListener('click',playAudio);
function playAudio(event) {
  let data=event.target.dataset.item;
  audio.src = `./assets/audio/${data}.mp3`;
  if(!isPlay){
    playBtn.style.backgroundImage = `url(./assets/svg/pause.svg)`; 
    audio.play();
    audio.currentTime = 0;
    isPlay = true;
  }else{
    audio.play();
  } 
}

logo.addEventListener('click',playAudio);
logo.addEventListener('click',changeImage);

playBtn.addEventListener('click', playaudio);
function playaudio() {
  if(!isPlay){
    playBtn.style.backgroundImage = `url(./assets/svg/pause.svg)`; 
    audio.play();
    isPlay = true;    
  }else{
    playBtn.style.backgroundImage = `url(./assets/svg/play.svg)`; 
    audio.pause();
    isPlay = false;
  }  
}

document.addEventListener('DOMContentLoaded', () => {
  let myBtns=document.querySelectorAll('.nav-item');
  myBtns.forEach(function(btn) {
      btn.addEventListener('click', () => {
        myBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        logo.classList.remove('active');
      });
      logo.addEventListener('click',() =>{
        logo.classList.add('active');
        myBtns.forEach(b => b.classList.remove('active'));
      });
  });

});
