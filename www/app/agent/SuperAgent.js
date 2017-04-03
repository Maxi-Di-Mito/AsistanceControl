/**
 * Created by maximiliano.dimito on 1/10/2017.
 */

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const responseBody = res => res.body;

const API = url => `/api${url}`;

const requests = {
    get: url => superagent.get(url).then(responseBody),
    post: (url, body) => superagent.post(url, body).then(responseBody),
    //put: (url, body) => superagent.put(API(url), body).then(responseBody)
    delete: url => superagent.del(url).then(responseBody)
    //headers: {"Content-Type": "application/json;charset=utf-8"}
};

/*const Movies = {
    search: (name) => requests.get(`http://www.omdbapi.com/?s=${name}&y=&plot=short&r=json`)
};*/

const Persons = {
    getAll: () => requests.get(API('/persons/')),
    delete: person => requests.post(API('/persons/delete'), person),
    create: person => requests.post(API('/persons/'), person)
};

const Asistances = {
    getAll: () => requests.get(API('/asistances/')),
    get: date => requests.get(API(`/asistances/${date || ''}`)),
    create: (person, date) => requests.post(API('/asistances/'), { date, person }),
    delete: asistance => requests.post(API('/asistances/delete'), { asistance })
};

export default {
    //Movies,
    Persons,
    Asistances
};