//membuat object pada typeScript dengan Alias
type Pegawai = {
    readonly id: number, 
    name: string,
    fungsi: (date:Date) => void //kasih return void bila tdk return apapun 
}

let pegawai : Pegawai = {
    id: 1,
    name: "Yoga Julian",
    fungsi: (date:Date) => {
        console.log(date);
    }
}

console.log(pegawai)