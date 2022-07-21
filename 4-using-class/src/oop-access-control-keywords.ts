//membuat class akun Bank

class AccountCo {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount atau salah masukkan jumlah');
            //record transaksi
        this._balance += amount
    }

    // private calculateTax() {
    // }

    getBalance(): number {
        return this._balance;
    }
}

let accountCo = new AccountCo(1, 'Yoga Julian', 0);
accountCo.deposit(1000);
//accountCo.balance=-1;
console.log(accountCo.getBalance());
//console.log(accountCo.calculateTax());

console.log(accountCo);
console.log(typeof accountCo);
console.log(accountCo instanceof AccountCo);