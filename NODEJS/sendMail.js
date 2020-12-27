module.exports = {
    sendMails: async function (transporter, from, to, subject, text, html) {
        let info = await transporter.sendMail({
            from: from,
            to: to, 
            subject: subject, 
            text: text, 
            html: html,
        });
    }
};