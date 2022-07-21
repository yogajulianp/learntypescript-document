class KeyValuePair {
    constructor(public key:number, public value:string) {}
}

class StringValuePair {
    constructor(public key:string, public value:string) {}
}

let pair = new KeyValuePair(1,'Mango')
pair.key

let nilai = new StringValuePair('1','Mango')
nilai.key