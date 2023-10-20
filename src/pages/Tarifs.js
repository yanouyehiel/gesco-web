import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import Footer from "../components/Footer";
import { ClipLoader} from 'react-spinners'
import AxiosApi from "../services/AxiosApi";
import { addTarif } from "../services/MainControllerApi";
import { ToastContainer, toast } from "react-toastify";

export const Tarifs = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const [classes, setClasses] = useState([])
    const [tarif, setTarif] = useState({})
    const [tarifs, setTarifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getClasses()
        getTarifs()
        setLoading(false)
    }, [])

    function getClasses() {
        AxiosApi.get('/get-classes-school/1')
        .then(res => setClasses(res.data))
    }

    function getTarifs() {
        AxiosApi.get('/get-tarifs/1')
        .then(res => setTarifs(res.data))
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setTarif({...tarif, [name]: value})
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        tarif.ecole = 1;
        console.log(tarif)
        try {
            const response = await addTarif(tarif)
            console.log(response)
            setShow(false);
            toast('Tarif ajouté avec succès !')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gestion des tarifs' link='Tarifs' />
                <ToastContainer />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">GERER LES TARIFS</h1>
                            <Button variant="primary" onClick={handleShow}>
                                Enregistrer un tarif
                            </Button><br /><br />
                            <div className="row">

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Enregistrement d'un tarif</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Sélectionner une classe</Form.Label>
                                                <Form.Select className="form-control" onChange={handleChange} name="classe">
                                                    <option>-- select --</option>
                                                    {classes.map((classe, i) => (
                                                        <option key={i} value={classe.id}>{classe.nom}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Montant inscription</Form.Label>
                                                <Form.Control onChange={handleChange} className="form-control" name="inscription" type="number" required />
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Montant première tranche</Form.Label>
                                                <Form.Control onChange={handleChange} className="form-control" name="premiere_tranche" type="number" required />
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Montant deuxième tranche</Form.Label>
                                                <Form.Control onChange={handleChange} className="form-control" name="deuxieme_tranche" type="number" required />
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Montant troisième tranche</Form.Label>
                                                <Form.Control onChange={handleChange} className="form-control" name="troisieme_tranche" type="number" required />
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
                                                <li><Link className="dropdown-item" to="#">Salle de classe</Link></li>
                                                <li><Link className="dropdown-item" to="#">Montant</Link></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Listing de tous les tarifs <span>| Toutes les classes</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th style={{ textAlign: 'center' }} scope="col">Classe</th>
                                                        <th style={{ textAlign: 'center' }} scope="col">Inscription</th>
                                                        <th style={{ textAlign: 'center' }} scope="col">Première tranche</th>
                                                        <th style={{ textAlign: 'center' }} scope="col">Deuxième tranche</th>
                                                        <th style={{ textAlign: 'center' }} scope="col">Troisième tranche</th>
                                                        <th style={{ textAlign: 'center' }} scope="col">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loading ?
                                                        <ClipLoader color="#333" />
                                                    :
                                                    <>
                                                        {tarifs.map((tarif, i) => (
                                                            <tr key={i}>
                                                                <td className="text-primary" style={{ textAlign: 'center' }}>{tarif.classe}</td>
                                                                <td style={{ textAlign: 'center' }}>{tarif.inscription} FCFA</td>
                                                                <td style={{ textAlign: 'center' }}>{tarif.premiere_tranche} FCFA</td>
                                                                <td style={{ textAlign: 'center' }}>{tarif.deuxieme_tranche} FCFA</td>
                                                                <td style={{ textAlign: 'center' }}>{tarif.troisieme_tranche} FCFA</td>
                                                                <td className="text-success" style={{ textAlign: 'center' }}>
                                                                    {tarif.inscription+tarif.premiere_tranche+tarif.deuxieme_tranche+tarif.troisieme_tranche} FCFA
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