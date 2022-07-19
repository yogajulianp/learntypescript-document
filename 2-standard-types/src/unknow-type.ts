// function add(a: unknown, b: unknown) {
//     return a + b;
//   }

/*type errors occur on both where a and b are referenced. 
  Variables of type unknown can’t be added together
  Type checking does occur on the unknown type, unlike with the any type.*/

  function tambah(a: unknown, b: unknown) {
    if (typeof a === "number" && b === "number" ) {
        return a + b;
    }
    return 0;
  }


//console.log(add(5,4));
console.log(tambah(50,4));


//Type-safe data fetching

function isPerson(person: any): person is Person {
  return "id" in person && "name" in person;
}

async function getData(path: string): Promise<unknown> {
  const response = await fetch(path);
  return await response.json();
}

type Person = {
  id: string;
  name: string;
};

// async function getPerson(id: string): Promise<Person | null> {
//   const person = await getData("/people/1");
//   if (person) {
//     return person;
//   }
//   return null;
// }

//const today = new Date();
//console.log(today.getWeekDay())


// function logMessage(message: string) {
//   return console.log(message);
// }
