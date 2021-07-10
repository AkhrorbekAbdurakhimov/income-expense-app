const incomeRoute = require('express').Router()
const {GET, POST, DELETE} = require('./controller')

incomeRoute.route('/income')
    .get(GET)
    .post(POST)

incomeRoute.route('/income/delete/:incomeId')
    .get(DELETE)

module.exports = incomeRoute