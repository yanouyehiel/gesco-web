import React, { useEffect, useState } from 'react'
import AxiosApi from '../services/AxiosApi';
import { dateParser } from '../utils/functions';

const Paiement = ({paiement}) => {
    const [fees, setFees] = useState({})

    useEffect(() => {
        getFeesStudents(paiement.student_id)
        console.log(fees)
    }, [])

    function getFeesStudents(id) {
        AxiosApi.get('/get-fees-student/' + id)
            .then(res => setFees(res.data));           
    }

    return (
        <tr>
            <td style={{textAlign: 'center'}}>{paiement.code}</td>
            <td style={{textAlign: 'center'}}>{paiement.intitule}</td>
            <td style={{textAlign: 'center'}}>{paiement.montant} FCFA</td>
            <td style={{textAlign: 'center'}}>{dateParser(paiement.created_at)}</td>
            <td style={{textAlign: 'center'}}>{paiement.nom_student +' '+ paiement.prenom_student}</td>
            <td>{fees.reste}</td>
            <td style={{textAlign: 'center'}}>
                {fees.reste === 0 && <span className="badge bg-success">Soldé</span>}
                {fees.reste > 0 && <span className="badge bg-danger">Débiteur</span>}
                {/* <span className="badge bg-warning">Acceptable</span> */}
            </td>
        </tr>
    )
}

export default Paiement