import React from 'react'
import { Link } from 'react-router-dom';

const Employe = ({ employe }) => {
    return(
        <tr>
            <td style={{ textAlign: 'center' }}>{employe.matricule}</td>
            <td style={{ textAlign: 'center' }}>{employe.nom +' '+ employe.prenom}</td>
            <td style={{ textAlign: 'center' }}>{employe.role}</td>
            <td style={{ textAlign: 'center' }}>1 Janvier 2021</td>
            <td style={{ textAlign: 'center' }}>{employe.telephone}</td>
        </tr>
    )
}

export default Employe;