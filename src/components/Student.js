import { Link } from "react-router-dom";
import { dateParser } from "../utils/functions";

const Student = ({ student }) => {   

    return(
        <tr>
            <td style={{ textAlign: 'center' }}>{student.matricule}</td>
            <td style={{ textAlign: 'center' }}>{student.nom}</td>
            <td style={{ textAlign: 'center' }}>{student.prenom}</td>
            <td style={{ textAlign: 'center' }}>{dateParser(student.date_naissance)}</td>
            <td style={{ textAlign: 'center' }}>{student.lieu_naissance}</td>
            <td style={{ textAlign: 'center' }}>{student.sexe}</td>
            <td style={{ textAlign: 'center' }} className="text-blue">
                <Link to={'/students/' + student.id}><i className="fa-solid fa-pen-to-square"></i> Consulter</Link>
            </td>
        </tr>
    )
}

export default Student;