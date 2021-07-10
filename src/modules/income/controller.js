const model = require('./model')

const GET = async (req, res) => {
    res.render('income.html', {incomes: await model.getIncomes()})
}

const POST = async (req, res) => {
    try {
        model.insertIncome(req.body)
        res.redirect('/income')
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

const DELETE = (req, res) => {
    try {
        model.deleteIncome(req.params)
        res.redirect('/income')
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

module.exports = {GET, POST, DELETE}