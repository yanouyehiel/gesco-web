import AxiosApi from "./AxiosApi";

export async function addStudent(student) {
    try {
        const response = await AxiosApi.post('/add-student', student);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getStudents(id) {
    try {
        const response = await AxiosApi.get('/get-students/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getSingleStudent(matricule) {
    try {
        const response = await AxiosApi.get('/get-student/' + matricule);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}