 
 function computerPlay () { 
    const choices = ["rock","paper","scissors"]
    const ranNum = Math.floor(Math.random() * 3) 
    const computerChoice = choices[ranNum]
    return computerChoice;
 }


 console.log(computerPlay());

 function playRound(playerSelection, computerSelection) { 
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            return "Tie Game! You both picked Rock!"
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return "You Loose! Paper beats rock "
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You Win! Rock beats Scissors"

        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return "Tie Game! You both picked paper"
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You Loose! Rock beats paper" 
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return "You Loose! Scissors beat paper !"

        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return "Tie Game! You both pikced Scissors"
        } else if (playerSelection === 'scissors' && computerSelection === 'paper' ) {
            return "You Win! Scissors beats Paper! "
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return "You Loose! Rock beats Scissors!" 
        }
     
 }





