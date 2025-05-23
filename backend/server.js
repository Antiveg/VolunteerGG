require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./routes/routes')
const path = require('path')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(cookieParser())

app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.options('*', cors());
app.use('/uploads', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.CLIENT_ORIGIN);
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}, express.static(path.join(__dirname, 'uploads')));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(router)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});