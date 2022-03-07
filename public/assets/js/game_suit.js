const allChoices = document.querySelectorAll(".choice"); // select all with .choice class, allChoices.length = 6
const playerChoices = document.querySelectorAll(".player"); // select only player's choice
let botChoice, randomNumber;
const versusText = document.querySelector(".versus-text"); // select the center div
const playerWin = document.querySelector(".player-win"); // select the center div, hidden in first load
const botWin = document.querySelector(".bot-win"); // select the center div, hidden in first load
const draw = document.querySelector(".draw"); // select the center div, hidden in first load
const howLongTheAnimation = 1200; //in miliseconds, better if its divideable by 300. Animation in AcakAcakAcak()

//FYI, every choice is represented by a number
//1 for rock
//2 for scissors
//3 for paper

//reset all choices from having .active class
function ActiveStateRemoval() {
  allChoices.forEach((choice) => {
    if (choice.classList.contains("active")) {
      choice.classList.remove("active");
    }
  });
}

function MakeChoiceUnclickable(allChoices, animationTime) {
  allChoices.forEach((choice) => {
    choice.style.pointerEvents = "none";
  });
  setTimeout((fungsi) => {
    allChoices.forEach((choice) => {
      choice.style.pointerEvents = "auto";
    });
  }, animationTime);
}

//generate random number between 1, 2, and 3 then designate every number for the bot's choice
function botChoiceGenerator() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      botChoice = ".bot.batu";
      console.log("COM chooses ROCK!");
      break;
    case 2:
      botChoice = ".bot.gunting";
      console.log("COM chooses SCISSORS!");
      break;
    default:
      botChoice = ".bot.kertas";
      console.log("COM chooses PAPER!");
      break;
  }
  document.querySelector(botChoice).classList.add("active"); //highlight the bot's choice
}

//showing .player-win div in center and hide the others
function PlayerWin() {
  console.log("PLAYER 1 WIN! GOOD JOB!");
  versusText.style.display = "none";
  botWin.style.display = "none";
  draw.style.display = "none";
  playerWin.style.display = "block";
  console.log("---------------ROUND END---------------");
}

//showing .bot-win div in center and hide the others
function BotWin() {
  console.log("Unfortunately, COM WIN!");
  versusText.style.display = "none";
  botWin.style.display = "block";
  draw.style.display = "none";
  playerWin.style.display = "none";
  console.log("---------------ROUND END---------------");
}

//showing .draw div in center and hide the others
function Draw() {
  console.log("Whoops! It's a DRAW!");
  versusText.style.display = "none";
  botWin.style.display = "none";
  draw.style.display = "block";
  playerWin.style.display = "none";
  console.log("---------------ROUND END---------------");
}

function VersusReset() {
  this.versusText.style.display = "block";
  this.botWin.style.display = "none";
  this.draw.style.display = "none";
  this.playerWin.style.display = "none";
}

//determine the winner
function GameResult(P1Choice, randomNumber) {
  if (
    (P1Choice == 1 && randomNumber == 2) ||
    (P1Choice == 2 && randomNumber == 3) ||
    (P1Choice == 3 && randomNumber == 1)
  )
    this.PlayerWin();
  else if (P1Choice == randomNumber) this.Draw();
  else this.BotWin();
}

//do you remember when a gameshow host randomize a winner's/quiz participant's phone number by saying "ACAKACAKACAKACAKACAK"?
//this is it.
function AcakAcakAcak() {
  const botChoices = document.querySelectorAll(".bot");
  let queueList = 0;
  const start = new Date().getTime();
  setInterval((fungsi) => {
    if (new Date().getTime() - start >= howLongTheAnimation) {
      clearInterval;
      return;
    }
    if (queueList == botChoices.length) {
      return (queueList = 0);
    }
    botChoices[queueList].classList.add("active");
    setTimeout((fungsi) => {
      botChoices[queueList++].classList.remove("active");
    }, 80);
  }, 100);
}

//loops for event listener
playerChoices.forEach((playerChoice) => {
  // the hills are alive with the sound of a-clickkk~~~ with choice they have chose for a player sidee~~
  playerChoice.addEventListener("click", (fungsi) => {
    MakeChoiceUnclickable(allChoices, howLongTheAnimation);
    let P1Choice;
    //detect the clicked div class
    if (playerChoice.classList.contains("batu")) {
      P1Choice = 1;
      console.log("YOU choose ROCK!");
    }
    if (playerChoice.classList.contains("gunting")) {
      P1Choice = 2;
      console.log("YOU choose SCISSORS!");
    }
    if (playerChoice.classList.contains("kertas")) {
      P1Choice = 3;
      console.log("YOU choose PAPER!");
    }

    ActiveStateRemoval(); //reset
    playerChoice.classList.add("active"); //highlight the player's choice
    AcakAcakAcak();
    setTimeout((fungsi) => {
      botChoiceGenerator(); //generate bot's choice
      GameResult(P1Choice, randomNumber); //determine the winner
    }, howLongTheAnimation); //because AcakAcakAcak uses setInterval, the remaining function must be contained in the setTimeout
  });
});

//well, the figma show a refresh button. yes, it's unnecessary. but hey, it's better than a not working button.
function refresher() {
  ActiveStateRemoval(allChoices);
  VersusReset();
}
