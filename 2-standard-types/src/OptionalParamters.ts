// function add(a:number, b:number):number {
//   return a + (b||0);
// }

// const hasil = add(3);// akan ada error karena harus isi 2 parameter
// console.log(hasil)

function added(a:number, b?:number):number {
    return a + (b||0);
  }

const hasil = added(3);
console.log(hasil)