import {
    LOGIN_FAIL,
    LOGIN_SUCCES,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCES,
    PASSWORD_RESET_CONFIRM_FAIL

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
        case LOGOUT:
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
        
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCES:
        case PASSWORD_RESET_CONFIRM_FAIL:
            return{
                ...state
            }
        default:
            return state
    }
}
