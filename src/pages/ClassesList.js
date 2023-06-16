import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Classe from '../components/Classe';
import InfoPage from '../components/InfoPage';

const ClassesList = () => {
    const [show, setShow] = useState(false);

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

                <InfoPage title='Salle de classe' link='Gestion des classes' />
                <div className="content-wrapper">
                    <section className="content mt-2 ">
                        <div className="container-fluid">
                        {/* <h1 className="text-center pt-4 pb-2 text-danger">SALLES DE classNameE</h1> */}
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
                                            <Form.Control type="text" className="form-control" placeholder="Exemple: SIL A" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner la classe</Form.Label>
                                            <Form.Select className="form-control">
                                                <option>Petite Section</option>
                                                <option>SIL</option>
                                                <option>CP</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner un enseignant</Form.Label>
                                            <Form.Select className="form-control">
                                                <option>ERIC</option>
                                                <option>TOM</option>
                                                <option>PAUL</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <br/>
                                        <Button variant="primary" size='lg' type='submit'>
                                            Save
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                            
                        </div><br/>

                        <h3>Liste des salles de classe</h3>
                        <div className="card">
                            <div className="card-body">
                                <table id="example1" className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nom</th>
                                            <th>Enseignant</th>
                                            <th>Effectif</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Classe />
                                        <Classe />
                                        <Classe />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default ClassesList;