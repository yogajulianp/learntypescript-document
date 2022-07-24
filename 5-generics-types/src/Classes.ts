//membuat class akun Bank

class AcountBank {
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
