import { Link } from "react-router-dom";

const Student = ({ student, num }) => {   

    return(
        <tr>
            <th>{num+1}</th>
            <td>{student.matricule}</td>
            <td>{student.nom}</td>
            <td>{student.prenom}</td>
            <td>{student.date_naissance}</td>
            <td>{student.nom_classe}</td>
            <td>{student.sexe}</td>
            <td className="text-blue">
                <Link to={'/students/' + student.id} style={{color: '#009AD7'}}><i className="fa-solid fa-pen-to-square"></i> Consulter</Link>
            </td>
        </tr>
    )
}

export default Student;