import React from 'react'
import { dateParser } from '../utils/functions';

const Employe = ({ employe }) => {
    return(
        <tr>
            <td style={{ textAlign: 'center' }}>{employe.matricule}</td>
            <td style={{ textAlign: 'center' }}>{employe.nom +' '+ employe.prenom}</td>
            <td style={{ textAlign: 'center' }}>{employe.role}</td>
            <td style={{ textAlign: 'center' }}>{dateParser(employe.created_at)}</td>
            <td style={{ textAlign: 'center' }}>{employe.telephone}</td>
        </tr>
    )
}

export default Employe;