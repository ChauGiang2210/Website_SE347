const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const database = require('./database')
const cookieParser = require('cookie-parser')


// Config dotenv
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

database.connect()


// Sử dụng cookie-parser để đọc cookie từ request
app.use(cookieParser());

// Cấu hình CORS
const corsOptions = {
  origin: 'http://localhost:3000', // hoặc '*' nếu bạn không quan tâm đến an toàn
  credentials: true,
};

const cors = require('cors')
app.use(cors(corsOptions));

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
