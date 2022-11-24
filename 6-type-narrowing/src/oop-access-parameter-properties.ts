//membuat class akun Bank
class AccountParm {
    nickname?: string;

    constructor(
        public readonly id: number, 
        public owner: string,
        private _balance: number) {
    }
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount atau salah masukkan jumlah');
            //record transaksi
        this._balance += amount
    }
   //private calculateTax() {
    //}
    getBalance(): number {
        return this._balance;
    }
}

let accountParm = new AccountParm(1, 'Yoga Julian', 0);
accountParm.deposit(1000);
//accountParm.balance=-1;
console.log(accountParm.getBalance());
//console.log(accountParm.calculateTax());
console.log(accountParm);
console.log(typeof accountParm);
console.log(accountParm instanceof AccountParm);