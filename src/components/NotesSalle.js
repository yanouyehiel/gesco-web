import React from "react";
import { Link } from "react-router-dom";

const NotesSalle = () => {
    return(
        <tr>
            <th scope="row"><Link to="#">#2457</Link></th>
            <td>SIL A</td>
            <td>64</td>
            <td>1</td>
            <td>2022-2023</td>
            <td><Link to="/salles/SAL2123/notes" className="text-primary">Voir les notes</Link></td>
        </tr>
    )
}

export default NotesSalle;