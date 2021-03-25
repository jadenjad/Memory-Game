/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakeCounter = 0;
var timeReduced = 0;
var timeLimit;
function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    mistakeCounter = 0;
    timeReduced = 0;
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    newPattern();
    playClueSequence();
}

function stopGame() {
  clearInterval(timeLimit);
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 222,
  2: 333,
  3: 444,
  4: 555,
  5: 666,
  6: 777,
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  console.log("play single clue: " + pattern[0] + " in " + delay + "ms")
  setTimeout(playSingleClue,delay,pattern[0])
  delay += clueHoldTime 
  delay += cluePauseTime;
  for(let i=1;i<=progress;i++){ // for each clue that is revealed so far
    delay-= timeReduced;
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  timeLimit = setInterval(loseGameTime, 10000 + delay)
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats. You won.");
}

function guess(btn){
  clearInterval(timeLimit);
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (btn == pattern[guessCounter]) {
    if (progress==guessCounter) {
      if (progress == 7) {
        winGame();
      } else {
        if (progress<5) {
          timeReduced+=50;
        }
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    mistakeCounter++;
    if (mistakeCounter > 2) {
      loseGame();
    } else {
    playClueSequence();
    }
  }
}

function newPattern() {
  for (let i=0; i<8;i++) {
    pattern[i] = getRandomInt(1,6);
    console.log(pattern[i]);
  }
}
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function loseGameTime() {
  stopGame();
  alert("Game Over. You ran out of time.");
}