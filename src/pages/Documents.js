import Header from "../components/Header";
import InfoPage from "../components/InfoPage";
import Sidenav from "../components/Sidenav";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const Documents = () => {
    const [show, setShow] = useState(false);

    const handleShowNotes = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSubmit = () => {
        console.log('clique')
    }

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gestion des documents scolaires' link='Demander un document' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-xxl-4 col-md-6" onClick={handleShowNotes}>
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Demander un rélevé de notes</h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-journal-text"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>Rélevé de notes</h6>
                                                    <span className="text-success small pt-1 fw-bold">Disponible</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Vous désirez un rélevé de notes</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Choisissez l'année scolaire</Form.Label>
                                                <Form.Select className="form-control">
                                                    <option>-- select --</option>
                                                    <option>2023-2022</option>
                                                    <option>2022-2021</option>
                                                    <option>2021-2020</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Sélectionner la classe</Form.Label>
                                                <Form.Select className="form-control">
                                                    <option>-- select --</option>
                                                    <option>Petite Section</option>
                                                    <option>SIL</option>
                                                    <option>CP</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Sélectionner l'élève</Form.Label>
                                                <Form.Select className="form-control">
                                                    <option>-- select --</option>
                                                    <option>Yanou</option>
                                                    <option>Yehiel</option>
                                                    <option>Yel</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <br/>
                                            <Button variant="primary" size='lg' type='submit'>
                                                Demander
                                            </Button>
                                        </Form>
                                    </Modal.Body>
                                </Modal>

                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Demander un bulletin de notes</h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-journal-text"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>Bulletin de notes</h6>
                                                    <span className="text-success small pt-1 fw-bold">Disponible</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Demander une autorisation de sortie</h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-journal-text"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>Autorisation de sortie</h6>
                                                    <span className="text-success small pt-1 fw-bold">Disponible</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Demander un certificat de scolarité</h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-journal-text"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>Certificat de scolarité</h6>
                                                    <span className="text-success small pt-1 fw-bold">Disponible</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Documents;