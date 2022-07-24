"use strict";
class AccountParm {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
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
let accountParm = new AccountParm(1, 'Yoga Julian', 0);
accountParm.deposit(1000);
console.log(accountParm.getBalance());
console.log(accountParm);
console.log(typeof accountParm);
console.log(accountParm instanceof AccountParm);
//# sourceMappingURL=oop-access-parameter-properties.js.map