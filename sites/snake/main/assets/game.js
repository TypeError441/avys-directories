import { update as updateSnake, render as renderSnake, getSnakeHead, snakeTouchedItself } from "./game/snake.js"
import { update as updateFood, render as renderFood } from "./game/food.js"
import { outsideGrid } from "./game/grid.js";
import { FPS } from "./data.js"
// Mods
import { runMods } from "../../mods/modhandler.js";
import { updateMods } from "../../mods/modhandler.js";

var lastRenderTime = 0;
var gameOver = false;

function main(currentTime) {
    if(gameOver) {
        if(confirm("You lost! Retry?")) {
            window.location = "/Snake/main";
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / FPS) return;

    lastRenderTime = currentTime;

    update();
    render();
    runMods();
    updateMods();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkForDeath();
}

function render() {
    $(".game-board").html("");
    renderSnake($(".game-board"));
    renderFood($(".game-board"));
}

function checkForDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeTouchedItself();
}
