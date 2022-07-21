abstract class Gambar {
    constructor(public color: string) {}


    
    
    abstract render() : void;

}

class Lingkaran extends Gambar {
    constructor(public radius: number, color: string){
        super(color);
    }

    override render() : void {
        console.log('rendering lingkaran')
    }

}

//let gambar = new Gambar('red');
//gambar.render();