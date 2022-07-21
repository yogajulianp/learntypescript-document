class Alat {
    constructor(public name: string, public price: number) {}
  }
  class Alats {
    private Alats: Alat[] = [];
    add(Alat: Alat) {
      this.Alats.push(Alat);
    }
    filter(name: string): Alat[]
    filter(name: string, price: number) : Alat[]
    filter(name: string, price?: number) : Alat[] {
      if (price === undefined) {
        return this.Alats.filter(Alat => Alat.name === name);
      } else {
        return this.Alats.filter(
          (Alat) => 
            Alat.name === name && Alat.price === price
        );
      }
    }
  }
  
  const alats = new Alats();
  alats.add(new Alat("Table", 400));
  alats.add(new Alat("Chair", 100));
  alats.add(new Alat("Lamp", 30));
  
  console.log(alats)
  console.log(alats.filter("Table"));