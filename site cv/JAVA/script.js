//CODE pour onglet
const tabs = [...document.querySelectorAll('.tab')]
const tabContents = [...document.querySelectorAll(".tab-content")]

tabs.forEach(tab => tab.addEventListener("click",tabsAnimation))

function tabsAnimation(e){

    const indexToRemove = tabs.findIndex(tab => tab.classList.contains("active-tab"))

    tabs[indexToRemove].classList.remove("active-tab");
    tabContents[indexToRemove].classList.remove("active-tab-content");

    const indexToShow = tabs.indexOf(e.target)

    tabs[indexToShow].classList.add("active-tab")
    tabContents[indexToShow].classList.add("active-tab-content")
}
// casse brick
// Obtenir le canvas et son contexte 2D
const canvas = document.getElementById('breakout-canvas');
const ctx = canvas.getContext('2d');

// Définir les variables 
const paddleWidth = 60;
const paddleHeight = 3;
let paddleX = (canvas.width - paddleWidth) / 2;

let ballRadius = 5;
let ballX = canvas.width / 2;
let ballY = canvas.height - 30;
let ballSpeedX = 1;
let ballSpeedY = -1;

// Dessiner tous les éléments du jeu
function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#fff';
  ctx.fillRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);

  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}
//mouvement de la balle
function ballMovement() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;
}
// bordure et raquette
function ballBouncing() {
    if (ballX < ballRadius || ballX > canvas.width - ballRadius) {
      ballSpeedX = -ballSpeedX;
    }
    if (ballY < ballRadius) {
      ballSpeedY = -ballSpeedY;
    }
    if(ballY > canvas.height - ballRadius){
        if(ballX > paddleX && ballX < paddleX + paddleWidth){
            ballSpeedY = -ballSpeedY;
        }else{
            ballReset();
         }
    }
}
function ballReset() {
    ballX = canvas.width / 2;
    ballY = canvas.height -50;
    ballSpeedY = -ballSpeedY;

}
// permet d'eouter le clavier
document.addEventListener("keydown", function(event){
    if(event.key === "ArrowRight"){
        paddleX += 10;
    }else if(event.key === "ArrowLeft"){
        paddleX -= 10 ;
    }
    if(paddleX < 0){
        paddleX=0;
    }else if (paddleX + paddleWidth > canvas.width){
        paddleX = canvas.width - paddleWidth;
    }
})
// Fonction principale du jeu
  function game() {
    drawEverything();
    ballMovement();
    ballBouncing();
  }
  
setInterval(game, 10);


//image transition
const smallImages = document.querySelectorAll('.small-image');
const overlay = document.querySelector('.overlay');
const largeImage = document.querySelector('.large-image');

smallImages.forEach(function(smallImage) {
  smallImage.addEventListener('click', function() {
    overlay.style.display = 'block';
    largeImage.src = this.src;
    largeImage.classList.add('active');
  });
});

overlay.addEventListener('click', function() {
  overlay.style.display = 'none';
});


