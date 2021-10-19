import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser'

import config from './config/config';

import { verify } from './utils/Verification.js'

import auth from './Routes/Auth/Auth'
import api from './Routes/Database/API';
import subscription from './Routes/Database/Subscription';
import analytics from './Routes/Database/Track'
import mail from './Routes/Database/Mail'

const app = express();

// MIDDLEWARES SETUP
app.use(cors());
app.use(express.static(path.join(__dirname, '../REACTJS/build')));
app.use(express.json())
app.use(cookieParser())

// ROUTES
app.use('/api/v1/auth', auth);

app.use('/api/v1', verify, api);
app.use('/api/v1/mail', verify, mail)
app.use('/api/v1/subscription', verify, subscription);
app.use('/api/v1/analytics', verify, analytics);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../REACTJS/build/index.html'));
});


app.listen(config.HTTP.PORT, () => {
    console.log(`Server started on port: ${config.HTTP.PORT}`)
});