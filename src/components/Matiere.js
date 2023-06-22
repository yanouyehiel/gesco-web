import { Link } from "react-router-dom";

const Matiere = () => {
    const handleDelete = () => {
        console.log('Delete')
    }

    return(
        <tr>
            <td>1</td>
            <td>CALX123</td>
            <td>Calcul Rapide</td>
            <td className="text-blue">
                <Link className="text-danger" onClick={handleDelete}><i className="fa-solid text-danger fa-pen-to-square"></i> Supprimer</Link>
            </td>
        </tr>
    )
}

export default Matiere;