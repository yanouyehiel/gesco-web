import AxiosApi from "./AxiosApi";

export function login() {
    console.log('logged');
}

export async function allUsers() {
    try {
        const response = await AxiosApi.get('/users');
        return response.data.users;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function deleteUser(id) {
    try {
        const response = await AxiosApi.get('/delete-user/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}