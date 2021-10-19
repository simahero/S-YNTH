import { Request, Response, NextFunction } from 'express';
import jwt from 'jwt-simple';

import config from '../config/config'

function verify (req:Request, res:Response, next:NextFunction) {
    const token = req.get('x-access-token');
    if(!token) return res.status(401).send('Access denied!');

    try {
        var decoded = jwt.decode(token, config.JWT.SECRET);
        req.user = decoded;
        res.header("Access-Control-Allow-Origin", "*");
        next();
    } catch (error){
        res.status(400).send('Invalid token!');
    }
}

export {
    verify
}