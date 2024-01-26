import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Parent from '../components/Parent';
import { Modal, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import { getEcoleStored } from '../services/LocalStorage';
import { getAllParentsSchool } from '../services/MainControllerApi';

const Parents = () => {
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [parents, setParents] = useState([])
    const ecole_id = getEcoleStored()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setLoading(true)
        getParents()
        setLoading(false)
    }, [])

    async function getParents() {
        await getAllParentsSchool(ecole_id).then((res) => {
            setParents(res)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
        setShow(false);
    }


    return(
        <>
        <Header />
        <Sidenav />
        <main id="main" className="main">
            <InfoPage title="Gérer les parents d'eleves" link="Mes parents d'eleves" />

            <br />
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center text-danger">Tous les parents</h1>
                        <div className="container">
                            <Button variant="primary" onClick={handleShow}>
                                Ajouter un parent d'eleve
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enregistrement d'un parent d'eleve</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Nom</Form.Label>
                                            <Form.Control type="text" className="form-control" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Prénom</Form.Label>
                                            <Form.Control type="text" className="form-control" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Adresse</Form.Label>
                                            <Form.Control type="text" className="form-control" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Téléphone</Form.Label>
                                            <Form.Control type="text" className="form-control" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Mot de passe</Form.Label>
                                            <Form.Control type="password" className="form-control" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Confirmer le mot de passe</Form.Label>
                                            <Form.Control type="password" className="form-control" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner son enfant</Form.Label>
                                            <Form.Select className="form-control">
                                                <option>-- select --</option>
                                                <option>Yanou</option>
                                                <option>Yehiel</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <br/>
                                        <Button variant="primary" type='submit'>
                                            Créer profil
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                                
                        </div><br/> 

                        <div className="row">

                            <div className="col-12">
                                <div className="card recent-sales overflow-auto">
                                    
                                    <div className="filter">
                                        <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filtre</h6>
                                            </li>

                                            <li><Link className="dropdown-item" to="#">Nom du parent</Link></li>
                                            <li><Link className="dropdown-item" to="#">Nom de l'enfant</Link></li>
                                            <li><Link className="dropdown-item" to="#">Classe de l'enfant</Link></li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">Liste de tous les parents d'eleves <span>| Tous les parents</span></h5>

                                        <table className="table table-borderless datatable">
                                            <thead>
                                                <tr>
                                                    <th style={{ textAlign: 'center' }}>Matricule</th>
                                                    <th style={{ textAlign: 'center' }}>Nom</th>
                                                    <th style={{ textAlign: 'center' }}>Prenom</th>
                                                    <th style={{ textAlign: 'center' }}>Nom de l'enfant</th>
                                                    <th style={{ textAlign: 'center' }}>Classe de l'enfant</th>
                                                    <th style={{ textAlign: 'center' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loading ?
                                                    <ClipLoader color="#333" cssOverride={{alignItems: 'center !important', justifyContent: 'center !important'}} />
                                                    :
                                                    <>
                                                        {parents.map((parent, index) => (
                                                            <Parent key={index} parent={parent} />
                                                        ))}
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

export default Parents;