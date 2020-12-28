const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const auth = require('./routes/auth/Auth')
const api = require('./routes/database/Database');
const subscription = require('./routes/database/Subscription');
const creation = require('./routes/database/Creation');

const port = process.env.PORT || 3000;

//SQL CONNECTION SETUP
var connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    port: process.env.SQL_PORT,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
});

connection.connect((err) => {
    if (err) console.log(err);
    console.log("Connected!");
});


//NODEMAILER CONNECTION SETUP
var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASSROWRD, 
    },
    tls: {
        rejectUnauthorized: false,
    }
  });

const app = express();
const router = express.Router();

//MIDDLEWARES SETUP
app.use(cors());
app.use(express.static(path.join(__dirname, '../REACTJS/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
app.use('/api/v1/auth', auth(connection));
app.use('/api/v1/get', api(connection));
app.use('/api/v1/subscription', subscription(connection));
app.use('/api/v1/create', creation(connection));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../REACTJS/build/index.html'));
});


app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});