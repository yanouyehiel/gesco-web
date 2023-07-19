import AxiosApi from "./AxiosApi";
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from "./LocalStorage";

export function hasAuthenticated() {
    const token = getItem('gescoToken');
    const isValid = token ? tokenIsValid(token) : false;

    if (false === isValid) {
        removeItem('gescoToken');
    }

    return isValid;
}

export function login(credentials) {
    return AxiosApi
        .post('/login', credentials)
        .then(res => {
            addItem('gescoToken', res.data.token)
            addItem('gescoUser', JSON.stringify(res.data.user))
            return true;
        })
}

export function register(credentials) {
    return AxiosApi
        .post('/register', credentials)
        .then(response => response.data)
}

export function logout() {
    removeItem('gescoToken');
    removeItem('gescoUser');
}

function tokenIsValid(token) {
    const { exp } = jwtDecode(token);

    if (exp * 1000 > new Date().getTime()) {
        return true;
    }
    return false;
}