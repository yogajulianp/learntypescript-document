const tomScore : {name: string, score?: number} = {
    name: "Tom",
    score: 70
};
console.log(tomScore);

tomScore.score=76;//bisa dipakai untuk update nilai property karena tipe number terdapat pada type inhered awal
console.log(tomScore)

//tidak bisa ditambahkan karena tidak ada di infered type awal-awal
//tomScore.passed = true;


// const bobScore: { name: string; score: number } = {
//     name: "Bob",
//     score: 80,
//   };
//   const janeScore: { name: string; score: number } = {
//     name: "Jane",
//     score: 90,
//   };