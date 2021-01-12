const router = require('express').Router();
const verify = require('../../Utils/Verification');
const nodemailer = require('nodemailer');
const getTransporter = require('../../Utils/NodemailerTest');
const JSON2Mail = require('../../Utils/JSON2Mail');
const SQLPromise = require('../../Utils/SQLPromise');

module.exports = (connection) => {

    router.get('/send', async (req, res) => {

        let template_id = req.query.id;
        let html = '';

        if (template_id) {
            await SQLPromise.query(connection, 'SELECT content FROM templates WHERE id = ? LIMIT 1', [template_id])
                .then(result => {
                    html = JSON2Mail(JSON.parse(result[0].content))
                    console.log(html)
                })
                .catch(err => console.log(err))
        } else {
            res.status(500).send('Internal server error!')
        }

        console.log("wqaited")

        getTransporter().then(transporter => {

            var mailOP = {
                from: "me",
                to: "zoilei7@gmail.com",
                subject: "test",
                html: html.toString()
            }

            transporter.sendMail(mailOP)
                .then(info => {
                    console.log(nodemailer.getTestMessageUrl(info))
                    return res.status(200).send({preview: nodemailer.getTestMessageUrl(info)})
                })
                .catch(err => console.log(err))
        })
            .catch(err => console.log(err))
    })


    return router;

}