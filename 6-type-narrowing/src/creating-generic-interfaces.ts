//Generic interface syntax

// interface InferfaceName<T1, T2,...> {

// }

//Generic interface example
interface Form<T> {
    error: { 
        [K in keyof T]?: string; //menambah error property untuk validasi
    }
    values: T;
}

interface ContactP {
    name: string;
    email: string;
    age: string;
}

const contactForm : Form <ContactP>= {
    error: {
        age: "This mush be a valid email address",
        //usia: 90;  //error karena usia tidak terdapat di type of error properties
    },
    values: {
        name: "Yoga",
        email: "bob@someemail.com",
        age: "sepuluh"
    }
}



