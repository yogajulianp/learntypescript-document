class People {
    constructor(public namaDepan: string, public namaAkhir : string) { }

    get namaLengkap() {
        return this.namaDepan + ' ' + this.namaAkhir;
    }

    //protected vs private
    protected walk() {
        console.log('Walking')
    }
}

class Student extends People {
    constructor(public studentId: number, namaDepan: string, namaAkhir : string) {
        super(namaDepan, namaAkhir)
    }
    takeTest() {
        this.walk();
        console.log('Taking a test')
    }
}

//method override
class Teacher extends People {
    override get namaLengkap() {
        //return 'Professor ' + this.namaDepan + ' ' + this.namaAkhir;
        return 'Professor ' + super.namaLengkap
    }
}

class Principal extends People {
    override get namaLengkap() {
        //return 'Professor ' + this.namaDepan + ' ' + this.namaAkhir;
        return 'Principal ' + super.namaLengkap
    }
}

//Polymorphism
printNames([
    new Student(1,'Yoga', 'Prasutiyo'),
    new Teacher('Yoga Julian', 'Prasutiyo'),
    new Principal('Muzdahir', 'Yoga Julian')
])

function printNames(peoples: People[]){
    for (let person of peoples)
        console.log(person.namaLengkap);
}





















// let student = new Student(1, 'Yoga', 'Julian Prasutiyo');
// console.log(student.namaLengkap);

// let teacher = new Teacher('Yoga', 'Julian');
// console.log(teacher.namaLengkap);