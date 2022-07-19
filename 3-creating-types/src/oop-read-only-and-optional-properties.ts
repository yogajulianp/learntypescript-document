//membuat class akun Bank

class AccountMuamalat {
    readonly id: number;
    owner: string;
    balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount atau salah masukkan jumlah');
        this.balance += amount
        
    }
}

let accountBank = new AccountMuamalat(1, 'Yoga Julian', 0);
accountBank.deposit(1000);
console.log(accountBank.balance);
console.log(accountBank);
console.log(typeof accountBank);
console.log(accountBank instanceof AccountMuamalat);