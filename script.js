const chooseX = document.querySelector("#button-x");
const chooseY = document.querySelector("#button-o");
const buttons = document.querySelector(".buttons");
const home = document.querySelector("#home");
const board = document.querySelector("#board");
const icon = document.querySelectorAll("#xo");
const changeTurn = document.querySelectorAll(".turn img")[0];


let player1 = "o";
let player2 ="x";
let mode = "cpu";
let turn = "x"

let gameArr = [];

const winPattern = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]

// choose between x and o;
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
} );

// choose mode
function startGame(chooseMode) {
    home.style.display = "none";
    board.style.display = "flex";
    mode = chooseMode;
}

// function hoverBg(elem) {
//     if (turn == "x") {
//         elem.style.backgroundImage = "./assets/icon-x-outline.svg"
//     } else if (turn == "o") {
//         elem.style.backgroundImage = "./assets/icon-x-outline.svg"
//     }
// }

// put x or and on the board;
icon.forEach(element => {
    element.addEventListener("click", (event) => {
        if(turn == "x") {
            event.target.style.backgroundImage = "url(./assets/icon-x.svg)"
            changeTurn.src = "./assets/silver-o.svg"
            turn = "o"
        } else {
            event.target.style.backgroundImage = "url(./assets/icon-o.svg)"
            changeTurn.src = "./assets/silver-x.svg"
            turn = "x"
        }
        gameArr.push(turn);
    })
});

icon.forEach(elem => {
    elem.addEventListener("mouseover", (event) => {
        let targetOver = event.target;
        if(targetOver.classList.contains("turn") == true) {
            targetOver.style.backgroundImage = "./assets/icon-x-outline.svg"
            
        }
        console.log(targetOver.classList.contains("turn") == true)
    } )
})








