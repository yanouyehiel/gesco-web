import React from 'react'
import { Link } from 'react-router-dom';

const Employe = () => {
    return(
        <tr>
            <td>EMP123</td>
            <td>Yehiel Yanou</td>
            <td>Directeur</td>
            <td>200000</td>
            <td>1 Janvier 2021</td>
            <td>695707732</td>
            <td>
                <Link className="text-danger"><i className="fa-solid fa-pen-to-square"></i></Link>
                <Link className="text-primary"><i className="fa-solid fa-pen-to-square"></i></Link>
            </td>
        </tr>
    )
}

export default Employe;