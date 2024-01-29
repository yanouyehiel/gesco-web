import AxiosApi from "./AxiosApi";

export async function getCoursByClasse(idClasse) {
    const response = await AxiosApi.get('/get-cours-classe/' + idClasse);
    return response.data;
}

export async function getTeachers(id) {
    const response = await AxiosApi.get('/get-teachers/' + id);
    return response.data;
}

export async function getTeacher(matricule) {
    const response = await AxiosApi.get('/get-teacher/' + matricule);
    return response.data;
}

export async function getStudentsOfClasse(idSalle, idEcole) {
    const response = await AxiosApi.get(`/my-students/classe_id=${idSalle}&ecole_id=${idEcole}`);
    return response.data;
}