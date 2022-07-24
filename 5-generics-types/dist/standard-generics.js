"use strict";
let scoresPoint;
scoresPoint = [70, 65, 75];
console.log(scoresPoint);
let coordinates;
coordinates = [
    [100, 50],
    [20, 50]
];
const promisedResponse = fetch("https://swapi.dev/api/");
promisedResponse.then((res) => console.log(res.ok));
const records = {
    rojd: {
        firstName: "Rod",
        surname: "James",
        score: 70,
    },
    janes: {
        firstName: "jane",
        surname: "Smith",
        score: 90,
    },
    freedp: {
        firstName: "Freed",
        surname: "Peters",
        score: 70,
    },
};
console.log(records);
//# sourceMappingURL=standard-generics.js.map