// Game Logic
function getComputerChoice(){
            const randNum = Math.random()
            if(randNum <= 0.3){
                return "rock"
            }
            else if(randNum <= 0.6){
                return "paper"
            }
            else{
                return "scissors"
            }
}

function getHumanChoice(){
            let choice = prompt("Choose one of 'Rock','Paper',or 'Scissors'")
            choice = choice.toLowerCase();
            return choice;
}
        
let humanScore = 0
let computerScore = 0
        
function humanWon(){
            humanScore += 1
}

function computerWon(){
            computerScore += 1
}

function playRound(humanChoice, computerChoice){
            
            
    if(humanChoice === computerChoice){
        return `You tied! you both chose ${humanChoice}`
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanWon()
        return `You won! you chose ${humanChoice} and the computer chose ${computerChoice}`
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanWon()
        return `You won! you chose ${humanChoice} and the computer chose ${computerChoice}`
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanWon()
        return `You won! you chose ${humanChoice} and the computer chose ${computerChoice}`
    }
    else{
        computerWon()
        return `You lose! you chose ${humanChoice} and the computer chose ${computerChoice}`
    }
}

        
function playGame(){


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection))
    

}

function checkForWinner(){
    if(humanScore === 5){
        return `You won! ${humanScore} to ${computerScore}, congragulations!`
    }
    else if(computerScore === 5){
       return `You lost! ${humanScore} to ${computerScore}, thats okay, Try again!`
    }
    else{
        return `Still Playing`
    }
}

function reset(){
    humanScore = 0;
    computerScore = 0;

    const display = document.querySelector(".container")
    while (display.firstChild) {
         display.removeChild(display.firstChild);
    }
    
    const playerScore = document.querySelector("#player")
    playerScore.textContent = 0
    const cpuScore = document.querySelector("#cpu")
    cpuScore.textContent = 0


}


// console.log(playGame())
// console.log(humanScore)
// console.log(computerScore)


// Event Listners 

const buttons = document.querySelectorAll("button.choice")
const test = document.querySelector("#rock")


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const container = document.createElement("div")
        const temp = playRound(button.id,getComputerChoice())
        container.textContent = temp
        
        
        if(temp.slice(0,8) === 'You won!'){
            container.classList.toggle("won")
        }
        else if(temp.slice(0,8) === `You lose`){
            container.classList.toggle("lost")
        }
        else if(temp.slice(0,8) === `You tied`){
            container.classList.toggle("tied")
        }
        
        const display = document.querySelector(".container")
    
        display.appendChild(container)
      
        const playerScore = document.querySelector("#player")
        playerScore.textContent = humanScore
        const cpuScore = document.querySelector("#cpu")
        cpuScore.textContent = computerScore
        
        if(checkForWinner() != `Still Playing`){
            const winner = document.createElement("div")
            const body = document.querySelector("body")

            const temp = checkForWinner()
            winner.textContent = temp
            if(temp.slice(0,8) === 'You won!'){
                winner.classList.toggle("winner")
            }
            else{
                winner.classList.toggle("loser")
            }
            
            body.appendChild(winner)
            reset()
            
        }

    })
})






