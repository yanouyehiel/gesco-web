import React from 'react'

export default function Tarif({tarif}) {
  return (
    <tr>
        <td style={{ textAlign: 'center', color: '#009AD7' }}>{tarif.classe}</td>
        <td style={{ textAlign: 'center' }}>{tarif.inscription} FCFA</td>
        <td style={{ textAlign: 'center' }}>{tarif.premiere_tranche} FCFA</td>
        <td style={{ textAlign: 'center' }}>{tarif.deuxieme_tranche} FCFA</td>
        <td style={{ textAlign: 'center' }}>{tarif.troisieme_tranche} FCFA</td>
        <td className="text-success" style={{ textAlign: 'center' }}>
            {tarif.inscription+tarif.premiere_tranche+tarif.deuxieme_tranche+tarif.troisieme_tranche} FCFA
        </td>
    </tr>
  )
}
