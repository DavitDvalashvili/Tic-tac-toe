const chooseX = document.querySelector("#button-x");
const chooseY = document.querySelector("#button-o");
const buttons = document.querySelector(".buttons");
const home = document.querySelector("#home");
const board = document.querySelector("#board");
const icon = document.querySelectorAll(".xo");
const changeTurn = document.querySelectorAll(".turn img")[0];
const scoreX = document.querySelector("#x-score-num");
const scoreO = document.querySelector("#o-score-num");
const scoreTie = document.querySelector("#ties-num");
const resultBoard = document.querySelector("#result");
const resultText = document.querySelector(".result-text")
const oTakes = document.querySelector(".o-takes")
const xTakes = document.querySelector(".x-takes")
const tied = document.querySelector(".tied");
const quitButton = document.querySelector("#quit");
const nextButton = document.querySelector("#next");

let xScore = 0;
let OScore = 0;
let tieScore = 0;
let player1 = "o";
let player2 ="x";
let mode = "cpu";
let turn = "x"


newArr = [];

const winPattern = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]



playGame();

function playGame() {
    chooseSymbol();
}



// choose mode
function startGame(chooseMode) {
    chooseSymbol();
    home.style.display = "none";
    board.style.display = "flex";
    mode = chooseMode;
    placeIcons();
}


    //choose between x and o;
function chooseSymbol() {
    buttons.childNodes.forEach(function(element) {
        element.addEventListener("click", (event)=> {
            let target = event.target;
            if(target.classList.contains("activeX") == false && target.classList.contains("buttonX") == true) {
                target.classList.add("activeX");
                target.nextElementSibling.classList.remove("activeO");
                player1 = "x"
                player2 = "o"
               
            } else if (target.classList.contains("activeO") == false && target.classList.contains("buttonO") == true) {
                target.classList.add("activeO");
                target.previousElementSibling.classList.remove("activeX");
                player1 = "o";
                player2 = "x";
            } 
        })
    } ) 
}




//place Icons
function placeIcons() {
    icon.forEach(element => {
        element.addEventListener("click", (event) => {
            let target = event.target;
            if(turn == "x" && target.classList.contains("addX") != true && target.classList.contains("addO") != true) {
                target.classList.add("addX")
                changeTurn.src = "./assets/silver-o.svg"
                turn = "o"
                target.parentElement.classList.remove("hoverX");
                target.parentElement.classList.add("hoverO");
                newArr.push(turn)
            } else if (turn == "o" && target.classList.contains("addX") != true && target.classList.contains("addO") != true) {
                target.classList.add("addO")
                changeTurn.src = "./assets/silver-x.svg"
                turn = "x"
                target.parentElement.classList.remove("hoverO");
                target.parentElement.classList.add("hoverX");
                newArr.push(turn);
            }
            checkWin();
        })
    })
}


//checks hwo win x, o or it was tie;
function checkWin() {
    if(checkWinX()) {
        winX();
    } else if (checkWinO()) {
        winO();
    } else if(newArr.length == 9) {
        makeTie();
    }
}


//checks if X win
function checkWinX() {
   return winPattern.some(combination => {
        return combination.every(index => {
            return icon[index].classList.contains("addX");
            
        })
    })
}

//checks if  O win
function checkWinO() {
    return winPattern.some(combination => {
         return combination.every(index => {
             return icon[index].classList.contains("addO");
         })
     })
}

//displays result on the screen when x wins
function winX() {
    xScore++;
    scoreX.textContent = xScore;
    resultBoard.style.display = "flex";
    oTakes.style.display = "none"
    tied.style.display = "none";
    if(player1 == "x") {
        resultText.textContent = "PLAYER 1 WINS!"
    } else {
        resultText.textContent = "PLAYER 2 WINS!"
    }
    
}

//displays result on the screen when 0 wins
function winO() {
    OScore++;
    scoreO.textContent = OScore;
    resultBoard.style.display = "flex";
    xTakes.style.display = "none"
    tied.style.display = "none";
    if(player1 == "o") {
        resultText.textContent = "PLAYER 1 WINS!"
    } else {
        resultText.textContent = "PLAYER 2 WINS!"
    }
}

//displays result on the screen when ties
function makeTie() {
    tieScore++;
    scoreTie.textContent= tieScore;
    resultBoard.style.display = "flex";
    oTakes.style.display = "none"
    xTakes.style.display = "none"
}

function quitGame() {
    
}

