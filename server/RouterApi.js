/**
 * Created by maximiliano.dimito on 2/2/2017.
 */
import express from 'express';
let routerApi = express.Router();


const Person = require("./model/Person");
const Asistance = require("./model/Asistance");

routerApi.get('/', (req, res) => {
    res.json({ message: 'Welcome to our api!' });
});


routerApi.get("/persons/", (req, res) => {
    Person.find({}).then(function (data){
        res.json({
            response: true,
            persons: data
        });
    });
});

routerApi.post("/persons/", (req, res) => {
    let response = false;

    let p = new Person();
    p.name = req.body.name;
    p.lastName = req.body.lastName;
    p.save().then((savedPerson) => {
        if(savedPerson){
            response = true
        }
        res.json({
            response: response
        });
    });
});

routerApi.get('/asistances/', (req, res) => {
    console.log("TRAIGO TODOS");
    Asistance.find({}).populate('person').then((data) => {
        if(data){
            res.json({
                response:true,
                asistances:data
            });
        }else{
            res.json({
                response:false
            });
        }
    });
});

routerApi.get('/asistances/:date', (req, res) => {
    const stringDate = req.params.date;
    console.log("FILTRO POR FECHA: "+stringDate);
    Asistance.find({date:stringDate}).populate("person").then( (data) => {
        if(data){
            res.json({
                response:true,
                asistances:data
            });
        }else{
            res.json({response:false});
        }
    });
});

routerApi.post("/asistances/delete", (req, res) => {
    const id = req.body.asistance._id;
    Asistance.findOneAndRemove({_id: id}, (deleted) => {
        Asistance.find({date: req.body.asistance.date}).populate("person").then((data) => {
            if (data) {
                res.json({
                    response: deleted,
                    asistances: data
                });
            }
        });

    });
});


routerApi.post("/asistances/", (req,res) => {
    let response = false;
    const a = new Asistance();
    a.date = req.body.date;
    a.person = req.body.person._id;

    a.save().then( (savedAsistance) => {
        if (savedAsistance) {
            response = true
        }

        Asistance.find({date: req.body.date}).populate("person").then((data) => {
            if (data) {
                res.json({
                    response: response,
                    asistances: data
                });
            }
        });
    });
});


routerApi.delete("/asistances/:id", (req,res) => {
    let response = false;
    const id = req.params.id;


    Asistance.find({_id: id}).then( (findedAsistance) => {
        if (findedAsistance) {
            findedAsistance.delete().then( (result) => {
                if( result ){
                    response = true;
                    res.json({
                        response: response
                    });
                }
            });
        }
    });
});

export default routerApi;