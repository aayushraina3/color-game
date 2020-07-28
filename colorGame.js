var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
// var easyBtn = document.getElementById("easyBtn");
// var hardBtn = document.getElementById("hardBtn");
var modeBtn = document.querySelectorAll(".mode");

for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click",function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    })
}

resetBtn.addEventListener("click", function(){
    reset();
});

function reset(){
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        colors[i] ? squares[i].style.display = "block" : squares[i].style.display = "none";
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Game";
    message.textContent = "";
}

// easyBtn.addEventListener("click", function () {
//     this.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function () {
//     this.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })

// resetBtn.addEventListener("click", function () {
//     //generate new random color collection
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//     }
//     h1.style.backgroundColor = "steelblue";
//     this.textContent = "New Game";
//     message.textContent = "";
// });


for (var i = 0; i < squares.length; i++) {
    //add colors
    squares[i].style.backgroundColor = colors[i];

    //add eventListeners
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        //compare colors
        if (pickedColor === clickedColor) {
            message.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
        }
    })
}

//change color for all squares
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//pick random color from array
function pickColor() {
    var idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
}

function generateRandomColor(num) {
    var arr = [];

    //add num random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    //generate random values for r,g,b
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}