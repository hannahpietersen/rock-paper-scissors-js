const playerTxt = document.querySelector("#playerTxt");
const compTxt = document.querySelector("#compTxt");
const resultTxt = document.querySelector("#resultTxt");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    
    player = button.textContent;
    computerTurn();
    playerTxt.textContent = `Player: ${player}`
    compTxt.textContent = `Computer: ${computer}`
    resultTxt.textContent = checkWinner();
}))

function computerTurn() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            computer = "ROCK";
            break
        case 2:
            computer = "PAPER";
            break
        case 3:
            computer = "SCISSORS";
            break
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw! It's a tie";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You win!" : "You lose!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You win!" : "You lose!";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You win!" : "You lose!";
    }
}       