/**
 * Created by maximiliano.dimito on 4/3/2017.
 */
import { ACTIONS } from '../actions/AsistanceTakerActions';

const initialState = {
    persons: [],
    asistances: [],
    fetching: true
};

const asistanceTakerReducer = (state = initialState, action) => {
    const {persons, asistances, selectedDate} = action;

    switch (action.type){
        case ACTIONS.GET_ASISTANCES:
            return {
                ...state,
                persons,
                asistances,
                selectedDate,
                fetching: false
            };

        case ACTIONS.ADD_ASISTANCE:
            return {
                ...state,
                asistances
            };

        case ACTIONS.DELETE_ASISTANCE:
            return {
                ...state,
                asistances
            };

        default:
            return state;
    }

};


export default asistanceTakerReducer;