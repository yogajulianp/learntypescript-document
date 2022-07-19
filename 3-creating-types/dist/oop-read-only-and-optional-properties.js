"use strict";
class AccountMuamalat {
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
let accountBank = new AccountMuamalat(1, 'Yoga Julian', 0);
accountBank.deposit(1000);
console.log(accountBank.balance);
console.log(accountBank);
console.log(typeof accountBank);
console.log(accountBank instanceof AccountMuamalat);
//# sourceMappingURL=oop-read-only-and-optional-properties.js.map