let kecepatan: number | null = null;
let ride = {
    // Falsy di javaScript (undifined, null, '', false, 0)
    //kecepatan: kecepatan !== null ? kecepatan : 30

    //Nullish coalescing operator
    kecepatan: kecepatan ?? 30 //artinya, bila dia bukan null atau undefined maka gunakan 30 sebagai default value
}

