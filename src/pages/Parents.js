import React, { useState, useEffect, useContext } from 'react'
import InfoPage from "../components/InfoPage";
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Parent from '../components/Parent';
import { Modal, Form, Button } from 'react-bootstrap';
import { getEcoleStored } from '../services/LocalStorage';
import { getAllParentsSchool } from '../services/MainControllerApi';
import { getStudents } from '../services/StudentController';
import { ToastContainer, toast } from 'react-toastify';
import { addPersonne } from '../services/MainControllerApi';
import Auth from '../contexts/Auth';
import { verifyUser } from "../utils/functions";


const Parents = () => {
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const [parents, setParents] = useState([])
    const [students, setStudents] = useState([])
    const ecole_id = getEcoleStored()
    const [parent, setParent] = useState({})
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getParents()
        getAllStudents().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setParent({...parent, [name]: value})
    }

    async function getParents() {
        await getAllParentsSchool(ecole_id).then((res) => {
            setParents(res)
        })
    }

    async function getAllStudents() {
        await getStudents(ecole_id).then((res) => setStudents(res))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        if (parent.password === parent.cpassword) {
            parent.ecole_id = ecole_id
            parent.role_id = 3
            parent.student_id = parseInt(parent.student_id)
            console.log(parent)

            addPersonne(parent).then((res) => {
                setShow(false);
                toast(res)
                getParents(() => setLoading(false))
            })
        } else {
            toast('Les mots de passe ne sont pas identiques')
        }
        
    }


    return(
        <main id="main" className="main">
            <InfoPage title="Gérer les parents d'eleves" link="Mes parents d'eleves" />
            <ToastContainer />

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
                                            <Form.Control type="text" className="form-control" name='nom' onChange={handleChange} required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Prénom</Form.Label>
                                            <Form.Control type="text" className="form-control" name='prenom' onChange={handleChange} required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Adresse</Form.Label>
                                            <Form.Control type="text" className="form-control" name='email' onChange={handleChange} required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Téléphone</Form.Label>
                                            <Form.Control type="text" className="form-control" name='telephone' onChange={handleChange} required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Mot de passe</Form.Label>
                                            <Form.Control type="password" className="form-control" name='password' onChange={handleChange} required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Confirmer le mot de passe</Form.Label>
                                            <Form.Control type="password" className="form-control" name='cpassword' onChange={handleChange} required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner son enfant</Form.Label>
                                            <Form.Select className="form-control" name='student_id' onChange={handleChange} required>
                                                <option>-- select --</option>
                                                {students.map((stud, i) => (
                                                    <option key={i} value={stud.id}>{`${stud.nom} ${stud.prenom}`}</option>
                                                ))}
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
                                                    <th style={{ textAlign: 'center' }}>#</th>
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
                                                            <Parent key={index} parent={parent} num={index} />
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
    )
}

export default Parents;