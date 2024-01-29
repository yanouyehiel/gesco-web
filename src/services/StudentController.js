import AxiosApi from "./AxiosApi";

export async function addStudent(student) {
    const response = await AxiosApi.post('/add-student', student);
    return response.data;
}

export async function getStudents(id) {
    const response = await AxiosApi.get('/get-students/' + id);
    return response.data;
}

export async function getSingleStudent(matricule) {
    const response = await AxiosApi.get('/get-student/' + matricule);
    return response.data;
}