//Using generic rest element types

type NameAndThings<T extends unknown[]> = [name: string, ...things: T];

let yogaScores : NameAndThings<number[]>;
yogaScores = ["Yoga", 4, 9, 7];
//yogaScores = ["Yoga", 4, "9", 7];
//error karena Type '[string, number, string, number]' is not assignable to type '[name: string, ...things: number[]]'.

let billGrades : NameAndThings<("A"|"B"|"C")[]>

billGrades = ["Bill", "A", "A", "C"];
//billGrades = ["Bill", "A", "D", "C"]; // error karena type D belum dibuat di generic  partikel



//Using generic rest element types in functions (tuple di parameternya)
function logThings<T extends unknown[]> (name: string, ...things: T) {
    console.log({name, things})
}



logThings("Bob", 4, 6, 9);



logThings("Bob", 4, "9", 3);
//logThings<number[]>("Bob", 4, "9", 3)//error karena type logThings sudah ditentukan diawal harus string number, number, number
