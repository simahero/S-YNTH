import express, { Request, Response } from 'express'
import { query, close } from './Database'
import config from "../../config/config";

const router = express.Router()
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

router.get('/campaigns', (req:Request, res:Response) => {

	let user_id = req.user.user_id;
	let campaign_id = req.query.id;

	if (campaign_id) {
		query('SELECT * FROM campaigns WHERE user_id = ? AND id = ? LIMIT 1LIMIT 1', [user_id, campaign_id])
			.then(result => res.status(200).send(result))
			.catch(err => res.status(400).send(err))
	} else {
		query('SELECT * FROM campaigns WHERE user_id = ?', [user_id])
			.then(result => res.status(200).send(result))
			.catch(err => res.status(400).send(err))
	}
})

router.post('/campaigns', (req:Request, res:Response) => {

	let user_id = req.user.user_id;
	let campaign = req.body.campaign;

	query("INSERT INTO campaigns (user_id, name, created_at, template_id, tags, settings ) VALUES (?)", [[user_id, campaign.name, new Date(), campaign.template_id, campaign.tags, campaign.settings]])
		.then(results => res.status(200).send(results))
		.catch(error => res.status(400).send(error))
})

router.put('/campaigns', (req:Request, res:Response) => {

	let user_id = req.user.user_id;
	let campaign = req.body.campaign;

	query("UPDATE campaigns SET name=?, created_at=?, template_id=?, tags=?, settings=?  WHERE user_id=?", [[campaign.name, campaign.created_at, campaign.template_id, campaign.tags, campaign.settings, user_id]])
		.then(results => res.status(200).send(results))
		.catch(error => res.status(400).send(error))
})

router.delete('/campaigns', (req:Request, res:Response) => {

	let user_id = req.user.user_id;
	let campaign_id = req.body.id;

	query("DELETE FROM campaigns WHERE user_id = ? AND id = ?", [user_id, campaign_id])
		.then(results => res.status(200).send(results))
		.catch(error => res.status(400).send(error))
})

router.get('/campaigns/edit', async (req:Request, res:Response) => {
	
	let user_id = req.user.user_id;
	let campaign_id = req.query.id;

	let campaing_query;
	let tags_query;
	let templates_query;

	let data = {
		campaign: null,
		template_content: null,
		tags: null,
		templates: null
	};

	if (campaign_id) {
		campaing_query = query('SELECT * FROM campaigns WHERE user_id = ? AND id = ? LIMIT 1', [user_id, campaign_id])
			.then(result => data.campaign = result)
			.then(result => {
				return query('SELECT content FROM templates WHERE user_id = ? AND id = ? LIMIT 1', [user_id, result[0].template_id])
					.then(result_ => {
						data.template_content = JSON.parse(result_[0].content)
					})
					.catch(err_ => data.template_content = err_)
			})
			.catch(err => data.campaign = err)
	}

	tags_query = query('SELECT DISTINCT tag FROM tags WHERE user_id = ?', [user_id])
		.then(result => data.tags = result)
		.catch(err => data.tags = err)

	templates_query = query('SELECT id, name FROM templates WHERE user_id = ?', [user_id])
		.then(result => data.templates = result)
		.catch(err => data.templates = err)

	await Promise.all([campaing_query, tags_query, templates_query])
		.then(() => {
			if (data.campaign) {
				data.campaign = data.campaign[0]
				data.campaign.tags = JSON.parse(data.campaign.tags)
			} else {
				data.campaign = {
					name: '',
					template_id: -1,
					tags: [],
					settings: null
				}
			}

			let tmp = []
			data.tags.forEach(tag => {
				if (data.campaign && data.campaign.tags.includes(tag.tag)) return
				tmp.push(tag.tag)
			});

			data.tags = tmp
			res.status(200).send(data)
		})

})

router.get('/campaigns/send', (req:Request, res:Response) => {

})

//TEMPLATES

/*
	id
	user_id
	content
*/

router.get('/templates', (req:Request, res:Response) => {
	let user_id = req.user.user_id;
	let template_id = req.query.id;

	if (req.query.content == 1) {
		query('SELECT content FROM templates WHERE user_id = ? AND id = ? LIMIT 1', [user_id, template_id])
			.then(result => {
				res.status(200).send(JSON.parse(result[0].content))
			})
			.catch(err => res.status(400).send(err));
	} else {
		if (template_id) {
			query('SELECT * FROM templates WHERE user_id = ? AND id = ? LIMIT 1', [user_id, template_id])
				.then(result => res.status(200).send(result))
				.catch(err => res.status(400).send(err));
		} else {
			query('SELECT * FROM templates WHERE user_id = ?', [user_id])
				.then(result => res.status(200).send(JSON.stringify(result)))
				.catch(err => res.status(400).send(err))
		}
	}
})

router.post('/templates', (req:Request, res:Response) => {
	let user_id = req.user.user_id;
	let template = req.body.template;

	query('INSERT INTO templates VALUES (?)', [[user_id, template.content]])
		.then(result => res.status(200).send(result))
		.catch(err => res.status(400).send(err))
})

router.put('/templates', (req:Request, res:Response) => {
	let user_id = req.user.user_id;
	let template = req.body.template;

	query('UPDATE templates SET content=? WHERE user_id=?', [template.content, user_id])
		.then(result => res.status(200).send(result))
		.catch(err => res.status(400).send(err))
})

router.delete('/templates', (req:Request, res:Response) => {
	let user_id = req.user.user_id;
	let template_id = req.query.template_id;

	query('DELETE * FROM templates WHERE id=? AND user_id=?', [template_id, user_id])
		.then(result => res.status(200).send(result))
		.catch(err => res.status(400).send(err))
})

//TAGS

/*
	audience_id
	name
*/

router.get('/tags', (req:Request, res:Response) => {
	let user_id = req.user.user_id;
	let audience_id = req.query.id;

	query('SELECT DISTINCT tag FROM tags WHERE user_id = ?', [user_id])
		.then(result => res.status(200).send(result))
		.catch(err => res.status(400).send(err))


})

router.get('/audience_count', (req:Request, res:Response) => {
	let user_id = req.user.user_id;
	let selected_tags = JSON.parse(req.query.tags);
	if (selected_tags.length === 0) return res.status(200).send([{ count: 0 }]);


	query('SELECT COUNT(tag) as count FROM tags WHERE user_id = ? AND tag IN (?)', [user_id, selected_tags])
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

router.get('/audiences', (req:Request, res:Response) => {
	let user_id = req.user.user_id;

	query('SELECT * FROM audiences WHERE user_id = ?', [user_id])
		.then(result => res.status(200).send(result))
		.catch(err => res.status(400).send(err))
})

router.post('/audience/import', (async (req:Request, res:Response) => {
	//var user_id = req.user.user_id;
	var csv = req.body.csv;
	var method = req.body.method;
	var tag = req.body.tags;

	let status = await importCSV(0, csv, method, tag)
	console.log(status)
	res.status(200).send(status);

}))

const importCSV = async (user_id, csv, method, tag) => {

	var status = {
		deleted: 0,
		inserted: 0,
		updated: 0,
		skipped: []
	};

	/*
    
	return query('UPDATE audiences SET tags = ? WHERE email = ?', [JSON.stringify(concat), element.email])
	return query('INSERT INTO audiences (user_id, email, firstname, lastname, tags) VALUES (?)', [[user_id, element.email, element.firstname, element.lastname, JSON.stringify(tag)]])
    
	*/

	await Promise.all(csv.map(async element => {

		if (method === 'delete') {
			//GET EXISTING DATA
			return query('SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
				.then(result => {
					//IF EXIST DELETE IT AND ITS TAGS
					if (result.length > 0) {
						return query('DELETE FROM audiences WHERE id = ?', [result[0].id])
							.then(r => {
								console.log(result)
								status.deleted++;
								return query('DELETE FROM tags WHERE audience_id = ?', [result[0].id])
							}).catch(status.skipped.push(element))
					}
				}).catch(err => console.log(err))

		} else if (method === 'update') {

			//GET EXISTING DATA
			return query('SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
				.then(result => {
					if (result.length > 0) {
						return query('UPDATE audiences SET firstname=?, lastname=? WHERE email = ?', [element.firstname, element.lastname, element.email])
							.then(() => {
								status.updated++
								tag.forEach(t => {
									return query('INSERT INTO tags (audience_id, tag) VALUES (?)', [[result[0].id, t]])
								})
							}).catch(err => console.log(err))
					} else {
						return query('INSERT INTO audiences (user_id, email, firstname, lastname) VALUES (?)', [[user_id, element.email, element.firstname, element.lastname]])
							.then(r => {
								status.inserted++
								tag.forEach(t => {
									return query('INSERT INTO tags (audience_id, tag) VALUES (?)', [[r.insertId, t]])
								})
							})
							.catch(err => console.log(err))
					}
				}).catch(status.skipped.push(element))

		} else if (method === 'override') {

			return query('SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
				.then(result => {
					if (result) {
						return query('DELETE * FROM tags WHERE audience_id = ?', [element.id])
							.then(result => {
								return query('INSERT INTO audiences (user_id, email, firstname, lastname) VALUES (?)', [[user_id, element.email, element.firstname, element.lastname]])
									.then(result => console.log(result))
									.catch(err => console.log(err))
								console.log(result)
							}).catch(err => console.loh(err))
						//DELETE OLD TAGS + ADD NEW TAGS + UPDATE INFO
					} else {
						return query('INSERT INTO audiences (user_id, email, firstname, lastname) VALUES (?)', [[user_id, element.email, element.firstname, element.lastname]])
							.then(result => {
								return query('INSERT INTO tags (audience_id, name) VALUES (?)', [result.id, tag])
							})
							.catch(err => console.log(err))
						//INSERT + ADD NEW TAGS
					}
				}).catch()
		}

	})).then(() => {
		return status;
	})

}

router.get('/testaudiences', (req:Request, res:Response) => {

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

export = router