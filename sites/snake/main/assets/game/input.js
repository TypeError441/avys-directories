import { INPUT_KEYS } from "../data.js"
var inputDir = { x: 0, y: 0 }
var lastInputDir = { x: 0, y: 0 }

window.addEventListener("keydown", e => {
    switch(e.key) {
        case INPUT_KEYS[0]:
            if(lastInputDir.y !== 0) break;
            inputDir = { x: 0, y: 1 };
            break;

        case INPUT_KEYS[1]:
            if(lastInputDir.x !== 0) break;
            inputDir = { x: -1, y: 0 };
            break;

        case INPUT_KEYS[2]:
            if(lastInputDir.y !== 0) break;
            inputDir = { x: 0, y: -1 };
            break;

        case INPUT_KEYS[3]:
            if(lastInputDir.x !== 0) break;
            inputDir = { x: 1, y: 0 };
            break;
    }
});

export function getInputDirection() {
    lastInputDir = inputDir
    return inputDir;
}