const router = require('express').Router();
const { Op } = require("sequelize");
const User = require('../../models').User;
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');
const salt = 10;

module.exports = () => {

    router.post('/register', (req, res) => {
        var username = req.body.username
        var email = req.body.email
        var password = req.body.password

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) return res.status(500).send(err)
            if (hash) {
                User.findOrCreate({
                    where: {
                        email: email
                    },
                    defaults: {
                        username: username,
                        email: email,
                        password: hash,
                        settings: null
                    }
                })
                .then(([user, created]) => {
                    if (!created) {
                        return res.status(409).send('Email already used!');
                    } else {
                        const token = jwt.encode({
                            user_id: user.id,
                        }, process.env.JWT_SECRET);
                        res.status(200).send({
                            token: token
                        });
                    } 
                })
                .catch(err => res.status(500).send(err))
            }
        })
    })

    router.post('/login', (req, res) => {
        var username = req.body.username
        var password = req.body.password

        User.findOne({
            where: {
                [Op.or]: [
                    { username: username },
                    { email: username }
                ]
            }
        })
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(match => {
                        if (match) {
                            const token = jwt.encode({
                                user_id: user.id,
                            }, process.env.JWT_SECRET);
                            return res.status(200).send({
                                token: token,
                            });
                        } else {
                            return res.status(401).send('Authentacion error!');
                        }
                    })
            })
            .catch(err => res.status(500).send(err))

    })

    return router;

}