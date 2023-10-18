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

export function infoClasse(id) {
    AxiosApi.get('/get-info-classe/' + id)
        .then(res => {
            return res.data.nom
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
    let response
    AxiosApi.post('/add-classe', classe)
        .then(res => response = res.data)
        .catch(err => response = err)

    return response;
}

export function addPersonne(personne) {
    let response
    AxiosApi.post('/add-personne', personne)
        .then(res => response = res.data)
        .catch(err => response = err)

    return response
}

export function deleteClasse(id) {
    AxiosApi.delete(`/delete-classe/${id}`)
        .then(res => {
            return res.data
        })
}

export function addMatiere(matiere) {
    AxiosApi.post('add-matiere', matiere)
        .then(res => {
            return res.data
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