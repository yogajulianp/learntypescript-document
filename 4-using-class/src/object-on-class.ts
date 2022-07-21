//membuat class akun Bank

class AcountBSI {
    id: number;
    owner: string;
    balance: number;

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

let account = new AcountBSI(1, 'Yoga Julian', 0);
account.deposit(1000);
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof AcountBSI);