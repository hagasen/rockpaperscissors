const varRock = document.getElementById("rock");
const varPaper = document.getElementById("paper");
const varScissors = document.querySelector("#scissors");

varRock.addEventListener("click", funcRock);
varPaper.addEventListener("click", funcPaper);
varScissors.addEventListener("click", funcScissors);


function funcRock(){
    generateComputerChoice()
    if (computerChoice == "paper"){
        alert("take that L");
    }
}

function funcPaper(){
    generateComputerChoice()
    if (computerChoice == "paper"){
        console.log("tie");
    }
}

function funcScissors(){
    generateComputerChoice()
    if (computerChoice == "paper"){
        console.log("W");
    }
}


function generateComputerChoice(){

   computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0){
    computerChoice = "rock";
    }

    else if (computerChoice == 1){
    computerChoice = "paper";
    }

    else {
        computerChoice = "scissors";
    }

return (computerChoice);
}

