class Barang {
    constructor(public name: string, public price: number) {}
    log() {
      console.log(this.name, this.price);
    }
}

class Table extends Barang {
    constructor(name: string, price: number, public legs: number) {
        super(name, price)
    }
    override log() {
        console.log(this.name, this.price, this.legs);
      }
}

const table = new Table("Meja", 400, 4)
table.log();