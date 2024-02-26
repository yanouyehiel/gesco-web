import React, { useState, useEffect, useContext } from "react";
import InfoPage from "../components/InfoPage";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import { ClipLoader} from 'react-spinners'
import { addTarif, getAllTarifs, getClasses } from "../services/MainControllerApi";
import { ToastContainer, toast } from "react-toastify";
import { getEcoleStored } from "../services/LocalStorage";
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";
import Tarif from "../components/Tarif";
import ButtonComponent from '../components/Button';


const Tarifs = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [classes, setClasses] = useState([])
    const [tarif, setTarif] = useState({})
    const [tarifs, setTarifs] = useState([])
    const ecole_id = getEcoleStored()
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const [filteredTarifs, setFilteredTarifs] = useState([])
    const [isFilteredIns, setIsFilteredIns] = useState(false)
    const [isFilteredT1, setIsFilteredT1] = useState(false)
    const [isFilteredT2, setIsFilteredT2] = useState(false)
    const [isFilteredT3, setIsFilteredT3] = useState(false)

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getAllClasses()
        getTarifs().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ecole_id])

    async function getAllClasses() {
        await getClasses(ecole_id).then((res) => {
            setClasses(res)
        })
    }

    async function getTarifs() {
        await getAllTarifs(ecole_id).then((res) => {
            setTarifs(res)
        })
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setTarif({...tarif, [name]: value})
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        tarif.ecole = ecole_id;
        setShow(false);
        await addTarif(tarif).then((res) => {
            toast(res)
            getTarifs().then(() => setLoading(false))
        })
    }

    const handleFilter = (filter, e) => {
        e.preventDefault()
        if (filter === 'inscription') {
            setIsFilteredIns(true)
            const tarifsF = tarifs.sort((a, b) => a.inscription.localCompare(b.inscription))
            setFilteredTarifs(tarifsF)
        } else if (filter === 'premiere_tranche') {
            setIsFilteredT1(true)
            const tarifsF = tarifs.sort((a, b) => a.premiere_tranche.localCompare(b.premiere_tranche))
            setFilteredTarifs(tarifsF)
        } else if (filter === 'deuxieme_tranche') {
            setIsFilteredT2(true)
            const tarifsF = tarifs.sort((a, b) => a.deuxieme_tranche.localCompare(b.deuxieme_tranche))
            setFilteredTarifs(tarifsF)
        } else if (filter === 'troisieme_tranche') {
            setIsFilteredT3(true)
            const tarifsF = tarifs.sort((a, b) => a.troisieme_tranche.localCompare(b.troisieme_tranche))
            setFilteredTarifs(tarifsF)
        }
    }

    return (
        <main id="main" className="main">
            <InfoPage title='Gestion des tarifs' link='Tarifs' />
            <ToastContainer />

            <br />
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center text-danger">GERER LES TARIFS</h1>
                        <ButtonComponent onClick={handleShow}>Enregistrer un tarif</ButtonComponent>
                        <br /><br />
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
                                        <ButtonComponent size='lg' type='submit'>Enregistrer</ButtonComponent>
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
                                            <li><Link className="dropdown-item" to="#" onClick={() => handleFilter("inscription")}>Inscription</Link></li>
                                            <li><Link className="dropdown-item" to="#" onClick={() => handleFilter("premiere_tranche")}>Première tranche</Link></li>
                                            <li><Link className="dropdown-item" to="#" onClick={() => handleFilter("deuxieme_tranche")}>Deuxième tranche</Link></li>
                                            <li><Link className="dropdown-item" to="#" onClick={() => handleFilter("troisieme_tranche")}>Troisième tranche</Link></li>
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
                                                    {(isFilteredIns || isFilteredT1 || isFilteredT2 || isFilteredT3) ?
                                                        filteredTarifs.map((tarif, i) => (
                                                            <Tarif tarif={tarif} key={i} />
                                                        )) :
                                                        tarifs.map((tarif, i) => (
                                                            <Tarif tarif={tarif} key={i} />
                                                        ))
                                                    }
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
    )
}

export default Tarifs;