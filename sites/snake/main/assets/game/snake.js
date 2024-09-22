import { getInputDirection } from "./input.js";

const snakeBody = [{ x: 11, y: 11 }];
var newPieces = 0;

export function update() {
    addPieces();

    var inputDir = getInputDirection();
    for(var i = (snakeBody.length) - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDir.x;
    snakeBody[0].y -= inputDir.y;
}

export function render(board) {
    snakeBody.forEach(piece => {
        const snakePiece = document.createElement("div");
        snakePiece.style.gridRowStart = piece.y;
        snakePiece.style.gridColumnStart = piece.x;
        snakePiece.classList.add("snake");
        board[0].appendChild(snakePiece);
    });
}

export function expandSnake(amount) {
    newPieces += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((piece, index) => {
        if(ignoreHead && index == 0) return false;
        return positionsAreEqual(piece, position);
    });
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeTouchedItself() {
    return(onSnake(snakeBody[0], { ignoreHead: true }))
}

export function positionsAreEqual(pos1, pos2) {
    return (
        pos1.x === pos2.x &&
        pos1.y === pos2.y
    );
}

function addPieces() {
    for(var i = 0; i < newPieces; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newPieces = 0;
}