class Game {
  constructor() {
    this.allChoices = document.querySelectorAll(".choice"); // select all with .choice class, allChoices.length = 6
    // select each player's choice
    this.playerBatu = document.querySelector(".player.batu");
    this.playerKertas = document.querySelector(".player.kertas");
    this.playerGunting = document.querySelector(".player.gunting");
    // just some variables, see botChoiceGenerator()
    this.botChoice, this.randomNumber;
    this.versusText = document.querySelector(".versus-text"); // select the center div
    this.playerWin = document.querySelector(".player-win"); // select the center div, hidden in first load
    this.botWin = document.querySelector(".bot-win"); // select the center div, hidden in first load
    this.draw = document.querySelector(".draw"); // select the center div, hidden in first load
    this.howLongTheAnimation = 1200; //in miliseconds, better if its divideable by 300. Animation in AcakAcakAcak()
  }

  //reset all choices from having .active class
  ActiveStateRemoval(allChoices) {
    allChoices.forEach((choice) => {
      if (choice.classList.contains("active")) {
        choice.classList.remove("active");
      }
    });
  }

  //generate random number between 1, 2, and 3 then designate every number for the bot's choice
  #botChoiceGenerator() {
    this.randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (this.randomNumber) {
      case 1:
        this.botChoice = ".bot.batu";
        console.log("COM chooses ROCK!");
        break;
      case 2:
        this.botChoice = ".bot.gunting";
        console.log("COM chooses SCISSORS!");
        break;
      default:
        this.botChoice = ".bot.kertas";
        console.log("COM chooses PAPER!");
        break;
    }
  }

  //showing .player-win div in center and hide the others
  PlayerWin() {
    console.log("PLAYER 1 WIN! GOOD JOB!");
    this.versusText.style.display = "none";
    this.botWin.style.display = "none";
    this.draw.style.display = "none";
    this.playerWin.style.display = "block";
    console.log("---------------ROUND END---------------");
  }

  //showing .bot-win div in center and hide the others
  BotWin() {
    console.log("Unfortunately, COM WIN!");
    this.versusText.style.display = "none";
    this.botWin.style.display = "block";
    this.draw.style.display = "none";
    this.playerWin.style.display = "none";
    console.log("---------------ROUND END---------------");
  }

  //showing .draw div in center and hide the others
  Draw() {
    console.log("Whoops! It's a DRAW!");
    this.versusText.style.display = "none";
    this.botWin.style.display = "none";
    this.draw.style.display = "block";
    this.playerWin.style.display = "none";
    console.log("---------------ROUND END---------------");
  }

  //determine the winner
  GameResult(P1Choice, randomNumber) {
    //"yo dawg, i heard you like switches. so i place switch inside of a switch" *insert XZibit meme*
    switch (P1Choice) {
      case 1:
        switch (randomNumber) {
          case 2:
            this.PlayerWin();
            break;
          case 3:
            this.BotWin();
            break;
          default:
            this.Draw();
            break;
        }
        break;
      case 2:
        switch (randomNumber) {
          case 1:
            this.BotWin();
            break;
          case 3:
            this.PlayerWin();
            break;
          default:
            this.Draw();
            break;
        }
        break;
      default:
        switch (randomNumber) {
          case 1:
            this.PlayerWin();
            break;
          case 2:
            this.BotWin();
            break;
          default:
            this.Draw();
            break;
        }
        break;
    }
  }

  //do you remember when a gameshow host randomize a winner's/quiz participant's phone number by saying "ACAKACAKACAKACAKACAK"?
  //this is it.
  AcakAcakAcak() {
    const botChoices = document.querySelectorAll(".bot");
    let queueList = 0;
    const start = new Date().getTime();
    setInterval((fungsi) => {
      if (new Date().getTime() - start >= this.howLongTheAnimation) {
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

  // only run when player choose rock
  playBatu() {
    let P1Choice = 1;
    console.log("YOU choose ROCK!");
    this.ActiveStateRemoval(this.allChoices); //reset
    this.playerBatu.classList.add("active"); //highlight the player's choice
    this.AcakAcakAcak();
    setTimeout((fungsi) => {
      this.#botChoiceGenerator(); //generate bot's choice
      document.querySelector(this.botChoice).classList.add("active"); //highlight the bot's choice
      this.GameResult(P1Choice, this.randomNumber); //determine the winner
    }, this.howLongTheAnimation); //because AcakAcakAcak uses setInterval, the remaining function must be contained in the setTimeout
  }

  // only run when player choose scissors
  playGunting() {
    let P1Choice = 2;
    console.log("YOU choose SCISSORS!");
    this.ActiveStateRemoval(this.allChoices); //reset
    this.playerGunting.classList.add("active"); //highlight the player's choice
    this.AcakAcakAcak();
    setTimeout((fungsi) => {
      this.#botChoiceGenerator(); //generate bot's choice
      document.querySelector(this.botChoice).classList.add("active"); //highlight the bot's choice
      this.GameResult(P1Choice, this.randomNumber); //determine the winner
    }, this.howLongTheAnimation); //because AcakAcakAcak uses setInterval, the remaining function must be contained in the setTimeout
  }

  // only run when player choose paper
  playKertas() {
    let P1Choice = 3;
    console.log("YOU choose PAPER!");
    this.ActiveStateRemoval(this.allChoices); //reset
    this.playerKertas.classList.add("active"); //highlight the player's choice
    this.AcakAcakAcak();
    setTimeout((fungsi) => {
      this.#botChoiceGenerator(); //generate bot's choice
      document.querySelector(this.botChoice).classList.add("active"); //highlight the bot's choice
      this.GameResult(P1Choice, this.randomNumber); //determine the winner
    }, this.howLongTheAnimation); //because AcakAcakAcak uses setInterval, the remaining function must be contained in the setTimeout
  }

  //well, the figma show a refresh button. yes, it's unnecessary. but hey, it's better than a not working button.
  refresher() {
    location.reload();
  }
}

//this version is just a more-complicated-not-semantic-and-practical-but-oop-style-is-master-race..
//IDK, the private method in this class is not really needed..
//botChoiceGenerator is a private one just to complicate things more..
//but, one thing for sure. this "pingsut" game is not an OOP style algorithm.

const player = new Game();
