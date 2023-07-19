import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

const Classe = ({ classe }) => {
    

    return (
        <tr>
            <td>{classe.id}</td>
            <td>{classe.nom}</td>
            <td>{classe.ecole}</td>
            <td>{classe.type_classe}</td>
            <td>{classe.enseignant}</td>
            <td>{classe.effectif} eleves</td>
            <td className="text-blue">
                <Link to={'/salles/' + classe.id}><i className="fa-solid fa-pen-to-square"></i> Voir</Link>
            </td>
        </tr>
    )
}

export default Classe;