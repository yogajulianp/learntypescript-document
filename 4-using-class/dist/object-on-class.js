"use strict";
class AcountBSI {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount atau salah masukkan jumlah');
        this.balance += amount;
    }
}
let account = new AcountBSI(1, 'Yoga Julian', 0);
account.deposit(1000);
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof AcountBSI);
//# sourceMappingURL=object-on-class.js.map