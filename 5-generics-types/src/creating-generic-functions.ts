// function someFunc<T1, T2, ...>(...) {
//     ...
//    }

// const someVar = <T1, T2, ...>(...) => {
//     ...
//    }

// function firstOrNull(array: string[]): string | null {
//     return array.length === 0 ? null : array[0];
// }

function firstOrNull<T>(array:T[]): T | null {
    return array.length === 0 ? null : array[0];
}

firstOrNull<string>(["Rod", "Jane", "Fred"]);
firstOrNull<number>([1,2,3]);

//Type inference on generic functions
const first = firstOrNull([1,4,7]);


console.log(first) //infered dari const first menjadi number| null


