"use strict";
class AcountBank {
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
//# sourceMappingURL=Classes.js.map