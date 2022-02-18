import { AccountRepository } from './payments/infrastructure/account.repository.js'
import {createPaymentUsecaseFactory} from './payments/domain/create-payment.usecase.js'
import {getBalanceUsecaseFactory} from './payments/domain/get-balance.usecase.js'

const accountRepository = new AccountRepository()
const createPayment = createPaymentUsecaseFactory(accountRepository)
const getBalance = getBalanceUsecaseFactory(accountRepository)

export default {
    CreatePayment: createPayment,
    GetBalance: getBalance,
}
