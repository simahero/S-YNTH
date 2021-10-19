const router = require('express').Router();

module.exports = (connection) => {

	router.post('/subscribe', ((req, res) => {
        let email = req.body.email;
    }))

    router.post('/unsubscribe', ((req, res) => {
        let email = req.body.email;
    }))

	return router;

}