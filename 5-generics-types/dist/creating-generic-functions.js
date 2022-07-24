"use strict";
function firstOrNull(array) {
    return array.length === 0 ? null : array[0];
}
firstOrNull(["Rod", "Jane", "Fred"]);
firstOrNull([1, 2, 3]);
const first = firstOrNull([1, 4, 7]);
console.log(first);
//# sourceMappingURL=creating-generic-functions.js.map