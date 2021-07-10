const {fetch, fetchAll} = require('./../../lib/postgres')

const Expenses = `
    SELECT 
        id, 
        reason, 
        amount, 
        TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS')
    AS date FROM expenses;
`

const Insert_Expense = `
    INSERT INTO expenses (
        reason,
        amount,
        date
    ) VALUES ($1, $2, CURRENT_TIMESTAMP)
    RETURNING * 
`

const Delete_Expense = `
    DELETE FROM Expenses
    WHERE id = $1
`

const getExpenses = () => fetchAll(Expenses)
const insertExpense = ({reason, amount}) => fetch(Insert_Expense, reason, Number(amount))
const deleteExpense = ({expenseId}) => fetch(Delete_Expense, expenseId)

module.exports = {getExpenses, insertExpense, deleteExpense}