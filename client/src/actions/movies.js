import axios from 'axios'
import {API_BASE} from '../config/env'

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVİES_ERROR = "FETCH_MOVİES_ERROR";

export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: "F00",
            payload: axios.get(`${API_BASE}/movies`)
                .then(result => result.data)
        })
    }
}