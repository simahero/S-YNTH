const router = require('express').Router();
const verify = require('../../Utils/Verification');
const SQLPromise = require('../../Utils/SQLPromise');


module.exports = (connection) => {

	// CAMPAIGNS

	/*
		id
		user_id
		name
		created_at
		template_id
		tags
		settings
	*/

	router.get('/campaigns', verify, (req, res) => {
		let user_id = req.user.user_id;
		let campaign_id = req.query.id;

		if (campaign_id) {
			SQLPromise.query(connection, 'SELECT * FROM campaigns WHERE user_id = ? AND id = ?', [user_id, campaign_id])
				.then(result => res.status(200).send(result))
				.catch(err => res.status(400).send(err))
		} else {
			SQLPromise.query(connection, 'SELECT * FROM campaigns WHERE user_id = ?', [user_id])
				.then(result => res.status(200).send(result))
				.catch(err => res.status(400).send(err))
		}
	});

	router.post('/campaigns', verify, (req, res) => {
		let user_id = req.user.user_id;
		let campaign = req.body.campaign;

		SQLPromise.query(connection, "INSERT INTO campaigns (user_id, name, created_at, template_id, tags, settings ) VALUES (?)", [[user_id, campaign.name, new Date(), campaign.template_id, campaign.tags, campaign.settings]])
			.then(results => res.status(200).send(results))
			.catch(error => res.status(400).send(error))
	});

	router.put('/campaigns', verify, (req, res) => {
		let user_id = req.user.user_id;
		let campaign = req.body.campaign;

		SQLPromise.query(connection, "UPDATE campaigns SET name=?, created_at=?, template_id=?, tags=?, settings=?  WHERE user_id=?", [[campaign.name, campaign.created_at, campaign.template_id, campaign.tags, campaign.settings, user_id]])
			.then(results => res.status(200).send(results))
			.catch(error => res.status(400).send(error))
	});

	router.delete('/campaigns', verify, (req, res) => {
		let user_id = req.user.user_id;
		let campaign_id = req.query.campaign_id;

		SQLPromise.query(connection, "DELETE * FROM campaigns WHERE user_id = ? AND id = ?", [user_id, campaign_id])
			.then(results => res.status(200).send(results))
			.catch(error => res.status(400).send(error))

	});

	//TEMPLATES

	/*
		id
		user_id
		content
	*/

	router.get('/templates', verify, (req, res) => {
		let user_id = req.user.user_id;
		let template_id = req.query.id;

		if (template_id) {
			SQLPromise.query(connection, 'SELECT * FROM templates WHERE user_id = ? AND id = ?', [user_id, template_id])
				.then(result => res.status(200).send(result))
				.catch(err => res.status(400).send(err));
		} else {
			SQLPromise.query(connection, 'SELECT * FROM templates WHERE user_id = ?', [user_id])
				.then(result => res.status(200).send(result))
				.catch(err => res.status(400).send(err))
		}
	})

	router.post('/templates', verify, (req, res) => {
		let user_id = req.user.user_id;
		let template = req.body.template;

		SQLPromise.query(connection, 'INSERT INTO templates VALUES (?)', [[user_id, template.content]])
			.then(result => res.status(200).send(result))
			.catch(err => res.status(400).send(err))
	})

	router.put('/templates', verify, (req, res) => {
		let user_id = req.user.user_id;
		let template = req.body.template;

		SQLPromise.query(connection, 'UPDATE templates SET content=? WHERE user_id=?', [template.content, user_id])
			.then(result => res.status(200).send(result))
			.catch(err => res.status(400).send(err))
	})

	router.delete('/templates', verify, (req, res) => {
		let user_id = req.user.user_id;
		let template_id = req.query.template_id;

		SQLPromise.query(connection, 'DELETE * FROM templates WHERE id=? AND user_id=?', [template_id, user_id])
			.then(result => res.status(200).send(result))
			.catch(err => res.status(400).send(err))
	})

	//AUDIENCES

	/*
		id
		user_id
		email
		firstname
		lastname
		tags
	*/

	router.get('/audiences', verify, (req, res) => {
		let user_id = req.user.user_id;
		

		SQLPromise.query(connection, 'SELECT * FROM audiences WHERE user_id = ?', [user_id])
			.then(result => res.status(200).send(result))
			.catch(err => res.status(400).send(err))
	})

	router.get('/testaudiences', (req, res) => {

		var tags = req.query.tags;

		if (!tags) return res.status(400).send("No tags declared!");

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