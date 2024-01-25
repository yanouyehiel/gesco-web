import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import InfoPage from "../../components/InfoPage";
import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Student from "../../components/Student";
import Footer from "../../components/Footer";
import { ClipLoader } from "react-spinners";
import AxiosApi from "../../services/AxiosApi";
import { getEcoleStored } from "../../services/LocalStorage";
import { toast } from "react-toastify";
import { addStudent } from "../../services/StudentController";

const ViewSalle = () => {
    const { numSalle } = useParams();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const [students, setStudents] = useState([])
    const [classe, setClasse] = useState({})
    const ecole_id = getEcoleStored()
    const [student, setStudent] = useState({})

    function getStudents() {
        AxiosApi.get(`/my-students/classe_id=${numSalle}&ecole_id=${ecole_id}`)
        .then(res => setStudents(res.data))
    }
    
    useEffect(() => {
        AxiosApi.get('/get-info-classe/' + numSalle)
            .then(res => setClasse(res.data))
        console.log(classe)
        setLoading(true)
        getStudents()
        setLoading(false)
    }, [])

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setStudent({...student, [name]: value})
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            student.ecole_id = getEcoleStored()
            student.classe_id = parseInt(numSalle)
            addStudent(student).then((res) => {
                console.log(res)
                toast(res.message)
            })
            handleClose()
            
            /*setTimeout(() => {
                window.location.reload()
            }, 3000);*/
        } catch (error) {
            toast(error)
        }
        
    };

    return (
        <>
            <Header />
            <Sidenav />

            <main id="main" classNameName="main">
                <InfoPage title='Salle de classe' link={classe.nom} />

                <div className="content-wrapper">
                    <section className="content mt-2 ">
                        <div className="container-fluid">
                            <h1 className="text-center pt-4 pb-2 text-danger">LISTE DES ELEVES</h1>
                            <Button variant='primary' onClick={handleShow}>
                                Ajouter un élève
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enregistrement d'une élève</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Nom</Form.Label>
                                            <Form.Control type="text" onChange={handleChange} name="nom" className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Prénom</Form.Label>
                                            <Form.Control type="text" onChange={handleChange} name="prenom" className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Date de naissance</Form.Label>
                                            <Form.Control type="date" onChange={handleChange} name="date_naissance" className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Lieu de naissance</Form.Label>
                                            <Form.Control type="text" onChange={handleChange} name="lieu_naissance" className="form-control" required />
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Sexe</Form.Label>
                                            <Form.Select className="form-control" onChange={handleChange} name="sexe" required>
                                                <option value=''>-- select --</option>
                                                <option value='Masculin'>Masculin</option>
                                                <option value='Féminin'>Féminin</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group mt-4">
                                            <Form.Label className="control-label">Année de scolarisation</Form.Label>
                                            <Form.Select className="form-control" onChange={handleChange} name="annee_scolaire" required>
                                                <option value=''>-- select --</option>
                                                <option value='2023 - 2024'>2023 - 2024</option>
                                                <option value='2024 - 2025'>2024 - 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <br/>
                                        <Button variant="primary" size='lg' type='submit'>
                                            Enregistrer
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </section>
  
                    <div className="mt-4">
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>Matricule</th>
                                    <th style={{ textAlign: 'center' }}>Nom</th>
                                    <th style={{ textAlign: 'center' }}>Prenom</th>
                                    <th style={{ textAlign: 'center' }}>Naissance</th>
                                    <th style={{ textAlign: 'center' }}>Lieu</th>
                                    <th style={{ textAlign: 'center' }}>Sexe</th>
                                    <th style={{ textAlign: 'center' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {loading ?
                                <ClipLoader color="#333" cssOverride={{alignItems: 'center !important', justifyContent: 'center !important'}} />
                                :
                                <>
                                    {students.map((student, index) => (
                                        <Student key={index} student={student} />
                                    ))}
                                </>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ViewSalle;