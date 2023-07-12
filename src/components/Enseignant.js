import { Link } from "react-router-dom";

const Enseignant = ({ enseignant }) => {
    return (
        <tr>
            <td>STU254</td>
            <td>Yanou</td>
            <td>Yehiel</td>
            <td>CM2 A</td>
            <td>Masculin</td>
            <td className="text-blue">
                <Link to='/teachers/MAT213'><i className="fa-solid fa-pen-to-square"></i> Consulter</Link>
            </td>
        </tr>
    )
}

export default Enseignant;