type Animal = {
    name: string;
    legs: number;
};

function addLeg(animal: Animal) {





    animal.legs = animal.legs + 1; //objek ada juga kemungkinan undefined
}