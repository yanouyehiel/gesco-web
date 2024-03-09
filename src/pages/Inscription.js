import React, { useState, useEffect } from "react";
import InfoPage from "../components/InfoPage";
import { Link } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";
import { ClipLoader} from 'react-spinners'
import { ToastContainer, toast } from "react-toastify";
import { addPaiement, getPaiementSchool } from "../services/MainControllerApi";
import { getEcoleStored } from "../services/LocalStorage";
import Paiement from "../components/Paiement";
import { getStudents } from "../services/StudentController";
import ButtonComponent from "../components/Button";


const Inscription = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [paiement, setPaiement] = useState({})
    const [paiements, setPaiements] = useState([])
    const [students, setStudents] = useState([])
    const ecole_id = getEcoleStored()
    const [isFilteredNom, setIsFilteredNom] = useState(false)
    const [isFilteredDesignation, setIsFilteredDesignation] = useState(false)
    //const [filter, setFilter] = useState("")
    const [filteredPaiements, setFilteredPaiements] = useState([])

    useEffect(() => {
        getStudentsSchool() 
        getPaiements().then(() => setLoading(false))      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ecole_id])

    async function getPaiements() {
        await getPaiementSchool(ecole_id).then((res) => {
            setPaiements(res)
        })
    }

    async function getStudentsSchool() {
        await getStudents(ecole_id).then((res) => {
            setStudents(res)
        })
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setPaiement({...paiement, [name]: value})
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShow(false);
        setLoading(true)
        paiement.ecole_id = ecole_id
        await addPaiement(paiement).then((res) => {
            toast(res)
            getPaiements().then(() => setLoading(false)) 
        })  
    }

    const handleFilter = (filter) => {
        if (filter === 'designation') {
            setIsFilteredDesignation(true)
            const paiementsF = paiements.sort((a, b) => a.intitule.localeCompare(b.intitule))
            setFilteredPaiements(paiementsF)
        } else if (filter === 'nom') {
            setIsFilteredNom(true)
            const paiementsF = paiements.sort((a, b) => a.nom_student.localeCompare(b.nom_student))
            setFilteredPaiements(paiementsF)
        }
    }

    return (
        <main id="main" className="main">
            <InfoPage title='Gestion les inscriptions' link='Inscription' />
            <ToastContainer />

            <br />
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center text-danger">GERER LES INSCRIPTIONS</h1>
                        <ButtonComponent onClick={handleShow}>Enregistrer un paiement</ButtonComponent>
                        <br /><br />
                        <div className="row">

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enregistrement un paiement</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner un élève</Form.Label>
                                            <Form.Select onChange={handleChange} className="form-control" name="student_id">
                                                <option>-- select --</option>
                                                {students.map((student, i) => (
                                                    <option key={i} value={student.id}>{student.nom +' ' + student.prenom}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Entrer l'intitulé de la transaction</Form.Label>
                                            <Form.Control onChange={handleChange} className="form-control" name="intitule" />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Entrer le montant</Form.Label>
                                            <Form.Control onChange={handleChange} className="form-control" name="montant" />
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

                                            <li><Link className="dropdown-item" to="#" onClick={() => handleFilter("nom")}>Nom d'eleve</Link></li>
                                            <li><Link className="dropdown-item" to="#" onClick={() => handleFilter("designation")}>Designation</Link></li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">Situation de vos élèves <span>| Tous les eleves</span></h5>

                                        <table className="table table-borderless datatable">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Code</th>
                                                    <th scope="col">Désignation</th>
                                                    <th scope="col">Montant</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Elève</th>
                                                    <th scope="col">Reste</th>
                                                    <th scope="col">Statut</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loading ?
                                                    <ClipLoader color="#333" />
                                                :
                                                <>
                                                    {(isFilteredNom || isFilteredDesignation) ?
                                                        filteredPaiements.map((p, i) => (
                                                            <Paiement key={i} paiement={p} />
                                                        ))
                                                        :
                                                        paiements.map((paiement, i) => (
                                                            <Paiement key={i} paiement={paiement} />
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

export default Inscription;