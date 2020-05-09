import {
    FETCH_MOVIES,
    FETCH_MOVİES_ERROR
} from '../actions/movies';

const initialState = {
    fetching: false,
    fetched: false,
    movies: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        case FETCH_MOVİES_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}