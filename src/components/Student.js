import { Link } from "react-router-dom";

const Student = ({ student, num }) => {   

    return(
        <tr>
            <th style={{ textAlign: 'center' }}>{num+1}</th>
            <td style={{ textAlign: 'center' }}>{student.matricule}</td>
            <td style={{ textAlign: 'center' }}>{student.nom}</td>
            <td style={{ textAlign: 'center' }}>{student.prenom}</td>
            <td style={{ textAlign: 'center' }}>{student.date_naissance}</td>
            <td style={{ textAlign: 'center' }}>{student.nom_classe}</td>
            <td style={{ textAlign: 'center' }}>{student.sexe}</td>
            <td style={{ textAlign: 'center' }} className="text-blue">
                <Link to={'/students/' + student.id} style={{color: '#009AD7'}}><i className="fa-solid fa-pen-to-square"></i> Consulter</Link>
            </td>
        </tr>
    )
}

export default Student;