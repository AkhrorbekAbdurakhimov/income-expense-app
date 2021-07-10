const {fetch, fetchAll} = require('./../../lib/postgres')

const Incomes = `
    SELECT 
        id, 
        reason, 
        amount, 
        TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS')
    AS date FROM incomes;
`

const Insert_Income = `
    INSERT INTO incomes (
        reason,
        amount,
        date
    ) VALUES ($1, $2, CURRENT_TIMESTAMP)
    RETURNING * 
`

const Delete_Income = `
    DELETE FROM incomes
    WHERE id = $1
`

const getIncomes = () => fetchAll(Incomes)
const insertIncome = ({reason, amount}) => fetch(Insert_Income, reason, Number(amount))
const deleteIncome = ({incomeId}) => fetch(Delete_Income, incomeId)

module.exports = {getIncomes, insertIncome, deleteIncome}