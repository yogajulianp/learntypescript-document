"use strict";
class Ojol {
    start() { Ojol._activeOjol++; }
    stop() { Ojol._activeOjol--; }
    static get activeOjol() {
        return Ojol._activeOjol;
    }
}
Ojol._activeOjol = 0;
let ojol1 = new Ojol();
ojol1.start();
let ojol2 = new Ojol();
ojol2.start();
console.log(Ojol.activeOjol);
//# sourceMappingURL=oop-static-members.js.map