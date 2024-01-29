import React, { useEffect, useState } from 'react'
import { dateParser } from '../utils/functions';
import { getAllFeesStudent } from '../services/MainControllerApi';

const Paiement = ({paiement}) => {
    const [fees, setFees] = useState({})

    useEffect(() => {
        getFeesStudents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paiement.student_id])

    async function getFeesStudents() {
        await getAllFeesStudent(paiement.student_id).then((res) => {
            setFees(res)
        })       
    }

    return (
        <tr>
            <td style={{textAlign: 'center'}}>{paiement.code}</td>
            <td style={{textAlign: 'center'}}>{paiement.intitule}</td>
            <td style={{textAlign: 'center'}}>{paiement.montant} FCFA</td>
            <td style={{textAlign: 'center'}}>{dateParser(paiement.created_at)}</td>
            <td style={{textAlign: 'center'}}>{paiement.nom_student +' '+ paiement.prenom_student}</td>
            <td>{fees.reste} FCFA</td>
            <td style={{textAlign: 'center'}}>
                {fees.reste === 0 && <span className="badge bg-success">Soldé</span>}
                {fees.reste > 0 && <span className="badge bg-danger">Débiteur</span>}
                {/* <span className="badge bg-warning">Acceptable</span> */}
            </td>
        </tr>
    )
}

export default Paiement