class List<T> {
    private items: T[] = [];
    add(item: T) {
        this.items.push(item);
    }
}

const numberList = new List<string>();
const output = numberList.add('1')
console.log(output);

