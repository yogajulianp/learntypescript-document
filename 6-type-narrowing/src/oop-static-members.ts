class Ojol {
    private static _activeOjol: number= 0;

    start() { Ojol._activeOjol ++ ;}
    stop() { Ojol._activeOjol -- ;}

    static get activeOjol(){  //diawali static supaya get method juga masuk sebagai class, bukan objek this.
        return Ojol._activeOjol
    }
}

//Ojol.activeOjol=10  //setelah di private, maka static tidak bisa di akses dengan ini

let ojol1 = new Ojol();
ojol1.start();

let ojol2 = new Ojol();
ojol2.start();

console.log(Ojol.activeOjol);
