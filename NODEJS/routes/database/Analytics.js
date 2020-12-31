const router = require('express').Router();
const path = require('path');

module.exports = (connection) => {

    router.get('/track', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/track.png'));

        let campaign_id = req.query.campaign_id;
        let audience_id = req.query.audience_id;
        let date = new Date();

        console.log(campaign_id, audience_id, date);
        //http://localhost:5000/api/v1/analytics/track?campaign_id=1&audience_id=1

    })

    router.get('/redirect', (req, res) => {
        res.redirect(req.query.url);

        let campaign_id = req.query.campaign_id;
        let audience_id = req.query.audience_id;
        let link_id = req.query.link_id;
        let date = new Date();

        console.log(req.query.url, campaign_id, audience_id, link_id, date);
        //localhost:5000/api/v1/analytics/redirect?url=https://google.com&campaign_id=1&audience_id=1&link_id=1

    })

    return router;

}