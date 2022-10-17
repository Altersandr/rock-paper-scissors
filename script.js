function getComputerChoice() {
    const rps = ["Rock" , "Paper" , "Scissors" ]
    const computerChoice = rps[Math.floor(Math.random()* rps.length)];
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
   if (playerSelection == "rock" && computerSelection == "Paper"){
    computerScore +=1;
    return "You Lose! Paper beats Rock"
   }else if (playerSelection == "paper" && computerSelection == "Rock"){
    playerScore +=1;
    return "You Win! Paper beats Rock"
   }else if (playerSelection == "scissors" && computerSelection == "Rock"){
    computerScore +=1;
    return "You Lose! Rock beats Scissors"
   }else if (playerSelection == "scissors" && computerSelection == "Paper"){
    playerScore +=1;
    return "You Win! Scissors beat Paper"
   }else if (playerSelection == "rock" && computerSelection == "Scissors"){
    playerScore +=1;
    return "You Win! Rock beats Scissors"
   }else if (playerSelection == "paper" && computerSelection == "Scissors")
    return "You Lose! Scissors beat Paper"
   else return "It's a draw"
}

function game(){
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection = prompt("What do you choose?: 'Rock' , 'Paper' , 'Scissors' ").toLowerCase(), computerSelection = getComputerChoice());
    }
    winner(playerScore, computerScore)
}

function winner(playerScore, computerScore){
    if (playerScore > computerScore){
        console.log(`You win! With the score of: ${playerScore}`)}
    else console.log(`You lose! Computer has a score of: ${computerScore}`)
}
game()
