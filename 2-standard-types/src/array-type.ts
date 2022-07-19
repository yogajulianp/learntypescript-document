const itemss = [];
itemss.push(1);
itemss.push("two");
itemss.push(false);

console.log(itemss);

// const numbers: Array<number> = [];
// numbers.push(1);
// numbers.push("two");
// numbers.push(false);

const numbers: Array<number> = [20]
numbers.push(1);
//numbers.push("semangat");
//numbers.push(false);

console.log(numbers)


//menulis array dengan kurung siku
const items: number[] = [];
items.push(1);
console.log(items)

const urutan: string[] = ["one", "two", "three"];
console.log(urutan)


//menggunakan inference pada array
const array = [1, 2, 3];
console.log(array);

//rest parameter
function logScores(firstName: string, ...scores: number[]) {
    console.log(firstName, scores);
  }
  
  logScores("Benten", 50, 75, 85, 100); // outputs Ben and [50, 75, 85]
  //logScores("Benten", 50, 75, 85, "90"); // error karena ada elemen string di array number