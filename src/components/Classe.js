import { Link } from 'react-router-dom';

const Classe = ({ classe, delClasse }) => {
    
    function deleteClasse() {
        delClasse(classe.id)
    }

    return (
        <tr>
            <td>{classe.id}</td>
            <td style={{ textAlign: 'center' }}>{classe.nom}</td>
            <td style={{ textAlign: 'center' }}>{classe.nom_ecole}</td>
            <td style={{ textAlign: 'center' }}>{classe.classe}</td>
            {/* <td>{classe.enseignant}</td> */}
            <td style={{ textAlign: 'center' }}>{classe.effectif} élèves</td>
            <td style={{ textAlign: 'center' }}>
                <Link 
                    className="text-blue" 
                    to={'/salles/' + classe.id}
                    style={{ marginRight: '10px' }}
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