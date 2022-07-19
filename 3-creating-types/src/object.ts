//membuat object pada typeScript

let karyawan : {
    readonly id: number, 
    name: string,
    fungsi: (date:Date) => void //kasih return void bila tdk return apapun 
} = {
    id: 1,
    name: "Yoga Julian",
    fungsi: (date:Date) => {
        console.log(date);
    }
}

console.log(karyawan)