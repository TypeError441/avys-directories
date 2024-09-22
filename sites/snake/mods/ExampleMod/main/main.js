import { editVal, getVal } from "../../../main/assets/data.js";

var snakeColor = 0;

export function run() {
    editVal("FPS", 5);
    // This sets the fps to 5.
    
    editVal("EXPANSION_RATE", 5);
    // This makes it so that if you eat food you grow by 5 squares.
    
    editVal("FOOD_AMOUNT", 20);
    // This makes it so that a max of 20 food can spawn.
    
    editVal("SNAKE_COLOR", "rgb(0, 0, 0)");
    // This changes the snake's color to black.
    
    editVal("FOOD_COLOR", "rgb(255, 255, 255)");
    // This changes the food's color to pastel red.
    
    editVal("BACKGROUND_COLOR", "rgb(0, 255, 255)");
    // This changes the background color to turquoise.
}

export function update() {
    // This happens every frame
    snakeColor += 5;
    
    editVal("SNAKE_COLOR", `hsl(${snakeColor}, 100%, 50%)`);
    // This changes the snake's color to rainbow.
}