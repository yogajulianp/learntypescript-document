//Parameter constraint syntax
//<T extends ContrainingType>

//contoh, Logable sebagai batasan generic pada generic fungsi
interface Logable {
    log: () => void;
}
function logItems<T extends Logable>(items: T[]): void {
    items.forEach(item => item.log());
}
const heading = {
    name: "Heading",
    props: { text: "Chapter 1" },
    log: () => console.log("Chapter 1 heading"),
};
const buttonT = {
    name: "Button",
    props: { text: "Save" },
    trace: () => console.log("Save button"),
    log: ()=> console.log("Save button")
};

//logItems([heading, buttonT]);

interface FormCo<T> {
    values: T
}

function getFieldValue<T, K extends keyof T> (form: FormCo<T>, fieldName: K) {
    //We have added a second generic parameter called K. 
    //This has a constraint that requires it to be a property name (or key) from type T.
    return form.values[fieldName];
}

const contactFormCo = {
    values: {
        name: "Yoga",
        email: "yoga@email.com"
    },
};

//console.log(getFieldValue(contactFormCo))  // error karena diminta 2 argument
console.log(getFieldValue(contactFormCo , "name"))
//console.log(getFieldValue(contactFormCo , "phone"))  //error karena phone tidak di assign di values properties parameter

