import AxiosApi from "./AxiosApi";
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from "./LocalStorage";
import { useNavigate } from "react-router-dom";

export function hasAuthenticated() {
    const user = getItem('gescoUser') || '{}';
    const isValid = user !== '{}' ? true : false;

    return isValid;
}

export async function login(credentials) {
    try {
        const response = await AxiosApi.post('/login', credentials);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function register(credentials) {
    try {
        const response = await AxiosApi.post('/register', credentials);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function logout() {
    await removeItem('gescoUser');
}

function tokenIsValid(token) {
    const { exp } = jwtDecode(token);

    if (exp * 1000 > new Date().getTime()) {
        return true;
    }
    return false;
}