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
const analytics = require('./routes/database/Analytics')

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
app.use('/api/v1/analytics', analytics(connection));

app.get('/test', (req, res) => {

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        var tr = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass  // generated ethereal password
            }
        });

        var mailOP = {
            from: "me",
            to: "zoilei7@gmail.com", 
            subject: "test", 
            html: "<div><img src='http://localhost:5000/api/v1/analytics/track?campaign_id=testC&audience_id=testA'><a target='_blank' href='http://localhost:5000/api/v1/analytics/redirect?url=https://google.com&campaign_id=1&audience_id=1&link_id=1'>TEST LINK </a></div>"
        }
    
        tr.sendMail(mailOP).then(info=>{
            console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
        });

    });

})

/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../REACTJS/build/index.html'));
});
*/

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});