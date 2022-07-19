//Understanding an intersection type
type Name = {
    firstName: string;
    lastName: string;
};
type PhoneNumber = {
    landline: string;
    mobile: string;
};
  type Email = {
    emailAddress: string;
};
  
type Contact = Name & PhoneNumber & Email;

const fred: Contact = {
    firstName: "Fred",
    lastName: "Smith",
    landline: "0116 4238978",
    mobile: "079543 4355435",
    emailAddress: "emailnya@gmail.com"
}

//Intersection of common members
type BaseElement = {
    name: string;
    kind: "text" | "number" | "email";
};
type TextInput = {
    kind: "text";
};

type Field = BaseElement & TextInput;

const umur: Field = {
    name: "Ages",
    //kind: "number", //error
    kind: "text"
}

//Jika common member of an intersection type is a function:
type A = {
    doIt: (a: string) => void;
};

type B = {
    doIt: (a: string, b: string) => void;
};

type A_and_B = A & B;

const ab_v1: A_and_B = {
    doIt: (a: string) => {}
}

// const ab_v2: A_and_B = {
//    doIt: (a: string, b: string) => {}
// }