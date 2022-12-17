 let playerScore = 0;
 let computerScore = 0;
 function computerPlay () { 
    const choices = ["rock","paper","scissors"]
    const ranNum = Math.floor(Math.random() * 3) 
    const computerChoice = choices[ranNum]
    return computerChoice;
 }


 //console.log(computerPlay());

 function playRound(playerSelection, computerSelection) { 
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            return "Tie Game! You both picked Rock!"
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++
            return "You Loose! Paper beats rock "
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++
            return "You Win! Rock beats Scissors"

        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return "Tie Game! You both picked paper"
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            computerScore++
            return "You Loose! Rock beats paper" 
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++
            return "You Loose! Scissors beat paper !"

        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return "Tie Game! You both pikced Scissors"
        } else if (playerSelection === 'scissors' && computerSelection === 'paper' ) {
            playerScore++
            return "You Win! Scissors beats Paper! "
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++
            return "You Loose! Rock beats Scissors!" 
        }
     
 }



 function game() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter either Rock, Paper or Scissors").toLowerCase();
    const computerSelection = computerPlay(); 
    playRound(playerSelection, computerSelection)
        
    }
    if (playerScore > computerScore) {
        return "You beat the computer"
    } else if (playerScore < computerScore) {
        return "The computer beat you! "
    } else  {
        return "you tied!"
    }

 }

console.log( game()) ;



