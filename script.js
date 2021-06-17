// TODO: three buttons that the player can press to pick their choice
let btnRock = document.getElementById('rock');
let btnPaper = document.getElementById('paper');
let btnScissors = document.getElementById('scissors');
let btnPlay = document.getElementById('play');
let msg = document.getElementById('msg');

// TODO: list of computer choices
let computerValues = ['rock', 'paper', 'scissors'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// console.log(getRandomInt(3));
// expected output: 0, 1 or 2

// console.log(computerValues[getRandomInt(3)]);

// TODO:  List of user choices
var btnChoice = document.getElementsByClassName('btnChoice');
// console.log(btnChoice);

let choices =[];
for (let i = 0; i < btnChoice.length; i++) {
  btnChoice[i].addEventListener('click', function() {
        // Do your button things.
        console.log(btnChoice[i]);
        console.log(btnChoice[i].innerHTML);

        // TODO: Have a play button to have the computer pick one randomly
    btnPlay.addEventListener('click', play);
    // TODO: Possible outcomes: draw (when both chose the same thing) or player won/lost
    // TODO: Announce the winner -No alert box, add a message to your html 
function play() {
  console.log('in');
  console.log(btnChoice[i].innerHTML );
  console.log(computerValues[getRandomInt(3)]);

  // draw
if(btnChoice[i].innerHTML == computerValues[getRandomInt(3)]) {
  msg.innerHTML = 'draw';
  console.log('in1');

} else if (btnChoice[i].innerHTML == 'rock' && computerValues[getRandomInt(3)] == 'scissors') {
  msg.innerHTML = `You win!`;
  console.log('in2');

} else if (btnChoice[i].innerHTML == 'rock' && computerValues[getRandomInt(3)] == 'paper') {
  msg.innerHTML = `You lose!`;
  console.log('in3');

} else if (btnChoice[i].innerHTML == 'paper' && computerValues[getRandomInt(3)] == 'scissors') {
  msg.innerHTML = `You lose!`;
  console.log('in3');

} else if (btnChoice[i].innerHTML == 'paper' && computerValues[getRandomInt(3)] == 'rock') {
  msg.innerHTML = `You win!`;
  console.log('in4');

} else if (btnChoice[i].innerHTML == 'scissors' && computerValues[getRandomInt(3)] == 'rock') {
  msg.innerHTML = `You lose!`;
  console.log('in5');

} else if (btnChoice[i].innerHTML == 'scissors' && computerValues[getRandomInt(3)] == 'paper') {
  msg.innerHTML = `You win!`;
  console.log('in6');

}
}
    }); // close eventlistener
}   //close for loop



