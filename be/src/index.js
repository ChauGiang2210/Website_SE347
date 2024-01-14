const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const database = require('./database')


// Config dotenv
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

database.connect()

// Cors
const cors = require('cors')
app.use(cors())

// Body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Routes
const routes = require('./routes')
routes(app)

// HTTP logger
app.use(morgan('combined'))

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})
