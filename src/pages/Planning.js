import React, { useState, useEffect, useContext } from "react";
import InfoPage from "../components/InfoPage";
import { Button, Modal, Form } from "react-bootstrap";
import EmploiDeTemps from "../components/EmploiDeTemps";
import { ClipLoader} from 'react-spinners'
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";
import { addHoraire, getAllMatieres, getClasses, getHoraires } from "../services/MainControllerApi";
import { getEcoleStored } from "../services/LocalStorage";
import { toast, ToastContainer } from "react-toastify";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ButtonComponent from "../components/Button";

const Planning = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [loadingR, setLoadingR] = useState(true)
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth)
    const [showAdd, setShowAdd] = useState(false)
    const [horaires, setHoraires] = useState([])
    const ecoleId = getEcoleStored()
    const [horaire, setHoraire] = useState({})
    const [classes, setClasses] = useState([])
    const columnDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    const columnOrder = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    const [matieres, setMatieres] = useState([])

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getHoraires(ecoleId).then((res) => {
            setHoraires(res)
        })
        getAllMatieres(ecoleId).then((res) => {
            setMatieres(res)
        })
        getClasses(ecoleId).then((res) => {
            setClasses(res)
            setLoadingR(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClose = () => {
        if (show) {
            setShow(false);
        } else if (showAdd) {
            setShowAdd(false)
        }
    }
    const handleShow = () => {
        if (!show) {
            if (horaires.length === 0) {
                setShowAdd(true)
            } else {
                setShow(true)
            }
        } else if (!showAdd) {
            if (horaires.length === 0) {
                setShowAdd(true)
            }
        }
    }

    function showModalHoraire() {
        setShowAdd(true)
    }

    const handleChangeHoraire = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setHoraire({...horaire, [name]: value})
    }

    const submitHoraires = (e) => {
        e.preventDefault();
        horaire.ecole_id = ecoleId
        
        addHoraire(horaire).then((res) => {
            setShowAdd(false)
            toast(res)
            setLoading(true)
            getHoraires(ecoleId).then((res) => {
                setHoraires(res)
                setLoading(false)
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
        setShow(false);
    }

    const onDragEnd = () => {

    }

    return(
        <main id="main" className="main">
            <InfoPage title='Gestion du planning' link='Emploi de temps' />
            <ToastContainer />
            <br />
            <div className="content-wrapper">
                <section className="content mt-2 ">
                    <div className="container-fluid">
                        <h1 className="text-center pt-4 pb-2 text-danger">PLANNING</h1>
                        <div className="container">
                            {/* <Button variant="primary" onClick={handleShow} style={{marginRight: '10px'}}>
                                Enregistrer un planning
                            </Button> */}
                            <ButtonComponent onClick={handleShow} mr='10px' mb='-30px' color='#009AD7'>Enregistrer un planning</ButtonComponent>
                            <ButtonComponent onClick={showModalHoraire} mr='10px' mb='-30px' color='#48BB8C'>Enregistrer une tranche horaire</ButtonComponent>
                            {/* <Button variant="secondary" onClick={showModalHoraire}>
                                Enregistrer une tranche horaire
                            </Button> */}
                            <Modal show={show} onHide={handleClose} size="xl">
                                <Modal.Header closeButton>
                                    <Modal.Title>Nouvel emploi de temps hebdomadaire</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {/* <Form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <Form.Group className="form-group mt-4">
                                                    <Form.Label className="control-label">Sélectionner la classe</Form.Label>
                                                    <Form.Select className="form-control">
                                                        <option>-- choix --</option>
                                                        <option>SIL</option>
                                                        <option>CEP</option>
                                                        <option>CE1</option>
                                                        <option>CE2</option>
                                                        <option>CM1</option>
                                                        <option>CM2</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div className="col-lg-6">
                                                <Form.Group className="form-group mt-4">
                                                    <Form.Label className="control-label">Sélectionner le trimestre</Form.Label>
                                                    <Form.Select className="form-control">
                                                        <option>-- choix --</option>
                                                        <option>Trimestre 1</option>
                                                        <option>Trimestre 2</option>
                                                        <option>Trimestre 3</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <Form.Group className="form-group mt-4">
                                                    <Form.Label className="control-label">Sélectionner l'année scolaire</Form.Label>
                                                    <Form.Select className="form-control">
                                                        <option>-- choix --</option>
                                                        <option>2021 - 2022</option>
                                                        <option>2022 - 2023</option>
                                                        <option>2023 - 2024</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div className="col-lg-6">
                                                <Form.Group className="form-group mt-4">
                                                    <Form.Label className="control-label">Entrée la période</Form.Label>
                                                    <Form.Control className="form-control" type="text" placeholder="Semaine du __/__ au __/__" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="card mt-5">
                                                <div class="card-body">
                                                    <table id="example1" class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Journée</th>
                                                                <th>Heures</th>
                                                                <th>Lundi</th>
                                                                <th>Mardi</th>
                                                                <th>Mercredi</th>
                                                                <th>Jeudi</th>
                                                                <th>Vendredi</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Control className="form-control" type="date" />
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Control className="form-control" type="text" placeholder="8h-9h" />
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <Button variant="primary" size='lg' type='submit'>
                                            Enregistrer
                                        </Button>
                                    </Form> */}
                                    <Form onSubmit={handleSubmit}>
                                        <div className="row">
                                            {loadingR ?
                                                <ClipLoader color="#333" />
                                                :
                                                <>
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                        <Form.Group className="form-group mt-4">
                                                            <Form.Label className="control-label">Sélectionner la classe</Form.Label>
                                                            <Form.Select className="form-control">
                                                                <option>-- choix --</option>
                                                                {classes.length > 0 &&
                                                                    classes.map((classe, i) => (
                                                                        <option key={i} value={classe.id}>{classe.nom}</option>
                                                                    ))
                                                                }
                                                            </Form.Select>
                                                        </Form.Group>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <Form.Group className="form-group mt-4">
                                                                <Form.Label className="control-label">Sélectionner le trimestre</Form.Label>
                                                                <Form.Select className="form-control">
                                                                    <option>-- choix --</option>
                                                                    <option>Trimestre 1</option>
                                                                    <option>Trimestre 2</option>
                                                                    <option>Trimestre 3</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <Form.Group className="form-group mt-4">
                                                                <Form.Label className="control-label">Sélectionner l'année scolaire</Form.Label>
                                                                <Form.Select className="form-control">
                                                                    <option>-- choix --</option>
                                                                    <option>2023 - 2024</option>
                                                                    <option>2024 - 2025</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <Form.Group className="form-group mt-4">
                                                                <Form.Label className="control-label">Entrer la semaine</Form.Label>
                                                                <Form.Control className="form-control" type="text" placeholder="Semaine du __/__ au __/__" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <DragDropContext onDragEnd={onDragEnd}>
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <h5>Les Journées</h5>
                                                                    <ul>
                                                                        {columnDays.map((day, i) => (
                                                                            <li key={i}>{day}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </DragDropContext>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h5>La planning</h5>
                                                        {/* <Droppable droppableId="id"></Droppable> */}
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h5>Les matieres</h5>
                                                                <ul>
                                                                    {matieres.map((mat, i) => (
                                                                        <li key={i}>{mat.intitule}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>

                            <Modal show={showAdd} onHide={handleClose} size="sm">
                                <Modal.Header closeButton>
                                    <Modal.Title style={{fontSize: '18px'}}>Enregistrer une horaire</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={submitHoraires}>
                                        <div className="row">
                                            <Form.Group>
                                                <Form.Label>Entrer la tranche horaire</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    onChange={handleChangeHoraire} 
                                                    required 
                                                    placeholder="Exemple: 7h30 - 9h30"
                                                    name="horaire"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mt-2">
                                                <ButtonComponent type='submit' mt='10px' className="btn-block" color='#009AD7'>Enregistrer</ButtonComponent>
                                            </Form.Group>
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </section>
            </div>
            <div class="wrapper">
                <div class="content-wrapper">
                    <section class="content mt-2 ">
                        <div class="container-fluid">
                            <div class="card mt-5">
                                <div class="card-body">
                                    <div class="h3 text-danger my-3">Emploi de temps enregistré</div>
                                    <table id="example1" class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Numéro</th>
                                                <th>Classe</th>
                                                <th>Trimestre</th>
                                                <th>Anne Scolaire</th>
                                                <th>Semaine</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ?
                                                <ClipLoader color="#333" />
                                                :
                                                <>
                                                    <EmploiDeTemps />
                                                    <EmploiDeTemps />
                                                    <EmploiDeTemps />
                                                    <EmploiDeTemps />
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Planning;