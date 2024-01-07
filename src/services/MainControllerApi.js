import AxiosApi from "./AxiosApi";

export function roles() {
    let roles;
    AxiosApi.get('/get-roles')
        .then((res) => {
            roles = res.data.roles
        })

    return roles;
}

export function getRole(id) {
    let role
    AxiosApi.get('/get-role/' + id)
        .then((res) => {
            role = res.data
        })

    return role;
}

export function classes(id) {
    AxiosApi.get('/get-classes-school/' + id)
        .then(res => {
            return res.data
        })

}

export function infoClasse(nom) {
    AxiosApi.get('/get-info-classe/' + nom)
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
    let response
    AxiosApi.post('add-matiere', matiere)
        .then(res => response = res.data)

    return response
}

export function getAllEmployes(id) {
    let employes;
    AxiosApi.get('/get-personnel/' + id)
        .then(res => {
            employes = res.data.data
        })

    return employes
}

export function addEcole(ecole) {
    let response
    AxiosApi.post('/add-ecole', ecole)
        .then(res => response = res.data)

    return response
}

export function addTarif(tarif) {
    let response
    AxiosApi.post('/add-tarif', tarif)
        .then(res => response = res.data)

    return response
}

export function addPaiement(paiement) {
    let response
    AxiosApi.post('/add-paiement', paiement)
        .then(res => response = res.data)

    return response
}