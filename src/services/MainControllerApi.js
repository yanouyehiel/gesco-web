import AxiosApi from "./AxiosApi";

export function roles() {
    let roles;
    AxiosApi.get('/get-roles')
        .then((res) => {
            roles = res.data.roles
        })

    return roles;
}

export function classes(id) {
    AxiosApi.get('/get-classes-school/' + id)
        .then(res => {
            return res.data
        })

}

export function typesClasse() {
    let types;
    AxiosApi.get('/get-types-classe')
        .then(res => {
            types = res.data
        })
    return types;
}

export function addClasse(classe) {
    AxiosApi.post('/add-classe')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err
        })
}

export function getAllEmployes(id) {
    let employes;
    AxiosApi.get('/get-personnel/' + id)
        .then(res => {
            employes = res.data.data
        })

    return employes
}