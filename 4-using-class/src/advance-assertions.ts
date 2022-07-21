let smartphone = document.getElementById('phone')
//HTMLElement

//bentuk sintak assertion, untuk mengambil input user
let smartphone2 = document.getElementById('phone') as HTMLInputElement;
//HTMLInputElement

//smartphone. tidak ada value input
smartphone2.value //bisa dipakai untuk mengambil input element dari user

//bentuk sintak lain assertion
let smartphone3= <HTMLInputElement>document.getElementById('phone')
