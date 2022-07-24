//Basic type compatibility
let namaDepan: string = "Fred";
let usia: number = 30;
//namaDepan = age; //error karena number ga bisa diinput ke string

console.log(namaDepan);

let jones: "Tom" | "Bob" = "Tom";
let jane: string = "Jane";
jane = jones

//jones = jane  // error karena jones lebih sempit cangkupannya hanya type "Tom" | "Bob", sedangkan jane adalah type string,
//tipe yang lebih besar tidak bisa diassign ke tipe yang lebih kecil

//Object type compatibility
type Person = {
    name: string;
    
};
interface IPerson {
    name: string;
    age: number;
}
  
let boboo: Person = {
    name: "Boboo",
    
};
let fredian: IPerson = {
    name: "Fredian",
    age: 29,
    
};

boboo = fredian;

//contoh lain Object type compatibility
type Dog = {
    name: string;
};
type Shape = {
    name: "Circle" | "Square";
};
let ben: Dog = {
    name: "Ben",
};
let circle: Shape = {
    name: "Circle",
};

ben= circle

//Function type compatibility
let add = (a: number, b: number, c: number): number => a + b + c;
let sum = (x: number, y: number): number => x + y;
add = sum;






// let add = (a: number, b: number, c?: number): number => a + b + (c||0);
// let sum = (x: number, y: number): number => x + y;
// sum = add;








