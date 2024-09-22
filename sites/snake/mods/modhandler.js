// Add your "run()" function to this file like this
import { run as runExampleMod } from "./ExampleMod/main/main.js";

// Add your "update()" function to this file like this
import { update as updateExampleMod } from "./ExampleMod/main/main.js";

export function runMods() {
    runExampleMod();
}

export function updateMods() {
    updateExampleMod();
}