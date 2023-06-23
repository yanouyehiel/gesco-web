import React from "react";
import { Link } from "react-router-dom";

const EmploiDeTemps = () => {
    return(
        <tr>
            <td><Link to='/emploi-du-temps/SIL A'>Num Emploi</Link></td>
            <td>CE2</td>
            <td>1 er</td>
            <td>2022 - 2023</td>
            <td>23/06 au 27/06</td>
        </tr>
    )
}

export default EmploiDeTemps;