"use strict";
class AccountBCAS {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount atau salah masukkan jumlah');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid Error, karena salah nilai');
        this._balance = value;
    }
}
let accountBCAS = new AccountBCAS(1, 'Yoga Julian', 0);
accountBCAS.deposit(1000);
console.log(accountBCAS.balance);
console.log(accountBCAS);
console.log(typeof accountBCAS);
console.log(accountBCAS instanceof AccountBCAS);
accountBCAS.balance = -1;
console.log(accountBCAS.balance);
//# sourceMappingURL=oop-getter-setter.js.map