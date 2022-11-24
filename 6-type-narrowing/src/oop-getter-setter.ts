//membuat class akun Bank

class AccountBCAS {
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

    // getBalance(): number {
    //     return this._balance;
    // }
    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value < 0)
            throw new Error('Invalid Error, karena salah nilai')
        this._balance = value;
    }
}

let accountBCAS = new AccountBCAS(1, 'Yoga Julian', 0);
accountBCAS.deposit(1000);
console.log(accountBCAS.balance);
console.log(accountBCAS);
console.log(typeof accountBCAS);
console.log(accountBCAS instanceof AccountBCAS);
accountBCAS.balance=-1;
console.log(accountBCAS.balance)