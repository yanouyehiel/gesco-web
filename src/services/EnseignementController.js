import AxiosApi from "./AxiosApi";

export function getCoursByClasse(idClasse) {
    AxiosApi.get('/get-cours-classe/' + idClasse)
    .then((res) => {
        return res.data
    })
}