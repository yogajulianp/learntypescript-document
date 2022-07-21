class KeyValueInput<K, V> {
    constructor(public key:K, public value:V) {}
}

let inputString = new KeyValueInput<string, string>('0', 'buah');
inputString.value

let input  = new KeyValueInput(1,'Mango');


input.key

