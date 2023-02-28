const chooseX = document.querySelector("#button-x");
const chooseY = document.querySelector("#button-o");
const buttons = document.querySelector(".buttons");
const home = document.querySelector("#home");
const board = document.querySelector("#board");
const icon = document.querySelectorAll(".xo");
const changeTurn = document.querySelectorAll(".turn img")[0];


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
            } else if (turn == "o" && target.classList.contains("addX") != true && target.classList.contains("addO") != true) {
                target.classList.add("addO")
                changeTurn.src = "./assets/silver-x.svg"
                turn = "x"
                target.parentElement.classList.remove("hoverO");
                target.parentElement.classList.add("hoverX");
            }
            newArr.push(turn);
        })
    });
}








