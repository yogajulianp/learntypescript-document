"use strict";
const keepLogging = (message) => {
    while (true) {
        console.log(message);
    }
};
keepLogging("test");
function processEvents() {
    while (true) {
        console.log('loop true');
    }
}
console.log('ini sintak setelah never looping atau looping tak hingga');
console.log("setelah never");
function neverReached(never) { }
function doSomeAction(status) {
    switch (status) {
        case "Pending":
            break;
        case "Working":
            break;
        case "Complete":
            break;
        case "Canceled":
            break;
        default:
            neverReached(status);
    }
}
doSomeAction("Pending");
