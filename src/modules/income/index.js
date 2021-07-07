const express = require('express')
const {GET, POST, DELETE, PUT, INCOMES} = require('./controller')

const incomeRoute = express.Router()
incomeRoute.route('/income')
    .get(GET)
    .post(POST)
    .delete(DELETE)
    .put(PUT)

incomeRoute.route('/incomes')
    .get(INCOMES)

module.exports = incomeRoute