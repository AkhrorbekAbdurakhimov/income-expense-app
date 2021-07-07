const express = require('express')
const app = express()
const path = require('path')

const {host, PORT} = require('./config')

// loading middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

// loading modules
const modules = require('./modules')
app.use(modules)

app.listen(PORT, () => console.log(`Server is running on http://${host}:${PORT}`))