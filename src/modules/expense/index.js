const express = require('express')
const {GET, POST, DELETE, PUT, EXPENSES} = require('./controller')

const expenseRoute = express.Router()
expenseRoute.route('/expense')
    .get(GET)
    .post(POST)
    .delete(DELETE)
    .put(PUT)

expenseRoute.route('/expenses')
    .get(EXPENSES)

module.exports = expenseRoute