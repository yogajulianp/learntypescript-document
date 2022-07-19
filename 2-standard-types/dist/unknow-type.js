"use strict";
function tambah(a, b) {
    if (typeof a === "number" && b === "number") {
        return a + b;
    }
    return 0;
}
console.log(tambah(50, 4));
