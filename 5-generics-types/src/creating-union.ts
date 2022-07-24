//Understanding a union type

type Ages = number | null| undefined;

let ages: Ages;
ages = null;
ages = 30;
ages = undefined;
console.log(ages);

//String literal union types
type Fruit = "Banana" | "Apple" | "Pear";
let fruit: Fruit;

fruit = "Apple";
// fruit = "pear";
// fruit = "strawberry";


//Object union types
type Actions = {type: "loading"} | {type: "loaded"; data: {name:string}};
const loadingAction: Actions = {type: "loading"}