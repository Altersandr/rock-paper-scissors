let computerScore = 0;
let playerScore = 0;

let rpsContainer = document.querySelector('body');
let result = document.querySelector('.gameField');
let pScore = document.querySelector('.playerScore');
let cScore = document.querySelector('.computerScore')
let stats = document.querySelector('.stats');
let vs = document.querySelector('.vs');
let resetBtn = document.querySelector('button')
vs.style.display = 'none';

function winner(playerScore, computerScore){
        if (playerScore > computerScore){
            console.log(`You win! With the score of: ${playerScore}`)}
        else console.log(`You lose! Computer has a score of: ${computerScore}`)
    }

function reset(){
    
    stats.textContent = '';
    cScore.textContent = 0;
    pScore.textContent = 0;
    opt.addEventListener('click', gameOn);
    resetBtn.style.display = 'none';
}
const opt = document.querySelector('.options')

function playRound(playerChoice, computerChoice){
       if (playerChoice == "rock" && computerChoice == "paper"){
        computerScore +=1;
        return "You Lose! Paper beats Rock"
       }else if (playerChoice == "paper" && computerChoice == "rock"){
        playerScore +=1;
        return "You Win! Paper beats Rock"
       }else if (playerChoice == "scissors" && computerChoice == "rock"){
        computerScore +=1;
        return "You Lose! Rock beats Scissors"
       }else if (playerChoice == "scissors" && computerChoice == "paper"){
        playerScore +=1;
        return "You Win! Scissors beat Paper"
       }else if (playerChoice == "rock" && computerChoice == "scissors"){
        playerScore +=1;
        return "You Win! Rock beats Scissors"
       }else if (playerChoice == "paper" && computerChoice == "scissors"){
        computerScore +=1;
        return "You Lose! Scissors beat Paper"
       }else return `It's a draw, you both chose ${playerChoice}`
    }


const gameOn = () => {
    let playerChoice = event.target.classList.value;
    const rps = ["rock" , "paper" , "scissors" ]
    let computerChoice = rps[Math.floor(Math.random()* rps.length)];
    console.log(computerChoice)
    let roundResult = playRound(playerChoice, computerChoice);
    
    stats.textContent = roundResult;
    
    let player = document.createElement('img');
    player.className = 'player';
    player.src = `simages/${playerChoice}.png`;
    result.replaceChild(player, result.childNodes[0]);


    vs.style.display = 'block';
    vs.className = 'vs';
    vs.src = 'si,ages/vs.png';
    result.replaceChild(vs, result.childNodes[1]);

    
    let computer = document.createElement('img');
    computer.className = 'computer';
    computer.src = `simages/${computerChoice}.png`;
    result.replaceChild(computer, result.childNodes[2]);

    result.style.display = 'flex';
    result.style.justifyContent = 'center';

    cScore.textContent = computerScore;
    pScore.textContent = playerScore;
    if (computerScore ===5 || playerScore ===5){
        if (computerScore ===5){
        stats.textContent = `The winner is the Computer`;
        }else{stats.textContent = `You are the winner`;

        }
        opt.removeEventListener('click', gameOn);
        resetBtn.style.display = 'block';
        computerScore = 0;
        playerScore = 0;
        // reset()
        
 

}}
resetBtn.addEventListener('click', reset);
opt.addEventListener('click', gameOn);