const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const auth = require('./Routes/Auth/Auth')
const api = require('./Routes/Database/API');
const subscription = require('./Routes/Database/Subscription');
const analytics = require('./Routes/Database/Track')
const mail = require('./Routes/Database/Mail')


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





const app = express();

//MIDDLEWARES SETUP
app.use(cors());
app.use(express.static(path.join(__dirname, '../REACTJS/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
app.use('/api/v1/auth', auth(connection));
app.use('/api/v1', api(connection));
app.use('/api/v1/mail', mail(connection))
app.use('/api/v1/subscription', subscription(connection));
app.use('/api/v1/analytics', analytics(connection));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../REACTJS/build/index.html'));
});


app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});