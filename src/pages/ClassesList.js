import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import Classe from '../components/Classe';
import InfoPage from '../components/InfoPage';
import Footer from '../components/Footer';
import { ClipLoader} from 'react-spinners'
import { addClasse, deleteClasse } from '../services/MainControllerApi'
import axios from '../services/AxiosApi';
import { ToastContainer, toast } from 'react-toastify';
import Auth from '../contexts/Auth';
import { useNavigate } from 'react-router-dom';
import { getEcoleStored } from '../services/LocalStorage';


const ClassesList = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [typeClasses, setTypeClasses] = useState([])
    const [allClasses, setAllClasses] = useState([])
    const [classe, setClasse] = useState({});
    const navigate = useNavigate()
    const { isAuthenticated } = useContext(Auth);

    
    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setClasse({...classe, [name]: value})
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        classe.ecole_id = getEcoleStored()
        console.log(classe)
        try {
            addClasse(classe);
            handleClose()
            toast('Classe enregistrée avec succès !')
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } catch (err) {
            console.log(err);
        }
    }

    function getData() {
        axios.get('/get-classes-school/' + getEcoleStored()).then(res => {
            setAllClasses(res.data)
        })
    }
    
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        } else {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 3000)
            getData()
            setLoading(false)
            axios.get('/get-types-classe').then(res => {
                setTypeClasses(res.data)
                console.log(typeClasses)
            })
        }
        
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleDeleteClasse(id) {
        try {
            deleteClasse(id)
            toast('Classe supprimée avec succès !')
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header />
            <Sidenav />

            <main id="main" className="main">

                <ToastContainer />
                
                <InfoPage title='Salle de classe' link='Gestion des classes' />
                <div className="content-wrapper">
                    <section className="content mt-2 ">
                        <div className="container-fluid">
                            <h1 className="text-center pt-4 pb-2 text-danger">LISTE DES SALLES DE CLASSE</h1>
                            <div className="container">
                                <Button variant="primary" onClick={handleShow}>
                                    Ajouter une salle
                                </Button>

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
                                                <Form.Label className="control-label">Sélectionner la classe</Form.Label>
                                                <Form.Select onChange={handleChange} name='type_classe_id' className="form-control">
                                                    <option>-- select --</option>
                                                    {typeClasses.map((typeClasse) => (
                                                        <option value={typeClasse.id}>{typeClasse.classe}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                            {/* <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Sélectionner un enseignant</Form.Label>
                                                <Form.Select onChange={handleChange} name='enseignant_id' className="form-control">
                                                    <option>-- select --</option>
                                                    <option>ERIC</option>
                                                    <option>TOM</option>
                                                    <option>PAUL</option>
                                                </Form.Select>
                                            </Form.Group> */}
                                            <br/>
                                            <Button variant="primary" size='lg' type='submit'>
                                                Enregistrer
                                            </Button>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                                
                            </div><br/>

                            <div className="card">
                                <div className="card-body">
                                    <table id="example1" className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: 'center' }}>#</th>
                                                <th style={{ textAlign: 'center' }}>Nom</th>
                                                <th style={{ textAlign: 'center' }}>Ecole</th>
                                                <th style={{ textAlign: 'center' }}>Type Classe</th>
                                                {/* <th>Enseignant</th> */}
                                                <th style={{ textAlign: 'center' }}>Effectif</th>
                                                <th style={{ textAlign: 'center' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {loading ?
                                            <ClipLoader color="#333" cssOverride={{alignItems: 'center !important', justifyContent: 'center !important'}} />
                                            :
                                            <>
                                                {allClasses.map((classe, index) => (
                                                    <Classe key={index} classe={classe} delClasse={handleDeleteClasse} />
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
            <Footer />
        </>
    )
}

export default ClassesList;