let humanScore = 0;
let computerScore = 0;
let counter = 0;
let roundResult;
let rounds;

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
    roundResult = document.querySelector("#displayResults");
    rounds = document.querySelector("#rounds");
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
        
        results()
        gameReset()
    }
    const computerChoice = getComputerChoice();
        
    console.log(computerChoice)
    console.log(humanChoice)
    let resultMessage = "";
    


    if (humanChoice === 0 && computerChoice ===1){
    resultMessage="paper beats rocks you lose  this round hommie";
    computerScore++;
    }
    else if(humanChoice===0 && computerChoice===2){
    resultMessage="You win this round ! Rocks beat scissors";
    humanScore++;
    }    
    else if(humanChoice===1 && computerChoice===2){
    resultMessage="You lose this round!Scissors beat paper";
    computerScore++;
    }
    else if(humanChoice===1 && computerChoice===0){
    resultMessage="You win this round!Paper beat rocks";
    humanScore++;
    }
    else if(humanChoice===2 && computerChoice===0){
    resultMessage="You lose this round ! Rocks beat scissors";
    computerScore++; 
    } 
    else if(humanChoice===2 && computerChoice===1){
    resultMessage="You win this round ! scissors beat paper";
    humanScore++;
    }
    else if (computerChoice===humanChoice){
     resultMessage="oops! that was a tie";
    }
    else{
    console.log("wrong entry")
    }
    counter++;
    console.log("round " + counter)
    roundResult.innerHTML = resultMessage;
    rounds.innerHTML = "Round " + counter;
    if (counter === 5){
        results()
    
    }
    
}


function results(){
let gameResult = "";
if (humanScore > computerScore){
    gameResult ="You win the game after 5 rounds,you scored: " + humanScore + "<br>Game over! try again";
        console.log("You win the game after 5 rounds")
}
else if (humanScore < computerScore){
    gameResult ="You lose the game after 5 rounds <br>you scored, " + humanScore + " <br>Game over! try again";
    console.log("You lose the game after 5 rounds")
}
else{
    gameResult="It's a tie <br>your score is " + humanScore +  "<br>Game over! try again" ;

}
console.log("Your score is " + humanScore)
roundResult.innerHTML = gameResult;
gameReset()
}function gameReset(){
    humanScore = 0;
    computerScore = 0;
    counter = 0;
    console.log("reset")
    //roundResult.innerHTML = "Game over,Press any button to try again";
    rounds.innerHTML = "Round " + counter;
    
    
}
