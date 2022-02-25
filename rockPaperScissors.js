var userInput = window.prompt("Do you choose rock, paper, or scissors?");

var getUserChoice = function (userInput) {
   userInput = userInput.toLowerCase();
    if (userInput === 'rock' | userInput === 'scissors' | userInput === 'paper' | userInput === 'bomb') {
      return userInput;
   } else {
      console.log('That is not a valid input. Please choose either rock, paper, or scissors and try again.');
   }
}

var getComputerChoice = function () {
   let randomNumber = Math.floor(Math.random() * 2);
   if (randomNumber === 0) {
      return ('rock');
   } else if (randomNumber === 1) {
      return 'paper';
   } else {
      return 'scissors';
   }
}

var determineWinner = function (userChoice, computerChoice) {
   if (userInput === 'bomb') {
       return 'CONGRATULATIONS! YOU WIN EVERYTHING!'
   }
   if (userChoice === computerChoice) {
      return 'You have tied!';
   }

   if (userChoice === 'paper' && computerChoice === 'scissors') {
      return 'You have lost this round!';
   } else if (userChoice === 'paper' && computerChoice === 'rock') {
      return 'You have won this round!';
   } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      return 'You have lost this round!';
   } else if (userChoice ==='scissors' && computerChoice === 'paper') {
      return 'You have won this round!';
   } else if (userChoice === 'rock' && computerChoice === 'paper') {
      return 'You have lost this round!';
   } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      return 'You have won this round!';
   }
}

var playGame = function () {
   var userChoice = getUserChoice(userInput);
   console.log(userChoice);
   var computerChoice = getComputerChoice();
   console.log(computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
}

playGame();