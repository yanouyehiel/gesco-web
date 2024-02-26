import { useParams } from "react-router-dom";
import InfoPage from "../../components/InfoPage";
import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import Student from "../../components/Student";
import { ClipLoader } from "react-spinners";
import { getEcoleStored } from "../../services/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import { addStudent } from "../../services/StudentController";
import { getStudentsOfClasse } from "../../services/EnseignementController";
import { infoClasse } from "../../services/MainControllerApi";
import { verifyUser } from "../../utils/functions";
import Auth from "../../contexts/Auth";
import ButtonComponent from "../../components/Button";

const ViewSalle = () => {
    const { numSalle } = useParams();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState([])
    const [classe, setClasse] = useState({})
    const ecole_id = getEcoleStored()
    const [student, setStudent] = useState({})
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const [filter, setFilter] = useState("")
    const [isFilteredNom, setIsFilteredNom] = useState(false)
    const [isFilteredSexe, setIsFilteredSexe] = useState(false)
    const [filteredStudents, setFilteredStudents] = useState([])

    async function getStudents() {
        await getStudentsOfClasse(numSalle, ecole_id).then((res) => {
            setStudents(res)
        })
    }

    async function getInfoClasse() {
        await infoClasse(numSalle).then((res) => {
            setClasse(res)
        })
    }
    
    useEffect(() => {      
        verifyUser({isAuthenticated, setIsAuthenticated})
        getInfoClasse()
        getStudents().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ecole_id])

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setStudent({...student, [name]: value})
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        student.ecole_id = getEcoleStored()
        student.classe_id = parseInt(numSalle)

        await addStudent(student).then((res) => {
            toast(res)
            handleClose()
            
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        })
    };

    function handleFilter(e) {
        e.preventDefault()
        
        if (filter === 'nom') {
            setIsFilteredSexe(false)
            setIsFilteredNom(true)
            const studentsF = students.sort((a, b) => a.nom.localeCompare(b.nom))
            setFilteredStudents(studentsF)
        } else if (filter === 'sexe') {
            setIsFilteredNom(false)
            setIsFilteredSexe(true)
            const studentsF = students.sort((a, b) => a.sexe.localeCompare(b.sexe))
            setFilteredStudents(studentsF)
        } else if (filter === 'tout') {
            setIsFilteredNom(false)
            setIsFilteredSexe(false)
        }
    }

    return (
        <main id="main" classNameName="main">
            <InfoPage title='Salle de classe' link={classe.nom} />
            <ToastContainer />

            <div className="content-wrapper">
                <section className="content mt-2 ">
                    <div className="container-fluid">
                        <h1 className="text-center pt-4 pb-2 text-danger">LISTE DES ELEVES</h1>
                        <ButtonComponent onClick={handleShow}>Ajouter un élève</ButtonComponent>

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
                                    <ButtonComponent size='lg' type='submit'>Enregistrer</ButtonComponent>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </section>
                
                <div className="mt-4">
                    <Form className='col-lg-3' onSubmit={handleFilter}>
                        <Form.Group style={{display: 'flex'}}>
                            <Form.Select onChange={(e) => setFilter(e.target.value)} style={{minWidth: '200px'}}>
                                <option value='tout'>Tout</option>
                                <option value='nom'>Nom</option>
                                <option value='sexe'>Sexe</option>
                            </Form.Select>
                            <ButtonComponent type="submit" ml='10px'>Appliquer</ButtonComponent>
                        </Form.Group>
                    </Form>
                    <table id="example1" className="table table-bordered table-striped mt-2">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>#</th>
                                <th style={{ textAlign: 'center' }}>Matricule</th>
                                <th style={{ textAlign: 'center' }}>Nom</th>
                                <th style={{ textAlign: 'center' }}>Prenom</th>
                                <th style={{ textAlign: 'center' }}>Naissance</th>
                                <th style={{ textAlign: 'center' }}>Classe</th>
                                <th style={{ textAlign: 'center' }}>Sexe</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {loading && students.length === 0 ?
                            <ClipLoader loading={true} color="#333" />
                            :
                            <>
                                {(isFilteredNom || isFilteredSexe) ?
                                    filteredStudents.map((student, index) => (
                                        <Student key={index} student={student} num={index} />
                                    ))
                                    :
                                    students.map((student, index) => (
                                        <Student key={index} student={student} num={index} />
                                    ))
                                }
                            </>
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default ViewSalle;