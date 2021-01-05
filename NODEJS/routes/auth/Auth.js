const router = require('express').Router();
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');
const salt = 10;

module.exports = (connection) => {

    router.post('/register', (req, res) => {
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        //CHECK IF EMAIL ALREADY EXISTS
        connection.query('SELECT * FROM users WHERE email = ?', [email], (error, result) => {
            if (error) return res.status(500).send('Internal server error!');
            if (result.length > 0) {
                return res.status(409).send('Email already used!');
            } else {
                //CREATE HASHED PASSWORD AND STORE IT
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) return res.status(500).send('Internal server error!');
                    if (hash) {
                        connection.query('INSERT INTO users (username, email, password) VALUES (?)', [[username, email, hash]], (error, result) => {
                            if (error) return res.status(500).send(error.toString());
                            if (result) {
                                console.log(result);
                                const token = jwt.encode({
                                    user_id: result.insertId,
                                }, process.env.JWT_SECRET);
                                res.status(200).send({
                                    token: token
                                });
                            }
                        })
                    }
                })
            }
        })
    })

    router.post('/login', (req, res) => {
        var username = req.body.username;
        var password = req.body.password;

        connection.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, username], (error, result) => {
            if (error) return res.status(500).send('Internal server error!');

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password)
                    .then(match => {
                        if (match) {
                            const token = jwt.encode({
                                user_id: result[0].id,
                            }, process.env.JWT_SECRET);
                            return res.status(200).send({
                                token: token,
                            });
                        } else {
                            return res.status(401).send('Authentacion error!');
                        }
                    })
            } else {
                res.status(401).send('Authentacion error!');
            }
        })
    })

    return router;

}