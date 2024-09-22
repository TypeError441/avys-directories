// Public editable variables
export var FPS = 2;
export var EXPANSION_RATE = 1;
export var FOOD_AMOUNT = 5;
export var GRID_SIZE = 21;
export var BACKGROUND_COLOR = "#ffffff";
export var SNAKE_COLOR = "#82c1ff";
export var FOOD_COLOR = "#82c1ff";
export var BOARD_LOOPS = false;
export var INPUT_KEYS = [
    "w",
    "a",
    "s",
    "d"
];

export function editVal(type, value = "*", extra = 0, cssExtra) {
    if(type == "FPS") FPS = value;
    else if(type == "EXPANSION_RATE") EXPANSION_RATE = value;
    else if(type == "FOOD_AMOUNT") FOOD_AMOUNT = value;
    else if(type == "BACKGROUND_COLOR") {
        BACKGROUND_COLOR = value;
        $(":root").css("--background-color", BACKGROUND_COLOR)
    }
    else if(type == "SNAKE_COLOR") {
        SNAKE_COLOR = value;
        $(":root").css("--snake-color", SNAKE_COLOR)
    }
    else if(type == "FOOD_COLOR") {
        FOOD_COLOR = value;
        $(":root").css("--food-color", FOOD_COLOR)
    }
    else if(type == "INPUT_KEYS") INPUT_KEYS[extra] = value;
    else if(type == "CSS_EDIT") $(value).css(extra, css);
    else if(type == "BOARD_LOOPS") BOARD_LOOPS = value;
    else alert(`Function "editVal()" failed. Invalid type: ${type}`);
}

export function getVal(type, extra = 0) {
    if(type == "FPS") return FPS;
    else if(type == "EXPANSION_RATE") return EXPANSION_RATE;
    else if(type == "FOOD_AMOUNT") return FOOD_AMOUNT;
    else if(type == "BACKGROUND_COLOR") return BACKGROUND_COLOR;
    else if(type == "SNAKE_COLOR") return SNAKE_COLOR;
    else if(type == "FOOD_COLOR") return FOOD_COLOR;
    else if(type == "INPUT_KEYS") return INPUT_KEYS[extra];
    else if(type == "BOARD_LOOPS") return BOARD_LOOPS;
    else alert(`Function "getVal()" failed. Invalid type: ${type}`);
}