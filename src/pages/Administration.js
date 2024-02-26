import React, { useState, useEffect, useContext } from 'react'
import InfoPage from "../components/InfoPage";
import { Modal, Form } from 'react-bootstrap';
import Employe from '../components/Employe';
import { ClipLoader} from 'react-spinners'
import { ToastContainer, toast } from 'react-toastify';
import { addPersonne, getAllEmployes, getClasses, getRoles } from '../services/MainControllerApi';
import { getEcoleStored } from '../services/LocalStorage';
import Auth from '../contexts/Auth'
import { verifyUser } from '../utils/functions';
import ButttonComponent from '../components/Button'
import ButtonComponent from '../components/Button';


const Administration = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [personnel, setPersonnel] = useState([])
    const [roles, setRoles] = useState([])
    const [classes, setClasses] = useState([])
    const [employe, setEmploye] = useState({})
    const ecole_id = getEcoleStored()
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getPersonnel()
        getAllRoles()
        getAllClasses().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setEmploye({...employe, [name]: value})
    }

    async function getPersonnel() {
        await getAllEmployes(ecole_id).then((res) => {
            setPersonnel(res)
        })
    }

    async function getAllRoles() {
        await getRoles().then((res) => {
            setRoles(res)
        })
    }

    async function getAllClasses() {
        await getClasses(ecole_id).then((res) => {
            setClasses(res)
        })
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (employe.cpassword !== employe.password) {
            toast.error('Les mots de passe ne sont pas identiques')
        } else {
            if (!employe.role_id) {
                toast.error("Veuillez attribuer un rôle à l'utilisateur")
            } else {
                setLoading(true)
                employe.ecole_id = ecole_id;
                employe.role_id = parseInt(employe.role_id)
                employe.classe_id = employe.classe_id === '' ? 0 : parseInt(employe.classe_id)
                setShow(false);
                
                addPersonne(employe).then((res) => {
                    toast(res)
                    getPersonnel().then(() => setLoading(false))
                })
            }
        }
    }

    return(
        <main id="main" className="main">
            <InfoPage title='Gerer mon admistration' link='Staff interne' />
            <ToastContainer />

            <br />
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center text-danger">Mes Employés</h1>
                        <div className="container">
                            <ButttonComponent onClick={handleShow}>Ajouter un employé</ButttonComponent>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enregistrement d'un employé</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Nom</Form.Label>
                                            <Form.Control type="text" name='nom' onChange={handleChange} className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Prénom</Form.Label>
                                            <Form.Control type="text" name='prenom' onChange={handleChange} className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Email</Form.Label>
                                            <Form.Control type="email" name='email' onChange={handleChange} className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Adresse</Form.Label>
                                            <Form.Control type="text" name='adresse' onChange={handleChange} className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Téléphone</Form.Label>
                                            <Form.Control type="text" name='telephone' onChange={handleChange} className="form-control" required />
                                        </Form.Group>
                                        {/* <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Salaire</Form.Label>
                                            <Form.Control type="text" className="form-control" placeholder="" />
                                        </Form.Group> */}
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Mot de passe</Form.Label>
                                            <Form.Control type="password" name='password' onChange={handleChange} className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Confirmer le mot de passe</Form.Label>
                                            <Form.Control type="password" name='cpassword' onChange={handleChange} className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Attribuer un rôle</Form.Label>
                                            <Form.Select className="form-control" name='role_id' onChange={handleChange} required>
                                                <option>-- select --</option>
                                                {roles.filter(r => r.id !== 3).map((role, index) => (
                                                    <option key={index} value={role.id}>{role.intitule}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Attribuer une classe <span style={{color: 'red'}}>si c'est un enseignant</span></Form.Label>
                                            <Form.Select className="form-control" name='classe_id' onChange={handleChange}>
                                                <option>-- select --</option>   
                                                {classes.map((classe, index) => (
                                                    <option key={index} value={classe.id}>{classe.nom}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                        <br/>
                                        <ButtonComponent type='submit'>Créer profil</ButtonComponent>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                            
                        </div><br/>

                        <div className="card">
                            <div className="card-body">
                                <table id="example1" className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: 'center' }}>#</th>
                                            <th style={{ textAlign: 'center' }}>Matricule</th>
                                            <th style={{ textAlign: 'center' }}>Noms</th>
                                            <th style={{ textAlign: 'center' }}>Rôle</th>
                                            <th style={{ textAlign: 'center' }}>Date d'embauche</th>
                                            <th style={{ textAlign: 'center' }}>Téléphone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ?
                                            <ClipLoader color="#333" />
                                            :
                                            <>
                                                {personnel.filter((pers => pers.role !== 'Parent')).map((pers, index) => (
                                                    <Employe key={index} employe={pers} num={index} />
                                                ))}
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
    )
}

export default Administration;