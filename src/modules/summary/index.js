const express = require('express')
const {GET, SUM} = require('./controller')

const summaryRoute = express.Router()
summaryRoute.route('/summary')
    .get(GET)

summaryRoute.route('/summaries')
    .get(SUM)

module.exports = summaryRoute