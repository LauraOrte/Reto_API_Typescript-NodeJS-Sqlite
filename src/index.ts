import bodyParser from 'body-parser';
import cors from 'cors';
import { controllersUser } from './Controllers/User';

import express, { Request, Response } from 'express';

const PORT = process.env.POR || 8000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

import router from './routes'
app.use(router); 

controllersUser.createTable();


app.get('/users', (req: Request, res: Response)=>{
    res.json({
        msg: 'Todo ok'
    })
})

app.post('/users', (req: Request, res: Response)=>{
    console.log(req.body);
    res.json({
        msg: 'Todo ok'
    })
}) 

app.listen(PORT, () => console.log('Servidor inicializado en el puerto ' + PORT));

