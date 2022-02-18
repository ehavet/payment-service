import express from 'express'
const router = express.Router()
import container from './container.js'
import paymentsEndpoints from './payments/api/v0/payments.api.js'

export default paymentsEndpoints(router, container)
