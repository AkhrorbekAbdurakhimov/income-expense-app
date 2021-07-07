const {Pool} = require('pg')

let pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '12345',
    database: 'income_expense_db'
})

const fetch = async (query) => {
    let client = await pool.connect()
    try {
        let {rows} = await client.query(query)
        return rows
    } catch (err) {
        console.log(err)
    } finally {
        client.release()
    }
}

module.exports = {fetch}