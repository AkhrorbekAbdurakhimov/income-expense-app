const path = require('path')
const {fetch} = require('./../../database')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'income.html'))
}

const POST = async (req, res) => {
    let query = `
        INSERT INTO incomes (
            reason,
            amount,
            date
        ) VALUES ('${req.body.reason}', ${req.body.amount}, CURRENT_TIMESTAMP) RETURNING *;
    `
    let income = await fetch(query)
    res.status(200).send({
        message: 'A new income added successfully',
        body: income
    })
}

const INCOMES = async (req, res) => {
    let query = `SELECT id, reason, amount, TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as date FROM incomes;`
    let incomes = await fetch(query)
    res.json(incomes)
}

const DELETE = async (req, res) => {
    let query = `delete from incomes where id = ${Number(req.body.id)};`
    fetch(query)
    res.status(200).send({
        message: 'A income deleted successfully'
    })
}

const PUT = async (req, res) => {
    console.log(req.body);
    let query = `UPDATE incomes SET reason = '${req.body.reason}', amount = ${Number(req.body.amount)} WHERE id = ${Number(req.body.id)};`
    fetch(query)
    res.status(200).send({
        message: 'A income updated successfully'
    })
}

module.exports = {GET, DELETE, PUT, POST, INCOMES}