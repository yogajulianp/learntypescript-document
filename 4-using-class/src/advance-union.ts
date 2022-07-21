function conversiMass(weight: number | string) : number {
    // kg ke gram
    // Narrowing
    if (typeof weight === 'number')
        return weight * 1000;
    else
        return parseInt(weight) * 1000
}

const num = conversiMass(9);
console.log(num);

const kalimat = conversiMass('9 kg');
console.log(kalimat)