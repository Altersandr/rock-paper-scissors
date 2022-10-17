function getComputerChoice() {
    const rps = ["Rock" , "Paper" , "Scissors" ]
    const computerChoice = rps[Math.floor(Math.random()* rps.length)];
    return computerChoice;
}
const computerSelection = getComputerChoice();
console.log(computerSelection)

const playerSelection = prompt("What do you choose?: 'Rock' , 'Paper' , 'Scissors' ").toLowerCase()

function playRound(playerSelection, computerSelection){
   if (playerSelection == "rock" && computerSelection == "Paper")
    return "You Lose! Paper beats Rock"
   else if (playerSelection == "paper" && computerSelection == "Rock")
    return "You Win! Paper beats Rock"
   else if (playerSelection == "scissors" && computerSelection == "Rock")
    return "You Lose! Rock beats Scissors"
   else if (playerSelection == "scissors" && computerSelection == "Paper")
    return "You Win! Scissors beat Paper"
   else if (playerSelection == "rock" && computerSelection == "Scissors")
    return "You Win! Rock beats Scissors"
   else if (playerSelection == "paper" && computerSelection == "Scissors")
    return "You Lose! Scissors beat Paper"
   else return "It's a draw"
}

function game(){
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
        
    }
}
game()
// console.log(playRound(playerSelection, computerSelection))