import React from "react";
import { Link } from "react-router-dom";

const Note = () => {
    return(
        <tr>
            <th scope="row"><Link to="/salles/SAL2123/notes">#2457</Link></th>
            <td>Yanou Yehiel</td>
            <td>Mathematiques</td>
            <td>18/20</td>
            <td className="text-center">1</td>
            <td>2022-2023</td>
        </tr>
    )
}

export default Note;