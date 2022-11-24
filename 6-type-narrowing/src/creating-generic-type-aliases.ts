//Generic type alias syntax
/*type TypeName<T1, T2, ...> = {
    
} */

//Generic type alias example
type Formulir <T> = {
    error: {[K in keyof T]?: string};
    values : T;
}

interface ContactP {
    name: string;
    email: string;
    age: string;
}

const contactFormulir : Formulir <ContactP>= {
    error: {
        age: "This mush be a valid email address",
        //usia: 90;  //error karena usia tidak terdapat di type of error properties
    },
    values: {
        name: "Yoga",
        email: "yoga@someemail.com",
        age: "sepuluh"
    }
}