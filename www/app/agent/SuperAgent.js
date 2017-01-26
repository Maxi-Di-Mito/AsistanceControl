/**
 * Created by maximiliano.dimito on 1/10/2017.
 */

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const responseBody = res => res.body;

//const API = (url) => `${config.API_PREFIX}${url}`;

const requests = {
    get: (url) => superagent.get(url).then(responseBody),
    post: (url, body) => superagent.post(url, body).then(responseBody),
    //put: (url, body) => superagent.put(API(url), body).then(responseBody)
};

/*const Movies = {
    search: (name) => requests.get(`http://www.omdbapi.com/?s=${name}&y=&plot=short&r=json`)
};*/

const Persons = {
    getAll: () => requests.get('http://asistancechecker.herokuapp.com/api/persons/')
};

const Asistances = {
    getAll: () => requests.get('http://asistancechecker.herokuapp.com/api/asistances/'),
    getByDate: (date) => requests.get(`http://asistancechecker.herokuapp.com/api/asistances/${date}`),
    create: (person,date) => requests.post('http://asistancechecker.herokuapp.com/api/asistances/',{
        date: date,
        person: person
    })
};


export default {
    //Movies,
    Persons,
    Asistances
};