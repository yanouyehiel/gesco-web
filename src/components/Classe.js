import { Link } from 'react-router-dom';

const Classe = ({ classe, num, delClasse }) => {
   
    function deleteClasse() {
        delClasse(classe.id)
    }

    return (
        <tr>
            <td style={{ textAlign: 'center' }}>{num+1}</td>
            <td style={{ textAlign: 'center' }}>{classe.nom}</td>
            <td style={{ textAlign: 'center' }}>{classe.nom_ecole}</td>
            <td style={{ textAlign: 'center' }}>{classe.classe}</td>
            <td style={{ textAlign: 'center' }}>{classe.effectif} élèves</td>
            <td style={{ textAlign: 'center' }}>
                <Link 
                    to={'/salles/' + classe.id}
                    style={{ marginRight: '10px', color: '#009AD7' }}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <Link 
                    className='text-danger'
                    onClick={deleteClasse}
                >
                    <i className='fa-solid fa-trash'></i>
                </Link>
            </td>
        </tr>
    )
}

export default Classe;