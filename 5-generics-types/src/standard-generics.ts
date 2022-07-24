//Understanding the generic type syntax

//Array<T>
let scoresPoint: Array<number>
scoresPoint = [70, 65, 75]
console.log(scoresPoint);

type Coordinate = [number, number];
let coordinates: Array<Coordinate>;

coordinates = [
    //[30, 78, 9],// error karena setiap coordinate hanya punya 2 dimensi
    [100,50],
    [20,50]
];

//Promise<T>
const promisedResponse : Promise<Response> = fetch("https://swapi.dev/api/");
promisedResponse.then((res)=> console.log(res.ok))


//Record<K.V> // generics type multiple parameter

type Hasil = {
    firstName: string;
    surname: string;
    score: number;
};

//type ResultRecord = Record<string, Hasil>
type ResultRecord = Record<"rojd"|"janes"|"freedp",Hasil>
const records: ResultRecord = {
    rojd: {
        firstName: "Rod",
        surname: "James",
        score: 70,
    },
    janes: {
        firstName: "jane",
        surname: "Smith",
        score: 90,
    },
    freedp: {
        firstName: "Freed",
        surname: "Peters",
        score: 70,
    },
    // bobk: {
    //     firstName: "Bob",
    //     surname: "Keel",
    //     score: 70,
    // }  //error karena hanya 3 string objeck yg dibuat typenya, because 'bobk' is outside the type for the record key
};
console.log(records)
