"use strict";
class Gambar {
    constructor(color) {
        this.color = color;
    }
}
class Lingkaran extends Gambar {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('rendering lingkaran');
    }
}
//# sourceMappingURL=oop-abstract-classes-and-methods.js.map