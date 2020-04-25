const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('You really need to learn this game!');
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Thinking';
      break;
  }
}
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb'){
    return 'You are a God of this game! My Lord you WON!!!';
  }
  if(userChoice === computerChoice){
    return 'Guess you were lucky! The game was a tie.';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'You won!';
    }
    else{
      return 'Guess who just had his ass kicked? You. HAHAHA!';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'You won. Guess today is the looser\'s day!';
    }
    else{
      return 'Guess who just had his ass kicked? You. HAHAHA!';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return 'You won. Guess today is the looser\'s day!';
    }
    else{
      return 'Guess who just had his ass kicked? You. HAHAHA!';
    }
  }
}

function playGame(){
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  
  console.log('Your threw: ' +userChoice);
  console.log('Computer threw: ' +computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));  
}

playGame();
