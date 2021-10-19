import express from 'express';
import nodemailer, { Transporter } from 'nodemailer';
import getTransporter from '../../Utils/NodemailerTest';
import JSON2Mail from '../../Utils/JSON2Mail';

import { query } from '../database/Database'
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const router = express.Router();

router.get('/send', async (req, res) => {

    let template_id = req.query.id;
    let html = '';

    if (template_id) {
        await query('SELECT content FROM templates WHERE id = ? LIMIT 1', [template_id])
            .then(result => {
                html = JSON2Mail(JSON.parse(result[0].content))
                console.log(html)
            })
            .catch(err => console.log(err))
    } else {
        res.status(500).send('Internal server error!')
    }

    getTransporter()
        .then((transporter: Transporter<SMTPTransport.SentMessageInfo>) => {

            var mailOP = {
                from: "me",
                to: "zoilei7@gmail.com",
                subject: "test",
                html: html.toString()
            }

            transporter.sendMail(mailOP)
                .then((info: any) => {
                    console.log(nodemailer.getTestMessageUrl(info))
                    return res.status(200).send({ preview: nodemailer.getTestMessageUrl(info) })
                })
                .catch(err => console.log(err))
        })
        .catch((err: Error) => console.log(err))
})


export = router;