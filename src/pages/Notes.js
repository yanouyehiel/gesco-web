import React from 'react'
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import InfoPage from '../components/InfoPage';
import { Link } from 'react-router-dom';
import NotesSalle from '../components/NotesSalle';

const Notes = () => {
    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gestion des notes' link='Notes' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">VOIR LES NOTES PAR SALLE</h1>

                            <div className="row">

                                {/* <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Enregistrement un paiement</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Sélectionner un élève</Form.Label>
                                                <Form.Select className="form-control">
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
                                            <br/>
                                            <Button variant="primary" size='lg' type='submit'>
                                                Enregistrer
                                            </Button>
                                        </Form>
                                    </Modal.Body>
                                </Modal> */}
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        
                                        <div className="filter">
                                            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><Link className="dropdown-item" to="#">Année scolaire</Link></li>
                                                <li><Link className="dropdown-item" to="#">Séquence</Link></li>
                                                <li><Link className="dropdown-item" to="#">Salle de classe</Link></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Sélectionner une salle de classe <span>| All</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Numéro salle</th>
                                                        <th scope="col">Nom salle</th>
                                                        <th scope="col">Effectif</th>
                                                        <th scope="col">Séquence</th>
                                                        <th scope="col">Année Scolaire</th>
                                                        <th scope="col">Option</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <NotesSalle />
                                                    <NotesSalle />
                                                    <NotesSalle />
                                                    <NotesSalle />
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
        </>
    )
}

export default Notes;