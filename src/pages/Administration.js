import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import { Modal, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Employe from '../components/Employe';
import { ClipLoader} from 'react-spinners'

const Administration = () => {
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

    useEffect(() => {
        selectTeacher()
    }, [])
    function selectTeacher() {
        console.log('Enseignant')
    }

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gerer mon admistration' link='Staff interne' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">Mes Employés</h1>
                            <div className="container">
                                <Button variant="primary" onClick={handleShow}>
                                    Ajouter un employé
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Enregistrement d'un employé</Modal.Title>
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
                                                <Form.Label className="control-label">Salaire</Form.Label>
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
                                                <Form.Label className="control-label">Attribuer un rôle</Form.Label>
                                                <Form.Select className="form-control">
                                                    <option>-- select --</option>
                                                    <option>Directeur</option>
                                                    <option>Sécrétaire</option>
                                                    <option>Comptable</option>
                                                    <option>Enseignant</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Attribuer une classe <span style={{color: 'red'}}>si c'est un maître</span></Form.Label>
                                                <Form.Select className="form-control">
                                                    <option>-- select --</option>   
                                                    <option>Petite Section</option>
                                                    <option>SIL</option>
                                                    <option>CP</option>
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

                            <div className="card">
                                <div className="card-body">
                                    <table id="example1" className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Matricule</th>
                                                <th>Noms</th>
                                                <th>Rôle</th>
                                                <th>Salaire</th>
                                                <th>Date d'embauche</th>
                                                <th>Téléphone</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ?
                                                <ClipLoader color="#333" />
                                                :
                                                <>
                                                    <Employe />
                                                    <Employe />
                                                    <Employe />
                                                    <Employe />
                                                </>
                                            }
                                        </tbody>
                                    </table>
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

export default Administration;