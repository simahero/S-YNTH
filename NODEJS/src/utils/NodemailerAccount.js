const nodemailer = require('nodemailer');

module.exports = () => {

    return new Promise((resolve, reject) => {
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
        })
        resolve(transporter);
    })
}