const accounts = [
    {number: 'CM123', balance: 5000},
    {number: 'LP456', balance: 6000},
    {number: 'CA789', balance: 800},
    {number: 'BP101', balance: 3000},
    {number: 'SG121', balance: 9000},
    {number: 'PR010', balance: 30000}]

export class AccountRepository {
    async get(accountNumber) {
        return accounts.find(account => account.number === accountNumber.toUpperCase())
    }

    async makeTransaction(debitAccountNumber, creditAccountNumber, amount) {
        const debitAccountIndex = this.getAccountIndex(debitAccountNumber)
        const creditAccountIndex = this.getAccountIndex(creditAccountNumber)
        if (accounts[debitAccountIndex].balance >= amount) {
            accounts[debitAccountIndex].balance -= amount
            accounts[creditAccountIndex].balance += amount
        }
    }

    getAccountIndex(accountNumber) {
        return accounts.findIndex((account => account.number === accountNumber))
    }
}
