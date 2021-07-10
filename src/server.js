const express = require('express')
const ejs = require('ejs')
const app = express()
const path = require('path')

const {host, PORT} = require('./config')

// ejs 
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

// loading middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

// loading modules
const modules = require('./modules')
app.use(modules)

app.listen(PORT, () => console.log(`Server is running on http://${host}:${PORT}`))