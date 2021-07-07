const path = require('path')
const {fetch} = require('./../../database')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'expense.html'))
}

const POST = async (req, res) => {
    let query = `
        INSERT INTO expenses (
            reason,
            amount,
            date
        ) VALUES ('${req.body.reason}', ${req.body.amount}, CURRENT_TIMESTAMP) RETURNING *;
    `
    let expense = await fetch(query)
    res.status(200).send({
        message: 'A new expense added successfully',
        body: expense
    })
}

const EXPENSES = async (req, res) => {
    let query = `SELECT id, reason, amount, TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as date FROM expenses;`
    let expenses = await fetch(query)
    res.json(expenses)
}

const DELETE = async (req, res) => {
    let query = `delete from expenses where id = ${Number(req.body.id)};`
    fetch(query)
    res.status(200).send({
        message: 'A Expense deleted successfully'
    })
}

const PUT = async (req, res) => {
    console.log(req.body);
    let query = `UPDATE expenses SET reason = '${req.body.reason}', amount = ${Number(req.body.amount)} WHERE id = ${Number(req.body.id)};`
    fetch(query)
    res.status(200).send({
        message: 'A expense updated successfully'
    })
}

module.exports = {GET, POST, DELETE, PUT, EXPENSES}