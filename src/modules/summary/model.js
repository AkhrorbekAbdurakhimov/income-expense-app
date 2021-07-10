const {fetch, fetchAll} = require('./../../lib/postgres')

const TotalIncome = `
    SELECT
        sum(amount)
    AS total_income FROM incomes;
`

const TotalExpense = `
    SELECT
        sum(amount)
    AS total_expense FROM expenses;
`

const getTotal = async () => {
    const total_income = await fetch(TotalIncome)
    const total_expense = await fetch(TotalExpense)
    return [
        total_income,
        total_expense,
        total_income.total_income - total_expense.total_expense
    ]
}

module.exports = {getTotal}