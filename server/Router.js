/**
 * Created by maximiliano.dimito on 1/10/2017.
 */
import express from "express";
import path from 'path';

const Router = express.Router();


Router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'/../www/index.html'));
});

export default Router;
