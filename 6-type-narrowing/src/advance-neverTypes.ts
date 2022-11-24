function reject(message: string): never {
    throw new Error(message)
}

function processEvents(): never {
    while (true) {
        // membaca data atau pesan dari queue
        console.log('loop true')
    }
}

//processEvents();
//reject('tidak jalan[error]...')
console.log('ini sintak setelah never looping atau looping tak hingga')