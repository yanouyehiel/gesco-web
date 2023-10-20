import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import Footer from "../components/Footer";
import { ClipLoader} from 'react-spinners'
import { ToastContainer, toast } from "react-toastify";
import AxiosApi from "../services/AxiosApi";
import { addPaiement } from "../services/MainControllerApi";
import { dateParser } from "../utils/functions";

const Inscription = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const [paiement, setPaiement] = useState({})
    const [paiements, setPaiements] = useState([])
    const [students, setStudents] = useState([])

    useEffect(() => {
        setLoading(true)
        getPaiements()
        getStudents()
        setLoading(false)
    }, [])

    function getPaiements() {
        AxiosApi.get('/get-paiements/1')
        .then(res => setPaiements(res.data))
    }

    function getStudents() {
        AxiosApi.get('/get-students/1')
        .then(res => setStudents(res.data))
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setPaiement({...paiement, [name]: value})
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            paiement.ecole = 1
            paiement.intitule = 'Paiement scolarité'
            console.log(paiement)
            const response = await addPaiement(paiement)
            console.log(response)
            setShow(false);
            toast('Paiement enregistré avec succès !')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gestion les inscriptions' link='Inscription' />
                <ToastContainer />

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
                                                <Form.Select onChange={handleChange} className="form-control" name="student">
                                                    <option>-- select --</option>
                                                    {students.map((student, i) => (
                                                        <option key={i} value={student.id}>{student.nom +' ' + student.prenom}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Entrer le montant</Form.Label>
                                                <Form.Control onChange={handleChange} className="form-control" name="montant" />
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
                                                        <th style={{textAlign: 'center'}} scope="col">Code</th>
                                                        <th style={{textAlign: 'center'}} scope="col">Désignation</th>
                                                        <th style={{textAlign: 'center'}} scope="col">Montant</th>
                                                        <th style={{textAlign: 'center'}} scope="col">Date</th>
                                                        <th style={{textAlign: 'center'}} scope="col">Elève</th>
                                                        <th style={{textAlign: 'center'}} scope="col">Reste</th>
                                                        <th style={{textAlign: 'center'}} scope="col">Statut</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loading ?
                                                        <ClipLoader color="#333" />
                                                    :
                                                    <>
                                                        {paiements.map((paiement, i) => (
                                                            <tr>
                                                                <td style={{textAlign: 'center'}}>{paiement.code}</td>
                                                                <td style={{textAlign: 'center'}}>{paiement.intitule}</td>
                                                                <td style={{textAlign: 'center'}}>{paiement.montant} FCFA</td>
                                                                <td style={{textAlign: 'center'}}>{dateParser(paiement.created_at)}</td>
                                                                <td style={{textAlign: 'center'}}>{paiement.nom_student +' '+ paiement.prenom_student}</td>
                                                                <td></td>
                                                                <td style={{textAlign: 'center'}}>
                                                                    <span className="badge bg-success">Soldé</span>
                                                                    <span className="badge bg-danger">Débiteur</span>
                                                                    <span className="badge bg-warning">Acceptable</span>
                                                                </td>
                                                            </tr>
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

export default Inscription;