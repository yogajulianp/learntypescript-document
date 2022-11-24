"use strict";
function logItems(items) {
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
    log: () => console.log("Save button")
};
function getFieldValue(form, fieldName) {
    return form.values[fieldName];
}
const contactFormCo = {
    values: {
        name: "Yoga",
        email: "yoga@email.com"
    },
};
console.log(getFieldValue(contactFormCo, "name"));
//# sourceMappingURL=generic-parameter-constraints.js.map