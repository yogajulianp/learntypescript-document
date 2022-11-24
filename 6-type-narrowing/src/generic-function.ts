//-----fungsi generic
/*function dataDiArray<T>(value: T) {
    return [value]
}

let nilaiDiArray = dataDiArray(1)
console.log(nilaiDiArray)*/

//-----fungsi generic di dalam class-----fungsi generic di dalam class
/*class ArrayUtils{
    dataDiArray<T>(value: T) {
        return [value]
    }
    
}
let utils = new ArrayUtils();
let nilaiDiArray = utils.dataDiArray('1')
console.log(nilaiDiArray)*/

//-----static fungsi generic di dalam class
class ArrayUtils{
    static dataDiArray<T>(value: T) {
        return [value]
    }
    
}

let nilaiDiArray = ArrayUtils.dataDiArray(1)
console.log(nilaiDiArray)