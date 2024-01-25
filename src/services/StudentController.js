import AxiosApi from "./AxiosApi";

export function addStudent(student) {
    return AxiosApi.post('/add-student', student)
    .then((res) => res.data)
}