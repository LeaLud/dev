//Práctica juego de la serpiente

const board = document.getElementById('board');
const gameInfo = document.getElementById('gameInfo');
const restartButton = document.getElementById('startButton');
const gameOverMessage = document.getElmenetById('gameOverMessage')

//Características del juego
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 0,
    foodSquare: 0
};

const directionals = {
    arrowUp: -10,
    arrowDown: +10,
    arrowLeft: -1,
    arrowRight: 1
};

//Variables
let snake;
let score;
let directional;
let boardSquares;
let emptySquares;
let moveIntervals;

function setGame () {
    snake = ['00', '01', '02', '03'];
    score = snake.length;
    direction = arrowRight;
}

function startGame () {

}

startButton.addEventListener('click', startGame);