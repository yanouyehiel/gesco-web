import AxiosApi from "./AxiosApi";

export async function getRoles() {
    const response = await AxiosApi.get('/get-roles');
    return response.data;
}

export async function getRole(id) {
    const response = await AxiosApi.get('/get-role/' + id);
    return response.data;
}

export async function getClasses(id) {   
    const response = await AxiosApi.get('/get-classes-school/' + id);
    return response.data;
}

export async function infoClasse(id) {   
    const response = await AxiosApi.get('/get-info-classe/' + id);
    return response.data;
}

export async function typesClasse() {
    const response = await AxiosApi.get('/get-types-classe');
    return response.data;
}

export async function typesEtablissements() {
    const response = await AxiosApi.get('/get-types-etablissement');
    return response.data;
}

export async function addClasse(classe) {
    const response = await AxiosApi.post('/add-classe', classe);
    return response.data;
}

export async function addPersonne(personne) {
    const response = await AxiosApi.post('/add-personne', personne);
    return response.data;
}

export async function deleteClasse(id) {
    const response = await AxiosApi.delete(`/delete-classe/${id}`);
    return response.data;
}

export async function addMatiere(matiere) {
    const response = await AxiosApi.post('/add-matiere', matiere);
    return response.data;
}

export async function getAllMatieres(id) {
    const response = await AxiosApi.get('/get-matieres/' + id);
    return response.data;
}

export async function getAllEmployes(id) {
    const response = await AxiosApi.get('/get-personnel/' + id);
    return response.data;
}

export async function addEcole(ecole) {
    const response = await AxiosApi.post('/add-ecole', ecole);
    return response.data;
}

export async function addTarif(tarif) {
    const response = await AxiosApi.post('/add-tarif', tarif);
    return response.data;
}

export async function getAllTarifs(id) {
    const response = await AxiosApi.get('/get-tarifs/' + id);
    return response.data;
}

export async function addPaiement(paiement) {
    const response = await AxiosApi.post('/add-paiement', paiement);
    return response.data;
}

export async function getPaiementSchool(id) {
    const response = await AxiosApi.get('/get-paiements/' + id);
    return response.data;
}

export async function getAllParentsSchool(id) {
    const response = await AxiosApi.get('/get-parents/' + id);
    return response.data;
}

export async function getSingleParent(matricule) {
    const response = await AxiosApi.get('/get-parent/' + matricule);
    return response.data;
}

export async function getAllFeesStudent(id) {
    const response = await AxiosApi.get('/get-fees-student/' + id);
    return response.data;
}

export async function askDocument(doc) {
    const response = await AxiosApi.post('/ask-document', doc);
    return response.data;
}