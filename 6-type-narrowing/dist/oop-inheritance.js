"use strict";
class People {
    constructor(namaDepan, namaAkhir) {
        this.namaDepan = namaDepan;
        this.namaAkhir = namaAkhir;
    }
    get namaLengkap() {
        return this.namaDepan + ' ' + this.namaAkhir;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends People {
    constructor(studentId, namaDepan, namaAkhir) {
        super(namaDepan, namaAkhir);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log('Taking a test');
    }
}
class Teacher extends People {
    get namaLengkap() {
        return 'Professor ' + super.namaLengkap;
    }
}
class Principal extends People {
    get namaLengkap() {
        return 'Principal ' + super.namaLengkap;
    }
}
printNames([
    new Student(1, 'Yoga', 'Prasutiyo'),
    new Teacher('Yoga Julian', 'Prasutiyo'),
    new Principal('Muzdahir', 'Yoga Julian')
]);
function printNames(peoples) {
    for (let person of peoples)
        console.log(person.namaLengkap);
}
//# sourceMappingURL=oop-inheritance.js.map