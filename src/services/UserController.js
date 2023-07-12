import AxiosApi from "./AxiosApi";

export function login() {
    console.log('logged');
}

export function logout() {
    AxiosApi.post('/logout')
        .then(res => {
            return res.data.message
        })
}
export function allUsers() {
    AxiosApi.get('/users')
        .then(res => {
            return res.data.users
        })
}