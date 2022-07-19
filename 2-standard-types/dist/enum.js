"use strict";
var Level;
(function (Level) {
    Level[Level["Hight"] = 0] = "Hight";
    Level[Level["Medium"] = 1] = "Medium";
    Level[Level["Low"] = 2] = "Low";
})(Level || (Level = {}));
let level;
level = Level.Low;
console.log(Level);
console.log('low level bernilai ', level);
