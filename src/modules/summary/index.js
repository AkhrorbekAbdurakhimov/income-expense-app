const summaryRoute = require('express').Router()
const {GET} = require('./controller')

summaryRoute.route('/summary')
    .get(GET)

module.exports = summaryRoute