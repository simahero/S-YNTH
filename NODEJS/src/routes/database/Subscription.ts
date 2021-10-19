import express from 'express'

const router = express.Router();

router.post('/subscribe', ((req, res) => {
    let email = req.body.email;
}))

router.post('/unsubscribe', ((req, res) => {
    let email = req.body.email;
}))

export = router;