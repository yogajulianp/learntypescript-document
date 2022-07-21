"use strict";
class AccountCo {
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
    getBalance() {
        return this._balance;
    }
}
let accountCo = new AccountCo(1, 'Yoga Julian', 0);
accountCo.deposit(1000);
console.log(accountCo.getBalance());
console.log(accountCo);
console.log(typeof accountCo);
console.log(accountCo instanceof AccountCo);
//# sourceMappingURL=oop-access-control-keywords.js.map