let humanScore = 0;
let computerScore = 0;
let counter = 1;
function getComputerChoice(){
   const compChoice = Math.floor(Math.random()*3);
   console.log(compChoice)
   return compChoice;
    
}
getComputerChoice()
let humanChoice;

document.addEventListener("DOMContentLoaded", function(event){
    const rock =document.querySelector("#rock");
    const paper =document.querySelector("#paper");
    const scissors =document.querySelector("#scissors");
    const reset= document.querySelector("#reset");
    if(rock && paper&& scissors && reset){
        rock.addEventListener("click", function(){
            getHumanChoice(0);
            playRound()
        });
        paper.addEventListener("click", function(){
            getHumanChoice(1);
            playRound()
        });
        scissors.addEventListener("click", function(){
            getHumanChoice(2);
            playRound()
        });
        reset.addEventListener("click", function(){
          gameReset()
        });
        
    }
});
function getHumanChoice(choice){
    humanChoice = choice;
    console.log(humanChoice)
    return humanChoice;
    }
 

console.log("your choice is: " + humanChoice);
console.log("computer choice is: " + getComputerChoice());


function playRound(){
    if (counter >=5){
        console.log("Game over")
        gameReset()
    }
    const computerChoice = getComputerChoice();
        
    console.log(computerChoice)
    console.log(humanChoice)


    if (humanChoice === 0 && computerChoice ===1){
    console.log("paper beats rocks you lose hommie");
    computerScore++;
    }
    else if(humanChoice===0 && computerChoice===2){
    console.log("You win ! Rocks beat scissors");
    humanScore++;
    }    
    else if(humanChoice===1 && computerChoice===2){
    console.log("You lose!Scissors beat paper");
    computerScore++;
    }
    else if(humanChoice===1 && computerChoice===0){
    console.log("You win!Paper beat rocks");
    humanScore++;
    }
    else if(humanChoice===2 && computerChoice===0){
    console.log("You lose ! Rocks beat scissors");
    computerScore++; 
    } 
    else if(humanChoice===2 && computerChoice===1){
    console.log("You win ! scissors beat paper");
    humanScore++;
    }
    else if (computerChoice===humanChoice){
     console.log("oops! it's a tie");
    }
    else{
    console.log("wrong entry")
    }
    counter++;
    console.log("round " + counter)
if (counter===5){
    results()
}
}

function results(){
if (humanScore > computerScore){
    console.log("You win the game after 5 rounds")
}
else if (humanScore < computerScore){
    console.log("You lose the game after 5 rounds")
}
else{
    console.log("It's a tie")
}
console.log("Your score is " + humanScore)
}function gameReset(){
    humanScore = 0;
    computerScore = 0;
    counter = 1;
    console.log("reset")
}