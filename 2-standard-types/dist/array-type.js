"use strict";
const itemss = [];
itemss.push(1);
itemss.push("two");
itemss.push(false);
console.log(itemss);
const numbers = [20];
numbers.push(1);
console.log(numbers);
const items = [];
items.push(1);
console.log(items);
const urutan = ["one", "two", "three"];
console.log(urutan);
const array = [1, 2, 3];
console.log(array);
function logScores(firstName, ...scores) {
    console.log(firstName, scores);
}
logScores("Benten", 50, 75, 85, 100);
