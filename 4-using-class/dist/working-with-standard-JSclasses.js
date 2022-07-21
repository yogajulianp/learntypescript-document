"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    copy(name) {
        const copiedProduct = new Product(name, this.price);
        return copiedProduct;
    }
    static equal(product1, product2) {
        return product1.name === product2.name && product1.price === product2.price;
    }
}
const table1 = new Product("Table1", 4500000);
const table2 = table1.copy("Table2");
console.log("table1:", table1);
console.log("table2:", table2);
console.log(table1);
//# sourceMappingURL=working-with-standard-JSclasses.js.map