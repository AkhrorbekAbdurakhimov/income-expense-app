const expenseRoute = require('express').Router()
const {GET, POST, DELETE} = require('./controller')

expenseRoute.route('/expense')
    .get(GET)
    .post(POST)

expenseRoute.route('/expense/delete/:expenseId')
    .get(DELETE)

module.exports = expenseRoute