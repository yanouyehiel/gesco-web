import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Classe = ({ classe }) => {
    let navigate = useNavigate()

    const showClasse = (numSalle) => {
        navigate("/salles/" + numSalle)
    }

    return (
        <tr>
            <td>1</td>
            <td>SIL A</td>
            <td>M. Paul</td>
            <td>25</td>
            <td className="text-blue">
                <Link onClick={showClasse("SAL123")}><i className="fa-solid fa-pen-to-square"></i> Voir</Link>
            </td>
        </tr>
    )
}

export default Classe;