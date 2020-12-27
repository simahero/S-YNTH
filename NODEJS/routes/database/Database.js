const router = require('express').Router();
const verify = require('../../middlewares/Verification');


module.exports = (connection) => {

	router.get('/campaigns', verify, ((req, res) => {
		let user_id = req.user.user_id;
		let campaign_id = req.query.id;

		if (campaign_id) {
			connection.query('SELECT * FROM campaigns WHERE user_id = ? AND id = ?', [user_id, campaign_id], (error, results) => {
				if (error) {
					res.status(500).send('Internal server error!');
				} else {
					res.header("Access-Control-Allow-Origin", "*");
					res.send(JSON.stringify(results));
				}
			});
		} else {
			connection.query('SELECT * FROM campaigns WHERE user_id = ?', [user_id], (error, results) => {
				if (error) {
					res.status(500).send('Internal server error!');
				} else {
					res.header("Access-Control-Allow-Origin", "*");
					res.send(JSON.stringify(results));
				}
			});
		}
	}));

	router.get('/templates', verify, (req, res) => {
		let user_id = req.user.user_id;
		let template_id = req.query.id;

		if (template_id) {
			connection.query('SELECT * FROM templates WHERE user_id = ? AND id = ?', [user_id, template_id], (error, results) => {
				if (error) {
					res.status(500).send('Internal server error!');
				} else {
					res.header("Access-Control-Allow-Origin", "*");
					res.send(JSON.stringify(results));
				}
			});
		} else {
			connection.query('SELECT * FROM templates WHERE user_id = ?', [user_id], (error, results) => {
				if (error) {
					res.status(500).send('Internal server error!');
				} else {
					res.header("Access-Control-Allow-Origin", "*");
					res.send(JSON.stringify(results));
				}
			});
		}
	})

	router.get('/audiences', verify, (req, res) => {
		let user_id = req.user.user_id;

		connection.query('SELECT * FROM audiences WHERE user_id = ?', [user_id], (error, results) => {
			if (error) {
				res.status(500).send('Internal server error!');
			} else {
				res.header("Access-Control-Allow-Origin", "*");
				res.send(JSON.stringify(results));
			}
		});
	})

	router.get('/testaudiences', (req, res) => {

		var tags = req.query.tags;

		if(!tags) return res.status(400).send("No tags declared!");

		connection.query('SELECT * FROM audiences WHERE tags LIKE ?', [tags], (error, results) => {
			if (error) {
				console.log(error);
				res.status(500).send('Internal server error!');
			} else {
				res.header("Access-Control-Allow-Origin", "*");
				res.send(results);
			}
		});
	})

	return router;

}