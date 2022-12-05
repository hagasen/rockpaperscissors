const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultArea = document.getElementById("resultArea");
const recordArea = document.getElementById("recordArea");
let result = document.createElement("p");
let userRecord = document.createElement("p");
let compRecord = document.createElement("p");
let userWins = 0;
let compWins = 0;

rockBtn.onclick = playRock;


/*paperBtn.addEventListener("click", playPaper)
scissorsBtn.addEventListener("click", playScissors)*/


//rock = 0, paper = 1, scissors = 2


function playRock(){
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0){ 
    result.textContent = "It's a tie";
    resultArea.appendChild(result);
    }
    else if (computerChoice == 1){
    result.textContent = "Computer chose paper \n You lose."
    resultArea.appendChild(result);
        ++compWins;
        if (compWins == 5){
            compWins = 0;
            userWins = 0;
            alert("Game over. You lose.");
            
        }
    compRecord.textContent = "Computer wins: " + compWins;
    recordArea.appendChild(compRecord);
        return (compWins);
    }
    else{
    result.textContent = "Computer chose scissors \n You win!";
    resultArea.appendChild(result);
        ++userWins;
        if (userWins == 5){
            compWins = 0;
            userWins = 0;
            alert("Game over. You win!");
            
        }
    userRecord.textContent = "Your wins: " + userWins;
    recordArea.appendChild(userRecord);
        return (userWins);
    }
    
}





