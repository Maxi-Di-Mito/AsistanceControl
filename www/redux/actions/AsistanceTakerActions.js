/**
 * Created by maximiliano.dimito on 4/3/2017.
 */
import SuperAgent from '../../app/agent/SuperAgent';

export const ACTIONS = {
    GET_ASISTANCES: 'GET_ASISTANCES',
    ADD_ASISTANCE: 'ADD_ASISTANCE',
    DELETE_ASISTANCE: 'DELETE_ASISTANCE'
};

const splitDateString = date => date.toISOString().split('T')[0];

const reconstructDate = date => {
    const parts = date.split('-');
    return new Date(parts[0],parts[1]-1,parts[2]);
};

const getAsistances = date => {
    const stringDate = splitDateString(date);
    return dispatch => {
        SuperAgent.Persons.getAll()
            .then( ({persons}) => {
                SuperAgent.Asistances.get(stringDate)
                    .then(( {asistances} ) => dispatch({
                        type: ACTIONS.GET_ASISTANCES,
                        persons,
                        asistances,
                        selectedDate: reconstructDate(stringDate)
                    }));
            });
    };
};

const addAsistance = (date, person) => {
    return dispatch => {
        SuperAgent.Asistances.create(person, date).then( ({asistances}) => {
            dispatch({
                type: ACTIONS.ADD_ASISTANCE,
                asistances
            });
        });
    }
};

const deleteAsistance = (asistance) => {
    return dispatch => {
        SuperAgent.Asistances.delete(asistance).then( ({asistances}) => {
            dispatch({
                type: ACTIONS.DELETE_ASISTANCE,
                asistances
            });
        });
    };
};


export default {
    getAsistances,
    addAsistance,
    deleteAsistance
}

