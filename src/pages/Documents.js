import InfoPage from "../components/InfoPage";
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { getEcoleStored } from "../services/LocalStorage";
import { getStudents } from "../services/StudentController";
import { askDocument, getDocumentsAsked } from "../services/MainControllerApi";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import Document from "../components/Document";
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";
import ButtonComponent from "../components/Button";


const Documents = () => {
    const [show, setShow] = useState(false);
    const [showBulletin, setShowBulletin] = useState(false);
    const [showSortie, setShowSortie] = useState(false);
    const [showC, setShowC] = useState(false);
    const ecole_id = getEcoleStored()
    const [students, setStudents] = useState([])
    const [doc, setDoc] = useState({})
    const [documents, setDocuments] = useState([])
    const [loading, setLoading] = useState(true)
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    const handleShowNotes = () => setShow(true);
    const handleShowBulletin = () => setShowBulletin(true);
    const handleShowSortie = () => setShowSortie(true);
    const handleShowC = () => setShowC(true);

    const handleClose = () => setShow(false);
    const handleCloseB = () => setShowBulletin(false);
    const handleCloseS = () => setShowSortie(false);
    const handleCloseC = () => setShowC(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        doc.ecole_id = ecole_id       
        setLoading(true)
        if (show) {
            doc.intitule = "Requête d'un rélevé de notes"
        } else if (showBulletin) {
            doc.intitule = "Requête d'un bulletin de notes"
        } else if (showSortie) {
            doc.intitule = "Requête d'une autorisation de sortie"
        } else if (showC) {
            doc.intitule = "requête d'un certificat de scolarité"
        }
        
        askDocument(doc).then((res) => {
            toast(res)
            if (show) {
                handleClose()
            } else if (showBulletin) {
                handleCloseB()
            } else if (showSortie) {
                handleCloseS()
            } else if (showC) {
                handleCloseC()
            }
            getDocuments()
        }, (error) => {
            toast.error(error.message)
        })
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setDoc({...doc, [name]: value})
    }

    async function getDocuments() {
        await getDocumentsAsked(ecole_id).then((res) => {
            setDocuments(res)
        })
    }

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getStudents(ecole_id).then((res) => setStudents(res))
        getDocuments().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ecole_id])

    return(
        <main id="main" className="main">
            <InfoPage title='Gestion des documents scolaires' link='Demander un document' />
            <ToastContainer />

            <br />
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-xxl-4 col-md-6" onClick={handleShowNotes} style={{cursor: 'pointer'}}>
                                <div className="card info-card sales-card">
                                    <div className="card-body">
                                        <h5 className="card-title">Demander un rélevé de notes</h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-journal-text"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>Rélevé de notes</h6>
                                                <span className="text-success small pt-1 fw-bold">Disponible</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Vous désirez un rélevé de notes</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Choisissez l'année scolaire</Form.Label>
                                            <Form.Select className="form-control" name="annee_scolaire" onChange={handleChange} required>
                                                <option>-- select --</option>
                                                <option>2021-2022</option>
                                                <option>2022-2023</option>
                                                <option>2023-2024</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner l'élève</Form.Label>
                                            <Form.Select className="form-control" name="student_id" onChange={handleChange} required>
                                                <option>-- select --</option>
                                                {students.length > 0 &&
                                                    students.map((student, i) => (
                                                        <option key={i} value={student.id}>{student.nom +' '+ student.prenom}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        
                                        <ButtonComponent size='lg' type='submit'>
                                            Demander
                                        </ButtonComponent>
                                    </Form>
                                </Modal.Body>
                            </Modal>

                            <div className="col-xxl-4 col-md-6" onClick={handleShowBulletin} style={{cursor: 'pointer'}}>
                                <div className="card info-card sales-card">
                                    <div className="card-body">
                                        <h5 className="card-title">Demander un bulletin de notes</h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-journal-text"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>Bulletin de notes</h6>
                                                <span className="text-success small pt-1 fw-bold">Disponible</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal show={showBulletin} onHide={handleCloseB}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Vous désirez un bulletin de notes</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Choisissez l'année scolaire</Form.Label>
                                            <Form.Select className="form-control" name="annee_scolaire" onChange={handleChange} required>
                                                <option>-- select --</option>
                                                <option>2021-2022</option>
                                                <option>2022-2023</option>
                                                <option>2023-2024</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner l'élève</Form.Label>
                                            <Form.Select className="form-control" name="student_id" onChange={handleChange} required>
                                                <option>-- select --</option>
                                                {students.length > 0 &&
                                                    students.map((student, i) => (
                                                        <option key={i} value={student.id}>{student.nom +' '+ student.prenom}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        
                                        <ButtonComponent size='lg' type='submit'>
                                            Demander
                                        </ButtonComponent>
                                    </Form>
                                </Modal.Body>
                            </Modal>

                            <div className="col-xxl-4 col-md-6" style={{cursor: 'pointer'}} onClick={handleShowSortie}>
                                <div className="card info-card sales-card">
                                    <div className="card-body">
                                        <h5 className="card-title">Demander une autorisation de sortie</h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-journal-text"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>Autorisation de sortie</h6>
                                                <span className="text-success small pt-1 fw-bold">Disponible</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal show={showSortie} onHide={handleCloseS}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Vous désirez une autorisation de sortie</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Choisissez l'année scolaire</Form.Label>
                                            <Form.Select className="form-control" name="annee_scolaire" onChange={handleChange} required>
                                                <option>-- select --</option>
                                                <option>2021-2022</option>
                                                <option>2022-2023</option>
                                                <option>2023-2024</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner l'élève</Form.Label>
                                            <Form.Select className="form-control" name="student_id" onChange={handleChange} required>
                                                <option>-- select --</option>
                                                {students.length > 0 &&
                                                    students.map((student, i) => (
                                                        <option key={i} value={student.id}>{student.nom +' '+ student.prenom}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        
                                        <ButtonComponent size='lg' type='submit'>
                                            Demander
                                        </ButtonComponent>
                                    </Form>
                                </Modal.Body>
                            </Modal>

                            <div className="col-xxl-4 col-md-6" style={{cursor: 'pointer'}} onClick={handleShowC}>
                                <div className="card info-card sales-card">
                                    <div className="card-body">
                                        <h5 className="card-title">Demander un certificat de scolarité</h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-journal-text"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>Certificat de scolarité</h6>
                                                <span className="text-success small pt-1 fw-bold">Disponible</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal show={showC} onHide={handleCloseC}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Vous désirez un certificat de scolarité</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Choisissez l'année scolaire</Form.Label>
                                            <Form.Select className="form-control" name="annee_scolaire" onChange={handleChange} required>
                                                <option>-- select --</option>
                                                <option>2021-2022</option>
                                                <option>2022-2023</option>
                                                <option>2023-2024</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sélectionner l'élève</Form.Label>
                                            <Form.Select className="form-control" name="student_id" onChange={handleChange} required>
                                                <option>-- select --</option>
                                                {students.length > 0 &&
                                                    students.map((student, i) => (
                                                        <option key={i} value={student.id}>{student.nom +' '+ student.prenom}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        
                                        <ButtonComponent size='lg' type='submit'>
                                            Demander
                                        </ButtonComponent>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>

                        <div className="card">
                            <h3 className="text-center pt-4 pb-2 text-danger">LISTE DES DOCUMENTS DEMANDES</h3>
                            <div className="card-body">
                                <table id="example1" className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>#</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Année Scolaire</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Intitulé</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Demandeur</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Date de demande</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {loading && documents.length === 0 ?
                                        <ClipLoader color="#333" />
                                        :
                                        <>
                                            {documents.map((doc, index) => (
                                                <Document key={index} doc={doc} />
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

export default Documents;