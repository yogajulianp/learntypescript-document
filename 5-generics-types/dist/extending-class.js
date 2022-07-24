"use strict";
class Barang {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    log() {
        console.log(this.name, this.price);
    }
}
class Table extends Barang {
    constructor(name, price, legs) {
        super(name, price);
        this.legs = legs;
    }
    log() {
        console.log(this.name, this.price, this.legs);
    }
}
const table = new Table("Meja", 400, 4);
table.log();
//# sourceMappingURL=extending-class.js.map