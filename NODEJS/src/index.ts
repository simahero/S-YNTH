import express from 'express';
import cors from 'cors';
import path from 'path';
import * as bodyParser from 'body-parser';

import auth from './Routes/Auth/Auth'
import api from './Routes/Database/API';
import subscription from './Routes/Database/Subscription';
import analytics from './Routes/Database/Track'
import mail from './Routes/Database/Mail'


const port = process.env.PORT || 5000;



const app = express();

// MIDDLEWARES SETUP
app.use(cors());
app.use(express.static(path.join(__dirname, '../REACTJS/build')));
app.use(bodyParser.json())

// ROUTES
app.use('/api/v1/auth', auth(connection));
app.use('/api/v1', api(connection));
app.use('/api/v1/mail', mail(connection))
app.use('/api/v1/subscription', subscription(connection));
app.use('/api/v1/analytics', analytics(connection));

app.get('*', (req: any, res: { sendFile: (arg0: any) => void; }) => {
    res.sendFile(path.join(__dirname, '../REACTJS/build/index.html'));
});


app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});