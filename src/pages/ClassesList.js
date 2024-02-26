import { Modal, Form } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import Classe from '../components/Classe';
import InfoPage from '../components/InfoPage';
import { ClipLoader} from 'react-spinners'
import { addClasse, deleteClasse, getClasses, typesClasse } from '../services/MainControllerApi'
import { ToastContainer, toast } from 'react-toastify';
import Auth from '../contexts/Auth';
import { getEcoleStored } from '../services/LocalStorage';
import { verifyUser } from '../utils/functions';
import ButtonComponent from '../components/Button';

const ClassesList = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [typeClasses, setTypeClasses] = useState([])
    const [allClasses, setAllClasses] = useState([])
    const [classe, setClasse] = useState({});
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const ecole_id = getEcoleStored()
    const [filter, setFilter] = useState("")
    let filteredClasses = allClasses
    
    
    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setClasse({...classe, [name]: value})
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        classe.ecole_id = ecole_id
        setLoading(true)
        await addClasse(classe).then(res => {
            handleClose()
            toast(res)
            getClasses(ecole_id).then((res) => {
                setLoading(false)
                setAllClasses(res)
            })
        });
    }
    
    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getClasses(ecole_id).then((res) => {
            setAllClasses(res)
        }).then(() => setLoading(false))
        typesClasse().then((res) => {
            setTypeClasses(res)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ecole_id]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleDeleteClasse(id) {
        await deleteClasse(id).then((res) => {
            toast(res)
            getClasses(ecole_id).then((res) => {
                setAllClasses(res)
            })
        })
        
    }

    function handleFilter() {
        if (filter === 'nb_eleves') {
            filteredClasses = allClasses.sort((a, b) => {
                return a.effectif > b.effectif
            })
        } else if (filter === 'nom') {
            filteredClasses = allClasses.sort((a, b) => {
                if (a.nom < b.nom) {
                    return a
                } else {
                    return b
                }
            })
        } else {
            filteredClasses = allClasses
        }
    }

    return (
        <main id="main" className="main">

            <ToastContainer />
            
            <InfoPage title='Salle de classe' link='Gestion des classes' />
            <div className="content-wrapper">
                <section className="content mt-2 ">
                    <div className="container-fluid">
                        <h1 className="text-center pt-4 pb-2 text-danger">LISTE DES SALLES DE CLASSE</h1>
                        <div className="container">
                            <ButtonComponent onClick={handleShow}>Ajouter une salle</ButtonComponent>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enregistrement d'une classe</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Nom de la salle</Form.Label>
                                            <Form.Control onChange={handleChange} name='nom' type="text" className="form-control" placeholder="Exemple: SIL A" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner le type de classe</Form.Label>
                                            <Form.Select onChange={handleChange} name='type_classe_id' className="form-control">
                                                <option>-- select --</option>
                                                {typeClasses.length > 0 && typeClasses.map((typeClasse, i) => (
                                                    <option key={i} value={typeClasse.id}>{typeClasse.classe}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                        <br/>
                                        <ButtonComponent size='lg' type='submit'>
                                            Enregistrer
                                        </ButtonComponent>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                            
                        </div><br/>

                        <div className="card">
                            <div className="card-body">
                                <Form className='col-lg-3'>
                                    <Form.Group style={{display: 'flex'}}>
                                        <Form.Select onChange={(e) => setFilter(e.target.value)} style={{minWidth: '200px'}}>
                                            <option value='tout'>Tout</option>
                                            <option value='nb_eleves'>Nombre d'élèves</option>
                                            <option value='nom'>Nom</option>
                                        </Form.Select>
                                        <ButtonComponent onClick={handleFilter} ml='10px'>Appliquer</ButtonComponent>
                                    </Form.Group>
                                </Form>
                                <table id="example1" className="table table-striped">
                                    <thead style={{overflowX: 'scroll'}}>
                                        <tr>
                                            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>#</th>
                                            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>Nom</th>
                                            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>Ecole</th>
                                            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>Type Classe</th>
                                            {/* <th>Enseignant</th> */}
                                            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>Effectif</th>
                                            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {loading ?
                                        <ClipLoader color="#333" cssOverride={{alignItems: 'center !important', justifyContent: 'center !important'}} />
                                        :
                                        <>
                                            {filteredClasses.map((classe, index) => (
                                                <Classe key={index} num={index} classe={classe} delClasse={handleDeleteClasse} />
                                            ))}
                                        </>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ClassesList;