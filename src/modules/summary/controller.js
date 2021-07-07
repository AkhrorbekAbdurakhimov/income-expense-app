const path = require('path')
const {fetch} = require('./../../database')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'summary.html'))
}

const SUM = async (req, res) => {
    let query = `
        select sum(amount) from ${req.query.table};
    `
    let expenses = await fetch(query)
    res.json(expenses)
}

module.exports = {GET, SUM}