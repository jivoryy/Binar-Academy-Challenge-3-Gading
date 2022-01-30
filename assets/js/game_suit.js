const playerChoiceBatu = document.querySelector(".player.batu");
const playerChoiceGunting = document.querySelector(".player.gunting");
const playerChoiceKertas = document.querySelector(".player.kertas");
const allChoices = document.querySelectorAll(".choice");
let botChoice;
let randomNumber;
const versusText = document.querySelector(".versus-text");
const playerWin = document.querySelector(".player-win");
const botWin = document.querySelector(".bot-win");
const draw = document.querySelector(".draw");

function ActiveStateRemoval() {
  allChoices.forEach((choice) => {
    if (choice.classList.contains("active")) {
      choice.classList.remove("active");
    }
  });
}

function botChoiceGenerator() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    botChoice = ".bot.batu";
    return randomNumber;
  }
  if (randomNumber === 2) {
    botChoice = ".bot.gunting";
    return randomNumber;
  }
  if (randomNumber === 3) {
    botChoice = ".bot.kertas";
    return randomNumber;
  }
}

function PlayerWin() {
  versusText.style.display = "none";
  botWin.style.display = "none";
  draw.style.display = "none";
  playerWin.style.display = "block";
}

function BotWin() {
  versusText.style.display = "none";
  botWin.style.display = "block";
  draw.style.display = "none";
  playerWin.style.display = "none";
}

function Draw() {
  versusText.style.display = "none";
  botWin.style.display = "none";
  draw.style.display = "block";
  playerWin.style.display = "none";
}

function GameResult(P1Choice, randomNumber) {
  if (P1Choice === 1) {
    switch (randomNumber) {
      case 2:
        PlayerWin();
        break;
      case 3:
        BotWin();
        break;
      default:
        Draw();
        break;
    }
  }
  if (P1Choice === 2) {
    switch (randomNumber) {
      case 1:
        BotWin();
        break;
      case 3:
        PlayerWin();
        break;
      default:
        Draw();
        break;
    }
  }
  if (P1Choice === 3) {
    switch (randomNumber) {
      case 1:
        PlayerWin();
        break;
      case 2:
        BotWin();
        break;
      default:
        Draw();
        break;
    }
  }
}

playerChoiceBatu.addEventListener("click", (fungsi) => {
  const P1Choice = 1;
  ActiveStateRemoval();
  playerChoiceBatu.classList.add("active");
  botChoiceGenerator();
  document.querySelector(botChoice).classList.add("active");
  GameResult(P1Choice, randomNumber);
});

playerChoiceGunting.addEventListener("click", (fungsi) => {
  const P1Choice = 2;
  ActiveStateRemoval();
  playerChoiceGunting.classList.add("active");
  botChoiceGenerator();
  document.querySelector(botChoice).classList.add("active");
  GameResult(P1Choice, randomNumber);
});

playerChoiceKertas.addEventListener("click", (fungsi) => {
  const P1Choice = 3;
  ActiveStateRemoval();
  playerChoiceKertas.classList.add("active");
  botChoiceGenerator();
  document.querySelector(botChoice).classList.add("active");
  GameResult(P1Choice, randomNumber);
});

function refresher() {
  location.reload();
}
// Testing Zone
