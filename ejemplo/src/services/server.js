import express from 'express';
import mainRouter from '../routes/index.js';
import http from 'http'

const app = express();

app.use(express.json());

app.use('/api',mainRouter);

/* Handle de error */

app.use( function (err,req,res,next){
    return res.status('500').json({
        msg:' Hubo un error inesperado',
        error: err.message,
    })
})

const httpServer = http.Server(app);

export default httpServer;

