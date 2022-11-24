"use strict";
function firstOrNull2(array) {
    return array.length === 0 ? null : array[1];
}
const button = {
    name: "Button",
    props: {
        text: "Save",
    },
    log: () => console.log("Save button"),
};
console.log(button.props.text);
console.log(button.props.text2);
const firstNu = firstOrNull2([9, 3, 5]);
console.log(firstNu);
//# sourceMappingURL=generic-parameter-defaults.js.map