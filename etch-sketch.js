let colour = "Black";

document.addEventListener("DOMContentLoaded", function () {

    createBoard(16);
    let buttonPop = document.querySelector("#popup");
    buttonPop.addEventListener("click", function () {
        let size = getSize();
        createBoard(size);
    })


})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colourDiv);
        board.insertAdjacentElement("beforeend", div);
    }


}

function getSize() {
    let input = prompt("What size grid would you like?")
    let message = document.querySelector("#message");
    if (input === "") {
        message.innerHTML = "Has to be a number brother!";
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Keep it between 0-99 please and thanks."
    }
    else {
        message.innerHTML = "Coming right up!"
        return input;
    }
}

function colourDiv() {
    if (colour == "Random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = 'Black'
    }
}

function setColour(colourChoice) {
    colour = colourChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}