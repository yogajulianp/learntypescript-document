//Using type inference on variable declarations

let score = 10;
console.log(score);
//di infer tipe data number, walau belum ditulis tipe datanya

let dateOfBirth = new Date(1990, 4, 7);
//di infer tipe data Date, walau belum ditulis tipe datanya

//What is the type of firstName? Surely it is string?
const firstName = "Bob";

const age = 31;
const created = new Date(2019, 11, 6);


//type from other varialbe

const lastName = "Smith";
const namaAkhir = lastName; //type "Smith"
let surname = lastName; // type string

const first = "Bob";
const last = "Smith";
const fullName = `${first} ${last}`; // type string

// bila kondisi awal tanpa dikasih nilai
let counter;
counter = 10;



//Using type inference with functions
function add(a: number, b: number) {
    return a + b;
  }
  
  const ten = add(5, 5);// typescript infer/menyimpulkan di tipe data add dan ten adalah number

/*TypeScript can infer the return type of a function. 
TypeScript also infers the type of a variable in a declaration where the assignment is from a function.*/


//What if we don't have type annotations on the function parameters? Try the following example:
function addTen(a) {
    return a + 10;
  }
  
  const fourteen = addTen(4);

  //Both a and the return type of addTen is any. This results in the type of fourteen being any as well.
//TypeScripts inference breaks down on functions when no type annotations are defined on their parameters.

function addNine(a = 1) {
    return a + 10;
  }
  
  const threeteen = addNine(4);


  /*TypeScript can infer the type of a function parameter if it has a default value.
So, it is best practice to include type annotations for function parameters if they don't have default values.*/

let amount: number = 1000;


function logMessage(message: string) {
	...
}
