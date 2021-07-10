const host = 'localhost'
const PORT = process.env.PORT || 7000

const pgConfig = {
    connectionString: "postgres://ahhptrdq:4pfQuAEL-m0QvezkTZRDP3t3AWDIGV-d@batyr.db.elephantsql.com/ahhptrdq"
}

module.exports = {host, pgConfig, PORT}