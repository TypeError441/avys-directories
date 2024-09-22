import { onSnake, expandSnake } from "./snake.js";
import { EXPANSION_RATE, FOOD_AMOUNT } from "../data.js";
import { getRandomGridPosition } from "./grid.js";

var foodPieces = [];

export function update() {
    for(var i = 0; i < foodPieces.length; i++) {
        const piece = foodPieces[i];
        if(onSnake(piece)) {
            expandSnake(EXPANSION_RATE);
            foodPieces.splice(i, 1);
        }
    }
    if(foodPieces.length < FOOD_AMOUNT) {
        makeNewFood();
    }
}

export function render(board) {
    foodPieces.forEach(piece => {
        const foodPiece = document.createElement("div");
        foodPiece.style.gridRowStart = piece.y;
        foodPiece.style.gridColumnStart = piece.x;
        foodPiece.classList.add("food");
        board[0].appendChild(foodPiece);
    });
}

function makeNewFood() {
    var pos;
    while(pos == null || onSnake(pos)) {
        pos = getRandomGridPosition();
    }
    foodPieces.push(pos);
    return pos;
}