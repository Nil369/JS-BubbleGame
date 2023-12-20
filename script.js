var timer = 60;
var score = 0;
var hitrn = 0;
var paneltop = document.querySelector("#ptop");
var panelbtm = document.querySelector("#pbtm");
var timerInt; // variable to store the interval ID
var lever = 0; // flag to track the state (0 for paused, 1 for playing)

function runTimer() {
    timerInt = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>
            <h4>Refresh to play again</h4>`;
            document.querySelector("#play").style.display = "block";
            document.querySelector("#pause").style.display = "none";
            lever = 0;
        }
    }, 1000);
}

var playGame = document.querySelector("#play");
var pause = document.querySelector("#pause");

panelbtm.innerHTML = `<h1>Welcome to Akash Halder's Pop The Bubble Game</h1>
<h3>Click The Play Button to Start The Game</h3>`
playGame.addEventListener("click", () => {
    if (lever === 0) {
        makeBubble();
        console.log("play");
        runTimer();
        playGame.style.display = "none";
        pause.style.display = "block";
        lever = 1;
    }
});

pause.addEventListener("click", () => {
    if (lever === 1) {
        console.log("paused");
        clearInterval(timerInt); // Pause the timer
        playGame.style.display = "block";
        pause.style.display = "none";
        lever = 0;
    }
});

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent=score;
}

function getNewHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){ 
clutter = "";

for(var i=1 ; i<181; i++){
    var ran = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${ran}</div>`
}

var bubble = document.querySelector("#pbtm");
bubble.innerHTML = clutter;
}

let play = document.querySelector("#pbtm");
play.addEventListener("click",function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if(clickedNum === hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})



getNewHit();

var theme1 = document.querySelector("#Default");
var theme2 = document.querySelector("#Dark");
var main = document.querySelector("#main");


theme1.addEventListener("click",()=>{
   main.style.backgroundColor = "rgb(185, 237, 252)"
})

theme2.addEventListener("click",()=>{
    main.style.backgroundColor = "black"
    paneltop.style.backgroundColor = "rgb(102, 100, 100)"
})