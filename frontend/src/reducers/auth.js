import {
    LOGIN_FAIL,
    LOGIN_SUCCES,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
    const {type, payload }=action;

    switch(type){
        case LOGIN_SUCCES:
            localStorage.setItem('access', payload.access);
            return{
                ...state,
                isAuthenticated: true,
                acces:payload.access,
                refresh:payload.refres
            }

        case USER_LOADED_SUCCESS:
            return{
                ...state, 
                user:payload
            }

        case USER_LOADED_FAIL:
            return{
                ...state,
                user:null
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null, 
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null, 
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case AUTHENTICATED_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        
        default:
            return state
    }
}
