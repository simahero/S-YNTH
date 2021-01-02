const router = require('express').Router();
const verify = require('../../Utils/Verification');
const SQLPromise = require('../../Utils/SQLPromise');

module.exports = (connection) => {

    router.post('/campaign', verify, ((req, res) => {

    }))

    router.post('/template', verify, ((req, res) => {

    }))

    router.post('/audience', ((req, res) => {
        var user_id = req.user.user_id;
        var email = req.body.email;
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var tags = req.body.tags;

        connection.query('SELECT * FROM audiences WHERE email = ? AND user_id = ?', [email, user_id], (error, result) => {
            if (error) return res.status(500).send(error);
            if (result.length > 0) {
                currentTags = JSON.parse(result[0].tags);
                var concat = currentTags.concat(req.body.tags);

                connection.query('UPDATE audiences SET tags = ? WHERE email = ?', [JSON.stringify(concat), email], (error, result) => {
                    if (error) return res.status(500).send(error);
                    if (result) return res.status(200).send(result);
                })

            } else {
                connection.query('INSERT INTO audiences (email, firstname, lastname, tags) VALUES (?)', [[email, firstname, lastname, JSON.stringify(tags)]], (error, result) => {
                    if (error) return res.status(500).send(error);
                    if (result) return res.status(200).send(result);
                })
            }
        })

    }))

    router.post('/audience/import', verify, (async (req, res) => {
        var user_id = req.user.user_id;
        var csv = req.body.csv;
        var method = req.body.method;
        var tag = req.body.tags;

        let status = await importCSV(user_id, csv, method, tag)

        res.status(200).send(status);

    }))

    const importCSV = async (user_id, csv, method, tag) => {

        var status = {
            deleted: 0,
            inserted: 0,
            updated: 0,
            skipped: []
        };

        await Promise.all(csv.map(async element => {

            if (method === 'delete') {
                return SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
                .then(result => {
                    result.forEach(elem => {
                        return SQLPromise.query(connection, 'DELETE * FROM audiences WHERE id = ?', [elem.id])
                        .then(deleted++).catch(skipped.push(elem));
                    });
                    result.forEach(elem => {
                        return SQLPromise.query(connection, 'DELETE * FROM tags WHERE id = ?', [elem.id])
                        .then().catch();
                        
                    });
                }).catch(() => {
                    status.skipped.push(element);
                })
            } else if (method === 'update'){
                return SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
                .then(result => {
                    
                    result.forEach(elem => {
                        return SQLPromise.query(connection, 'INSERT INTO tags (id, tag)', [elem.id, tag])
                        .then(deleted++).catch(skipped.push(elem));
                    });
                }).catch(() => {
                    status.skipped.push(element);
                })
            } else if (method === 'override'){
    
            }            

        })).then(() => {
            return status;
        })

        if (method === 'delete') {
            return SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
                .then(result => {
                    
                }).catch(() => {
                    status.skipped.push(element);
                })
        } else if (method === 'update'){
            
        } else if (method === 'override'){

        }

        await Promise.all(csv.map(async element => {

            return SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ? AND user_id = ?', [element.email, user_id])
                .then(result => {
                    if (result.length > 0) {
                        currentTags = JSON.parse(result[0].tags);
                        var concat;
                        if (method === 'update') {
                            concat = currentTags.concat(tag);
                        } else if (method === 'override') {
                            concat = tag;
                        }

                        return SQLPromise.query(connection, 'UPDATE audiences SET tags = ? WHERE email = ?', [JSON.stringify(concat), element.email])
                            .then(() => {
                                status.updated++;
                            }).catch(() => {
                                status.skipped.push(element);
                            })
                    } else {
                        return SQLPromise.query(connection, 'INSERT INTO audiences (user_id, email, firstname, lastname, tags) VALUES (?)', [[user_id, element.email, element.firstname, element.lastname, JSON.stringify(tag)]])
                            .then(() => {
                                status.inserted++;
                            }).catch(() => {
                                status.skipped.push(element);
                            })
                    }
                }).catch(() => {
                    status.skipped.push(element);
                })

        })).then(() => {
            return status;
        })

    }

    return router;

}

/*

SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ?', [element.email])
    .then(result => {
        if (result.length > 0) {
            currentTags = JSON.parse(result[0].tags);
            var concat;
            if (method === 'update') {
                concat = currentTags.concat(tag);
            } else if (method === 'override') {
                concat = tag;
            }

            SQLPromise.query(connection, 'UPDATE audiences SET tags = ? WHERE email = ?', [JSON.stringify(concat), element.email])
                .then(() => {
                    status.updated++;
                }).catch(() => {
                    status.skipped.push(element);
                })
        } else {
            SQLPromise.query(connection, 'INSERT INTO audiences (email, firstname, lastname, tags) VALUES (?)', [[element.email, element.firstname, element.lastname, JSON.stringify(tag)]])
                .then(() => {
                    status.inserted++;
                }).catch(() => {
                    status.skipped.push(element);
                })
        }
    }).catch(() => {
        status.skipped.push(element);
    })

*/

/*

try {
                const exists = await SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ?', [element.email]);

                if (exists.length > 0) {
                    currentTags = JSON.parse(exists[0].tags);
                    var concat;

                    if (method === 'update') {
                        concat = currentTags.concat(tag);
                    } else if (method === 'override') {
                        concat = tag;
                    }
                    try {
                        const updated = await SQLPromise.query(connection, 'UPDATE audiences SET tags = ? WHERE email = ?', [JSON.stringify(concat), element.email]);
                        status.updated++;
                    } catch {
                        status.skipped.push(element);
                    }
                } else {
                    try {
                        const inserted = await SQLPromise.query(connection, 'INSERT INTO audiences (email, firstname, lastname, tags) VALUES (?)', [[element.email, element.firstname, element.lastname, JSON.stringify(tag)]])
                        status.inserted++;
                    } catch {
                        status.skipped.push(element);
                    }
                }

            } catch {
                status.skipped.push(element);
            }

*/