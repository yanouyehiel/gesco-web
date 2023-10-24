import AxiosApi from "./AxiosApi";
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from "./LocalStorage";
import { useNavigate } from "react-router-dom";

export function hasAuthenticated() {
    const user = getItem('gescoUser') || '{}';
    const isValid = user !== '{}' ? true : false;

    return isValid;
}

export function login(credentials) {
    return AxiosApi
        .post('/login', credentials)
        .then(res => {
            //addItem('gescoToken', res.data.token)
            addItem('gescoUser', JSON.stringify(res.data[0]))
            return true;
        })
}

export function register(credentials) {
    return AxiosApi
        .post('/register', credentials)
        .then(response => response.data)
}

export function logout() {
    removeItem('gescoUser');
}

function tokenIsValid(token) {
    const { exp } = jwtDecode(token);

    if (exp * 1000 > new Date().getTime()) {
        return true;
    }
    return false;
}