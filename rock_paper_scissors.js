//Creating function for checking if user choice was correct
const getUserChoice  = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
  {
    return userInput;
  }
  else
  {
    return 'Invalid choice!'
  }    
  };


//Creating function for randomly getting computer choice
const getComputerChoice = () => 
{
  const choice = Math.floor(Math.random() * 3);
  
  switch(choice)
  {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
	}
};


//Declaring function determining who has won or if it is a tie.
const determineWinner = (userChoice, computerChoice) => 
{
if (userChoice === 'bomb')
  {
		return 'Cheat code! User won!';
  }
  else if (userChoice === computerChoice)
    {
      return 'It\'s a tie.';
    }

    //When user chooses rock
    else if (userChoice === 'rock' && computerChoice === 'scissors')
      {
         return 'User won.';
      } else if (userChoice === 'rock' && computerChoice === 'paper')
       {
         return 'Computer won.';
       }

    //When user chooses paper
    else if (userChoice === 'paper' && computerChoice === 'rock')
      {
         return 'User won.';
      } else if (userChoice === 'paper' && computerChoice === 'scissors')
       {
         return 'Computer won.';
       }

    //When user chooses scissors
    else if (userChoice === 'scissors' && computerChoice === 'paper')
    {
         return 'User won.';
    } else if (userChoice === 'scissors' && computerChoice === 'rock')
       {
         return 'Computer won.';
       }
      else
        {
          console.log('Please change for valid choice.');
        };
}

//Declaration of variables to receive return from functions. Input for User choice.
const playGame = () => 
{
// PUT YOUR CHOICE INSIDE QUOTATION:
const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();
console.log('User choice: ', userChoice);
console.log('Computer choice: ', computerChoice);
console.log(determineWinner(userChoice, computerChoice)); 
};


//Calling function which is comparing input from user and computer and determining winner
playGame();