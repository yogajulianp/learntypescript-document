class SeatAssigmentVenue {
    // A1, A2, ...
    // Yoga, Julian, ...
    // A1: string;
    // A2: string; // 'Yoga Julian Prasutiyo'
    // Index signature property
    [seatNumber: string] : string | number; //yang disimpan bisa tipe data apa saja, mau string, person, objeck bisa
}

let seats = new SeatAssigmentVenue();
seats.A1 = 'Yoga';
seats.A2 = 'Julian';
seats['A3'] = 'Prasutiyo';
seats.A4 = 'Muzdahir'
seats['A5'] = 15;
seats.A6 = 16;
seats.A7 = 27;
//seats.A5 = 1    //error karena kita hanya setting string untuk data yang disimpan pada [seatNumber: string] : string
console.log(seats)
