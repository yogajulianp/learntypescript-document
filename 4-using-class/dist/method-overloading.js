"use strict";
class Alat {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Alats {
    constructor() {
        this.Alats = [];
    }
    add(Alat) {
        this.Alats.push(Alat);
    }
    filter(name, price) {
        if (price === undefined) {
            return this.Alats.filter(Alat => Alat.name === name);
        }
        else {
            return this.Alats.filter((Alat) => Alat.name === name && Alat.price === price);
        }
    }
}
const alats = new Alats();
alats.add(new Alat("Table", 400));
alats.add(new Alat("Chair", 100));
alats.add(new Alat("Lamp", 30));
console.log(alats);
console.log(alats.filter("Table"));
//# sourceMappingURL=method-overloading.js.map