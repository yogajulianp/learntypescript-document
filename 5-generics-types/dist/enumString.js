"use strict";
var Peringkat;
(function (Peringkat) {
    Peringkat["Hight"] = "H";
    Peringkat["Medium"] = "M";
    Peringkat["Low"] = "L";
})(Peringkat || (Peringkat = {}));
let peringkat;
peringkat = Peringkat.Low;
peringkat = Peringkat.Hight;
console.log(Peringkat);
console.log('low peringkat bernilai ', peringkat);
const prints = function () {
    console.log("print");
};
prints();
//# sourceMappingURL=enumString.js.map