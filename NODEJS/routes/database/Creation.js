const router = require('express').Router();
const verify = require('../../middlewares/Verification');
const SQLPromise = require('./SQLPromise');

module.exports = (connection) => {

    router.post('/campaign', verify, ((req, res) => {

    }))

    router.post('/template', verify, ((req, res) => {

    }))

    router.post('/audience', ((req, res) => {
        var email = req.body.email;
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var tags = req.body.tags;

        connection.query('SELECT * FROM audiences WHERE email = ?', [email], (error, result) => {
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

    router.post('/audience/import', (async (req, res) => {
        var csv = req.body.csv;
        var method = req.body.method;
        var tag = req.body.tags;

        let status = await importCSV(csv, method, tag)

        res.status(200).send(status);

    }))

    const importCSV = async (csv, method, tag) => {

        var status = {
            inserted: 0,
            updated: 0,
            skipped: []
        };

        await Promise.all(csv.map(async element => {

            return SQLPromise.query(connection, 'SELECT * FROM audiences WHERE email = ?', [element.email])
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
                        return SQLPromise.query(connection, 'INSERT INTO audiences (email, firstname, lastname, tags) VALUES (?)', [[element.email, element.firstname, element.lastname, JSON.stringify(tag)]])
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