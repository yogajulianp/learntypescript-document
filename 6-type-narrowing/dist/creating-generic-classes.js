"use strict";
class List {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
}
const numberList = new List();
const output = numberList.add('1');
console.log(output);
//# sourceMappingURL=creating-generic-classes.js.map