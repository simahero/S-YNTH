const router = require('express').Router();
const verify = require('../../Utils/Verification');
const SQLPromise = require('../../Utils/SQLPromise');

module.exports = (connection) => {

    router.post('/campaign', verify, ((req, res) => {

    }))

    router.post('/template', verify, ((req, res) => {

    }))


    router.post('/audience/import', (async (req, res) => {
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
        
        return SQLPromise.query(connection, 'UPDATE audiences SET tags = ? WHERE email = ?', [JSON.stringify(concat), element.email])
        return SQLPromise.query(connection, 'INSERT INTO audiences (user_id, email, firstname, lastname, tags) VALUES (?)', [[user_id, element.email, element.firstname, element.lastname, JSON.stringify(tag)]])
        
        */

        await Promise.all(csv.map(async element => {

            if (method === 'delete') {
                //GET EXISTING DATA
                return SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
                    .then(result => {
                        //IF EXIST DELETE IT AND ITS TAGS
                        if (result.length > 0) {
                            return SQLPromise.query(connection, 'DELETE FROM audiences WHERE id = ?', [result[0].id])
                                .then(r => {
                                    console.log(result)
                                    status.deleted++;
                                    return SQLPromise.query(connection, 'DELETE FROM tags WHERE audience_id = ?', [result[0].id])
                                }).catch(status.skipped.push(element))
                        }
                    }).catch(err => console.log(err))

            } else if (method === 'update') {

                //GET EXISTING DATA
                return SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
                    .then(result => {
                        if (result.length > 0) {
                            return SQLPromise.query(connection, 'UPDATE audiences SET firstname=?, lastname=? WHERE email = ?', [element.firstname, element.lastname, element.email])
                                .then(() => {
                                    status.updated++
                                    tag.forEach(t => {
                                        return SQLPromise.query(connection, 'INSERT INTO tags (audience_id, tag) VALUES (?)', [[result[0].id, t]])
                                    })
                                }).catch(err => console.log(err))
                        } else {
                            return SQLPromise.query(connection, 'INSERT INTO audiences (user_id, email, firstname, lastname) VALUES (?)', [[user_id, element.email, element.firstname, element.lastname]])
                                .then(r => {
                                    status.inserted++
                                    tag.forEach(t => {
                                        return SQLPromise.query(connection, 'INSERT INTO tags (audience_id, tag) VALUES (?)', [[r.insertId, t]])
                                    })
                                })
                                .catch(err => console.log(err))
                        }
                    }).catch(status.skipped.push(element))

            } else if (method === 'override') {

                return SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
                    .then(result => {
                        if (result) {
                            return SQLPromise.query(connection, 'DELETE * FROM tags WHERE audience_id = ?', [element.id])
                                .then(result => {
                                    return SQLPromise.query(connection, 'INSERT INTO audiences (user_id, email, firstname, lastname) VALUES (?)', [[user_id, element.email, element.firstname, element.lastname]])
                                        .then(result => console.log(result))
                                        .catch(err => console.log(err))
                                    console.log(result)
                                }).catch(err => console.loh(err))
                            //DELETE OLD TAGS + ADD NEW TAGS + UPDATE INFO
                        } else {
                            return SQLPromise.query(connection, 'INSERT INTO audiences (user_id, email, firstname, lastname) VALUES (?)', [[user_id, element.email, element.firstname, element.lastname]])
                                .then(result => {
                                    return SQLPromise.query(connection, 'INSERT INTO tags (audience_id, name) VALUES (?)', [result.id, tag])
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

    return router;

}