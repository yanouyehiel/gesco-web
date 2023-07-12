import { Link } from "react-router-dom";

const Parent = () => {
    return (
        <tr>
            <td>STU254</td>
            <td>Yanou</td>
            <td>Yehiel</td>
            <td>John DOE</td>
            <td>CM2 A</td>
            <td className="text-blue">
                <Link to='/parents/MAT213'><i className="fa-solid fa-pen-to-square"></i> Consulter</Link>
            </td>
        </tr>
    )
}

export default Parent;