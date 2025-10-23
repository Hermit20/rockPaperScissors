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
    

    if(humanScore > computerScore){
        return `You won! ${humanScore} to ${computerScore}, congragulations!`
    }
    else if(humanScore < computerScore){
       return `You lost! ${humanScore} to ${computerScore}, thats okay, Try again!`
    }
    else{
        return `You both tied! ${humanScore} to ${computerScore}, try again!`
    }

}

console.log(playGame())
console.log(humanScore)
console.log(computerScore)