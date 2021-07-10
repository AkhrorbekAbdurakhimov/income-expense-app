const model = require('./model')

const GET = async (req, res) => {
    res.render('summary.html', {total: await model.getTotal()})
}

module.exports = {GET}