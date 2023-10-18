import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import Footer from "../components/Footer";
import { ClipLoader} from 'react-spinners'

const Inscription = () => {
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
                <InfoPage title='Gestion les inscriptions' link='Inscription' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">GERER LES INSCRIPTIONS</h1>
                            <Button variant="primary" onClick={handleShow}>
                                Enregistrer un paiement
                            </Button><br /><br />
                            <div className="row">

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Enregistrement un paiement</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Sélectionner un élève</Form.Label>
                                                <Form.Select className="form-control">
                                                    <option>-- select --</option>
                                                    <option>ERIC</option>
                                                    <option>TOM</option>
                                                    <option>PAUL</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <Form.Group className="form-group mt-4">
                                                        <Form.Label className="control-label">Que voulez-vous payer ?</Form.Label>
                                                        <Form.Select className="form-control">
                                                            <option>-- select --</option>
                                                            <option>Première tranche</option>
                                                            <option>Deuxième tranche</option>
                                                            <option>Tranche tranche</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-lg-6">
                                                    <Form.Group className="form-group mt-4">
                                                        <Form.Label className="control-label">Tout payer ?</Form.Label>
                                                        <Form.Select className="form-control">
                                                            <option>-- select --</option>
                                                            <option>Oui</option>
                                                            <option>Non</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Entrer le montant</Form.Label>
                                                <Form.Control className="form-control" />
                                            </Form.Group>
                                            <br/>
                                            <Button variant="primary" size='lg' type='submit'>
                                                Enregistrer
                                            </Button>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        
                                        <div className="filter">
                                            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filtre</h6>
                                                </li>

                                                <li><Link className="dropdown-item" to="#">Nom d'eleve</Link></li>
                                                <li><Link className="dropdown-item" to="#">Salle de classe</Link></li>
                                                <li><Link className="dropdown-item" to="#">Tranche payee</Link></li>
                                                <li><Link className="dropdown-item" to="#">Tout paye</Link></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Situation de vos élèves <span>| Tous les eleves</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Matricule</th>
                                                        <th scope="col">Elève</th>
                                                        <th scope="col">Salle</th>
                                                        <th scope="col">Désignation</th>
                                                        <th scope="col">Reste</th>
                                                        <th scope="col">Statut</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loading ?
                                                        <ClipLoader color="#333" />
                                                    :
                                                    <>
                                                        <tr>
                                                            <th scope="row"><Link to="#">#2457</Link></th>
                                                            <td>Brandon Jacob</td>
                                                            <td>SIL A</td>
                                                            <td><Link to="#" className="text-primary">At praesentium minu</Link></td>
                                                            <td>$64</td>
                                                            <td><span className="badge bg-success">Approved</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Link to="#">#2147</Link></th>
                                                            <td>Bridie Kessler</td>
                                                            <td>SIL A</td>
                                                            <td><Link to="#" className="text-primary">Blanditiis dolor omnis similique</Link></td>
                                                            <td>$47</td>
                                                            <td><span className="badge bg-warning">Pending</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Link to="#">#2049</Link></th>
                                                            <td>Ashleigh Langosh</td>
                                                            <td>SIL A</td>
                                                            <td><Link to="#" className="text-primary">At recusandae consectetur</Link></td>
                                                            <td>$147</td>
                                                            <td><span className="badge bg-success">Approved</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Link to="#">#2644</Link></th>
                                                            <td>Angus Grady</td>
                                                            <td>SIL A</td>
                                                            <td><Link to="#" className="text-primar">Ut voluptatem id earum et</Link></td>
                                                            <td>$67</td>
                                                            <td><span className="badge bg-danger">Rejected</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Link to="#">#2644</Link></th>
                                                            <td>Raheem Lehner</td>
                                                            <td>SIL A</td>
                                                            <td><Link to="#" className="text-primary">Sunt similique distinctio</Link></td>
                                                            <td>$165</td>
                                                            <td><span className="badge bg-success">Approved</span></td>
                                                        </tr>
                                                    </>
                                                    }
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Inscription;