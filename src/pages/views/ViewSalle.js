import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import InfoPage from "../../components/InfoPage";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import Student from "../../components/Student";

const ViewSalle = ({ salle }) => {
    const { numSalle } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        setShow(false)
    };

    return (
        <>
            <Header />
            <Sidenav />

            <main id="main" classNameName="main">
                <InfoPage title='Salle de classNamee' link='Voir la salle' />

                <div className="content-wrapper">
                    <section className="content mt-2 ">
                        <div className="container-fluid">
                            <h1 className="text-center pt-4 pb-2 text-danger">LISTE DES ELEVES</h1>
                            <Button variant='primary' onClick={handleShow}>
                                Ajouter un élève
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enregistrement d'une élève</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Nom</Form.Label>
                                            <Form.Control type="text" className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Prénom</Form.Label>
                                            <Form.Control type="text" className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Date de naissance</Form.Label>
                                            <Form.Control type="date" className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Lieu de naissance</Form.Label>
                                            <Form.Control type="text" className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sexe</Form.Label>
                                            <Form.Select className="form-control" required>
                                                <option>-- select --</option>
                                                <option>Masculin</option>
                                                <option>Féminin</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <br/>
                                        <Button variant="primary" size='lg' type='submit'>
                                            Save
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </section>
  
                    <div className="mt-4">
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Matricule</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Naissance</th>
                                    <th>Lieu</th>
                                    <th>Sexe</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Student />
                                <Student />
                                <Student />
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ViewSalle;