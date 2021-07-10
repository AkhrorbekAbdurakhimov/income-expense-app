const model = require('./model')

const GET = async (req, res) => {
    res.render('expense.html', {expenses: await model.getExpenses()})
}

const POST = async (req, res) => {
    try {
        model.insertExpense(req.body)
        res.redirect('/expense')
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

const DELETE = (req, res) => {
    try {
        model.deleteExpense(req.params)
        res.redirect('/expense')
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

module.exports = {GET, POST, DELETE}