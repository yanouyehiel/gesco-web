import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import InfoPage from '../components/InfoPage';
import Matiere from '../components/Matiere';
import Footer from '../components/Footer';
import { ClipLoader} from 'react-spinners'

const MatieresList = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
        setShow(false);
    }

    return (
        <>
            <Header />
            <Sidenav />

            <main id="main" className="main">

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
                                            <Form.Control type="text" className="form-control" placeholder="Exemple: Calcul Rapide" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Code de la matiere</Form.Label>
                                            <Form.Control type="text" className="form-control" placeholder="" />
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
                                            <th>Code de la matiere</th>
                                            <th>Intitule de la matiere</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ?
                                            <ClipLoader color="#333" />
                                            :
                                            <>
                                                <Matiere />
                                                <Matiere />
                                                <Matiere />
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