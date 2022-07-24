//------------An example function that uses the spread operator
// function merge(names: string[], scores: number[]) {
//     return [...names, ...scores]
// }

//------------Spreading generic tuple parameters to narrow the return type
function merge<Names extends string[], Scores extends number[]> (
   names: Names, 
   scores: Scores
   ) {
    return [...names, ...scores]
}

//-----------ini masih belum narrowing

// function merge<Names extends string[], Scores extends number[]> (
//     names: [...Names], 
//     scores: [...Scores]
//     ) {
//     return [...names, ...scores]
// }
//-----------udah bagus sedikit, tapi ini masih belum narrowing sempurna

// function merge<Names extends string[], Scores extends number[]> (
//     names: [...Names], 
//     scores: [...Scores]
//     ): [...Names, ...Scores] {
//     return [...names, ...scores]
// }

let scores = merge(["Yoga", "Julian"], [9,11]);
