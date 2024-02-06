import { Link } from "react-router-dom";

const Enseignant = ({ teacher, num }) => {

    return (
        <tr>
            <th style={{ textAlign: 'center' }}>{num+1}</th>
            <td style={{ textAlign: 'center' }}>{teacher.matricule}</td>
            <td style={{ textAlign: 'center' }}>{teacher.nom}</td>
            <td style={{ textAlign: 'center' }}>{teacher.prenom}</td>
            <td style={{ textAlign: 'center' }}>{teacher.nom_classe}</td>
            <td style={{ textAlign: 'center' }}>Masculin</td>
            <td style={{ textAlign: 'center' }} className="text-blue">
                <Link to={'/teachers/' + teacher.id}>
                    <i className="fa-solid fa-pen-to-square"></i> Consulter
                </Link>
            </td>
        </tr>
    )
}

export default Enseignant;