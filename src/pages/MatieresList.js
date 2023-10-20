import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import InfoPage from '../components/InfoPage';
import Matiere from '../components/Matiere';
import Footer from '../components/Footer';
import { ClipLoader} from 'react-spinners'
import AxiosApi from '../services/AxiosApi';
import { ToastContainer, toast } from 'react-toastify';
import { addMatiere } from '../services/MainControllerApi';

const MatieresList = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const [matieres, setMatieres] = useState([])
    const [matiere, setMatiere] = useState({})

    function getMatieres() {
        AxiosApi.get('/get-matieres/1')
        .then(res => setMatieres(res.data))
    }

    useEffect(() => {
        setLoading(true)
        getMatieres()
        setLoading(false)
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setMatiere({...matiere, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        matiere.ecole_id = 1
        console.log(matiere)
        try {
            const response = addMatiere(matiere)
            console.log(response)
            setShow(false);
            toast('Matière créée avec succès !')
            setLoading(true)
            getMatieres()
            setLoading(false)
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

                <InfoPage title='Matieres' link='Gestion des matieres' />
                <div className="content-wrapper">
                    <section className="content mt-2 ">
                        <div className="container-fluid">
                        <h1 className="text-center pt-4 pb-2 text-danger">LISTE DES MATIERES</h1>
                        <div className="container">
                            <Button variant="primary" onClick={handleShow}>
                                Ajouter une matiere
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enregistrement d'une matiere</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Intitule de la matiere</Form.Label>
                                            <Form.Control onChange={handleChange} name='intitule' type="text" className="form-control" placeholder="Exemple: Calcul Rapide" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Code de la matiere</Form.Label>
                                            <Form.Control onChange={handleChange} name='code' type="text" className="form-control" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Coefficient de la matiere</Form.Label>
                                            <Form.Control onChange={handleChange} name='coefficient' type="number" className="form-control" placeholder="" />
                                        </Form.Group>
                                        <br/>
                                        <Button variant="primary" size='lg' type='submit'>
                                            Enregistrer
                                        </Button>
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
                                            <th style={{ textAlign: 'center' }}>Coefficient</th>
                                            <th style={{ textAlign: 'center' }}>Date création</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ?
                                            <ClipLoader color="#333" />
                                            :
                                            <>
                                                {matieres.map((matiere, index) => (
                                                    <Matiere key={index} matiere={matiere} />
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

export default MatieresList;