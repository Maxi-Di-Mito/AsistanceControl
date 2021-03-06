/**
 * Created by maximiliano.dimito on 1/10/2017.
 */
import express from "express";
import Router from "./Router";
import routerApi from './RouterApi';
import serverRender from './serverRender';
import path from 'path';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '/../www/static/')));

//app.use(Router);
app.use('/api',routerApi);

app.use(serverRender);
/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../www/index.html'));
});*/


const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log("Andando");
});

