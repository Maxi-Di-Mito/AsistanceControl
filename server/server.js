/**
 * Created by maximiliano.dimito on 1/10/2017.
 */
import express from "express";
import Router from "./Router";
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/../www/static/')));

app.use(Router);

const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log("Andando");
});

