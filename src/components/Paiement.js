import React, { useEffect, useState } from 'react'
import { dateParser } from '../utils/functions';
import { getAllFeesStudent } from '../services/MainControllerApi';

const Paiement = ({paiement}) => {
    const [fees, setFees] = useState({})

    useEffect(() => {
        getFeesStudents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getFeesStudents() {
        await getAllFeesStudent(paiement.student_id).then((res) => {
            setFees(res)
        })       
    }

    return (
        <tr>
            <td style={{color: '#009AD7'}}>{paiement.code}</td>
            <td>{paiement.intitule}</td>
            <td>{paiement.montant} FCFA</td>
            <td>{dateParser(paiement.created_at)}</td>
            <td>{paiement.nom_student +' '+ paiement.prenom_student}</td>
            <td>{fees.reste} FCFA</td>
            <td>
                {fees.reste === 0 && <span className="badge bg-success">Soldé</span>}
                {fees.reste > 0 && <span className="badge bg-danger">Débiteur</span>}
            </td>
        </tr>
    )
}

export default Paiement