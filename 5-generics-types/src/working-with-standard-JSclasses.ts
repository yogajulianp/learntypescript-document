//Implementing fields
class Product {
    //Implementing constructors
    constructor(private name: string, private price: number) {}

    //Implementing methods
    copy(name: string) {
        const copiedProduct = new Product(name, this.price);
        // copiedProduct.name = name;
        // copiedProduct.price = this.price;
        return copiedProduct
    }
    //Implementing static classes
    static equal(product1: { name: string; price: number; }, product2: Product) {
        return product1.name === product2.name && product1.price === product2.price;
    }
}
const table1 = new Product("Table1", 4500000);
const table2 = table1.copy("Table2") //Buat variabel table2 yang ditetapkan ke salinan produk table1 dengan nama 'Table2'.
console.log("table1:" ,table1)
console.log("table2:" ,table2)
//console.log(Product.equal(table1, table2))
//table1.price = 100
console.log(table1)



