const nodemailer = require('nodemailer');

module.exports = () => {

    return new Promise((resolve, reject) => {
        nodemailer.createTestAccount((err, account) => {
            if (err) reject(err)
            if (account) {
                var transport = nodemailer.createTransport({
                    host: 'smtp.ethereal.email',
                    port: 587,
                    secure: false,
                    auth: {
                        user: account.user,
                        pass: account.pass
                    }
                })
                resolve(transport);
            }
        })
    })
}