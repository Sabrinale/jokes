import { SET_FETCHING_STATE_TRUE, SET_NEW_JOKES, CLEAR_JOKES_ON_ERROR  } from '../actions/types';

const initialState = {
    fetching: false,
    jokes: [],
    error: ""
}

const jokeCollection = (state = initialState, action) => {
    switch(action.type) {
        case SET_FETCHING_STATE_TRUE:
            return {
                ...state,
                fetching: true
            };
        case SET_NEW_JOKES:
            return {
                ...state,
                fetching: false,
                jokes: action.payload,
                error: ""
            };
        case CLEAR_JOKES_ON_ERROR:
            return {
                ...state,
                fetching: false,
                jokes: [],
                error: action.error
            };
        default: return state;
    }
}

export default jokeCollection;
