//Creating a simple tuple
const tomScore: [string, number] = ["Tom", 70];
console.log(tomScore)

/*So, a fixed tuple type annotation can be defined by specifying the types of 
the elements in an array structure: [type1, type2, ...] */

//labelling elements
const tomeScore: [name : string, score: number] = ["Tome", 90];
console.log(tomeScore);

//rest element
const benScores:[string, ...number[]] = ["Ben", 50, 75, 85];
console.log(benScores);

//labelling pada rest element
let yogaScores:[name: string, ...score: number[]] = ["Yoga", 100, 75, 85];
console.log(yogaScores);

yogaScores=["Yoga", 99, 90, 95];
console.log(yogaScores);

//yogaScores=["Yoga", 99, "90", 95];   //error karena beda tipe dengan assigned types