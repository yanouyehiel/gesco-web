import AxiosApi from "./AxiosApi";

export async function allUsers() {
    const response = await AxiosApi.get('/users');
    return response.data.users;
}

export async function deleteUser(id) {
    const response = await AxiosApi.get('/delete-user/' + id);
    return response.data;
}