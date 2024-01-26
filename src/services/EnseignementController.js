import AxiosApi from "./AxiosApi";

export async function getCoursByClasse(idClasse) {
    try {
        const response = await AxiosApi.get('/get-cours-classe/' + idClasse);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getTeachers(id) {
    try {
        const response = await AxiosApi.get('/get-teachers/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getTeacher(matricule) {
    try {
        const response = await AxiosApi.get('/get-teacher/' + matricule);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getStudentsOfClasse(idSalle, idEcole) {
    try {
        const response = await AxiosApi.get(`/my-students/classe_id=${idSalle}&ecole_id=${idEcole}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}