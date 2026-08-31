class ICICI {
    #balance;
    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }
    
    getBalance() {
        return this.#balance;
    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not Allowed");
        }
    }
}
let bank = new ICICI("Rabi", "1000");
console.log(bank.getBalance());
bank.setBalance(100000, false);
console.log(bank.getBalance());

let rabi_father = new ICICI("Kesab", 5000);
console.log(rabi_father.getBalance());
rabi_father.setBalance(500000, true);
console.log(rabi_father.getBalance());

