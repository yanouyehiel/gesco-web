import { Modal, Form } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import InfoPage from '../components/InfoPage';
import Matiere from '../components/Matiere';
import { ClipLoader} from 'react-spinners'
import { ToastContainer, toast } from 'react-toastify';
import { addMatiere, getAllMatieres } from '../services/MainControllerApi';
import { getEcoleStored } from '../services/LocalStorage';
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";
import ButtonComponent from '../components/Button';


const MatieresList = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [matieres, setMatieres] = useState([])
    const [matiere, setMatiere] = useState({})
    const ecole_id = getEcoleStored()
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    async function getMatieres() {
        await getAllMatieres(ecole_id).then((res) => {
            setMatieres(res)
        })
    }

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getMatieres().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setMatiere({...matiere, [name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        matiere.ecole_id = ecole_id
        setLoading(true)
        
        await addMatiere(matiere).then((res) => {
            setShow(false);
            toast(res)
            getMatieres().then(() => setLoading(false))
        }, (err) => {
            toast.error(err)
        }) 
    }

    return (
        <main id="main" className="main">
            <ToastContainer />

            <InfoPage title='Matieres' link='Gestion des matieres' />
            <div className="content-wrapper">
                <section className="content mt-2 ">
                    <div className="container-fluid">
                    <h1 className="text-center pt-4 pb-2 text-danger">LISTE DES MATIERES</h1>
                    <div className="container">
                        <ButtonComponent onClick={handleShow}>Ajouter une matiere</ButtonComponent>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Enregistrement d'une matiere</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="form-group mt-4">
                                        <Form.Label className="control-label">Intitule de la matiere</Form.Label>
                                        <Form.Control onChange={handleChange} name='intitule' type="text" 
                                            className="form-control" placeholder="Exemple: Calcul Rapide" required />
                                    </Form.Group>
                                    <Form.Group className="form-group mt-4">
                                        <Form.Label className="control-label">Code de la matiere</Form.Label>
                                        <Form.Control onChange={handleChange} name='code' type="text" 
                                        className="form-control" placeholder="" required />
                                    </Form.Group>
                                    {/* <Form.Group className="form-group mt-4">
                                        <Form.Label className="control-label">Coefficient de la matiere</Form.Label>
                                        <Form.Control onChange={handleChange} name='coefficient' type="number" className="form-control" placeholder="" />
                                    </Form.Group> */}
                                    <br/>
                                    <ButtonComponent size='lg' type='submit'>
                                        Enregistrer
                                    </ButtonComponent>
                                    
                                </Form>
                            </Modal.Body>
                        </Modal>
                        
                    </div><br/>

                    {/* <h3>Liste des matieres</h3> */}
                    <div className="card">
                        <div className="card-body">
                            <table id="example1" className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style={{ textAlign: 'center' }}>Code</th>
                                        <th style={{ textAlign: 'center' }}>Intitule</th>
                                        {/* <th style={{ textAlign: 'center' }}>Coefficient</th> */}
                                        <th style={{ textAlign: 'center' }}>Date création</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ?
                                        <ClipLoader color="#333" />
                                        :
                                        <>
                                            {matieres.map((matiere, index) => (
                                                <Matiere num={index} key={index} matiere={matiere} />
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

export default MatieresList;