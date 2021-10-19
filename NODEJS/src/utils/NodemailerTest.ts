import { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const nodemailer = require('nodemailer');

export default function getTransporter() {
    return new Promise<Transporter<SMTPTransport.SentMessageInfo>>  ((resolve, reject) => {
        nodemailer.createTestAccount((err: Error, account: any) => {
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