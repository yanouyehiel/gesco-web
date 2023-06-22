import { Link, useNavigate } from "react-router-dom";

const Student = ({ student }) => {
    let navigate = useNavigate()

    const showDocuments = () => {
        navigate("/documents/MAT213")
    }

    return(
        <tr>
            <td>STU254</td>
            <td>Yanou</td>
            <td>Yehiel</td>
            <td>29/09/1999</td>
            <td>Njombé</td>
            <td>Masculin</td>
            <td className="text-blue">
                <Link to='/documents/MAT213'><i className="fa-solid fa-pen-to-square"></i> Consulter</Link>
            </td>
        </tr>
    )
}

export default Student;