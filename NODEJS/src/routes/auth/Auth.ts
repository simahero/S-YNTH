import express, { Request, Response } from "express";
import mysql = require('mysql');
import jwt = require('jwt-simple');
import bcrypt = require('bcrypt');

import { query, close } from '../database/Database'

const router = express.Router();
const salt = 10;

router.post('/register', async(req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    // CHECK IF EMAIL ALREADY EXISTS

    try {
        const response = await query('SELECT * FROM users WHERE email = ?', [email])
        if (response.length > 0) {
            return res.status(409).send('Email already used!');
        } else {
            // CREATE HASHED PASSWORD AND STORE IT
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) return res.status(500).send('Internal server error!');
                if (hash) {
                    query('INSERT INTO users (username, email, password) VALUES (?)', [[username, email, hash]], (error: { toString: () => any; }, result: { insertId: any; }) => {
                        if (error) return res.status(500).send(error.toString());
                        if (result) {
                            console.log(result);
                            const token = jwt.encode({
                                user_id: result.insertId,
                            }, process.env.JWT_SECRET ?? '');
                            res.status(200).send({
                                token
                            });
                        }
                    })
                }
            })
        }
    } catch (err) {
        return res.status(500).send('Internal server error!');
    }
})

router.post('/login', (req:Request, res:Response) => {
    let username = req.body.username;
    let password = req.body.password;

    query('SELECT * FROM users WHERE username = ? OR email = ?', [username, username], (error: any, result: string | any[]) => {
        if (error) return res.status(500).send('Internal server error!');

        if (result.length > 0) {
            bcrypt.compare(password, result[0].password)
                .then((match: any) => {
                    if (match) {
                        const token = jwt.encode({
                            user_id: result[0].id,
                        }, process.env.JWT_SECRET ?? '');
                        return res.status(200).send({
                            token,
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

export = router;