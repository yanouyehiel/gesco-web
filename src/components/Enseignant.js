import { Link } from "react-router-dom";

const Enseignant = ({ teacher, infoClasse }) => {

    return (
        <tr>
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