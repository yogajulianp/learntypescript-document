//Given the data below, define a type alias for representing users.
type Users = {
    name : string,
    age: number,
    occupation?: string
}

let users = [
    {
        name: 'John Smith',
        age: 30,
        occupation: 'Software engineer'
    },
    {
        name: 'Kate Müller',
        age: 28
    }
];


//Nomor 2
//Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
type Bird = {
    fly: () => void
};

type Fish = {
    swim: () => void
};

type Pet = Bird | Fish;


//Nomor 3
//Define a type for representing the days of week. Valid values are Monday, Tuesday,etc.
type dayOfWeek = 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu' | 'Minggu';

//Nomor 4
//Simplify the following code snippets:
// let user = getUser() ;
// console.log(user && user.address ? user.address.street : undefined);

// let x = foo !== null && foo !== undefined ? foo : bar();

/*
let user = getUser();
console.log(user?.addres?.street)

let x = foo ?? bar() */


//Nomor 5
//What is the problem in this piece of code?

// let value: unknown = 'a';
// console.log(value.toUpperCase());

let value: unknown = 'a';
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}






