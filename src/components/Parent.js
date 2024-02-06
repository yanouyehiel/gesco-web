import { Link } from "react-router-dom";

const Parent = ({ parent, num }) => {
    return (
        <tr>
            <th style={{ textAlign: 'center' }}>{num+1}</th>
            <td style={{ textAlign: 'center' }}>{parent.matricule}</td>
            <td style={{ textAlign: 'center' }}>{parent.nom}</td>
            <td style={{ textAlign: 'center' }}>{parent.prenom}</td>
            <td style={{ textAlign: 'center' }}>{parent.nom_student +' '+ parent.prenom_student}</td>
            <td style={{ textAlign: 'center' }}>{parent.nom_classe}</td>
            <td style={{ textAlign: 'center' }} className="text-blue">
                <Link to={'/parents/' + parent.id}><i className="fa-solid fa-pen-to-square"></i> Consulter</Link>
            </td>
        </tr>
    )
}

export default Parent;