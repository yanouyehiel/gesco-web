import AxiosApi from "./AxiosApi";

export function roles() {
    let roles;
    AxiosApi.get('/get-roles')
        .then((res) => {
            roles = res.data.roles
        })

    return roles;
}

export function classes() {
    let classes;
    AxiosApi.get('/get-classes')
        .then(res => {
            classes = res.data.classes
        })

    return classes;
}

export function getAllEmployes(id) {
    let employes;
    AxiosApi.get('/get-personnel/' + id)
        .then(res => {
            employes = res.data.data
        })

    return employes
}