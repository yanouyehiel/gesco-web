import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

const Classe = ({ classe }) => {
    

    return (
        <tr>
            <td>{classe.id}</td>
            <td>{classe.nom}</td>
            <td>M. Paul</td>
            <td>25</td>
            <td className="text-blue">
                <Link to={'/salles/' + classe.id}><i className="fa-solid fa-pen-to-square"></i> Voir</Link>
            </td>
        </tr>
    )
}

export default Classe;