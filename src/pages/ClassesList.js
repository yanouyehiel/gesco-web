import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Classe from '../components/Classe';
import InfoPage from '../components/InfoPage';
import Footer from '../components/Footer';
import { ClipLoader} from 'react-spinners'
import { classes, typesClasse, addClasse } from '../services/MainControllerApi'
import { getItem } from '../services/LocalStorage';
import axios from 'axios';

const ClassesList = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const user = getItem('gescoUser');
    const [typeClasses, setTypeClasses] = useState()
    const [allClasses, setAllClasses] = useState()
    const [classe, setClasse] = useState({
        nom: '',
        //ecole_id: user.ecole_id,
        ecole_id: 1,
        type_classe_id: 0,
        enseignant_id: 0
    });
    
    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setClasse({...classe, [name]: value})
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        
        try {
            const response = await addClasse(classe);
            setMessage(response);
        } catch (err) {
            setMessage(err);
        }
    }
    //console.log(typeClasses)
    //console.log(allClasses)
    useEffect(() => {
        setLoading(true)
        axios.get('/get-classes-school/1').then(res => {
            setAllClasses()
            console.log(allClasses)
        })
        axios.get('/get-types-classe').then(res => setTypeClasses)
    }, [typeClasses, allClasses])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Header />
            <Sidenav />

            <main id="main" className="main">

                <InfoPage title='Salle de classe' link='Gestion des classes' />
                <div className="content-wrapper">
                    <section className="content mt-2 ">
                        <div className="container-fluid">
                            <h1 className="text-center pt-4 pb-2 text-danger">LISTE DES SALLES DE CLASSE</h1>
                            <div className="container">
                                <Button variant="primary" onClick={handleShow}>
                                    Ajouter une salle
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Enregistrement d'une classe</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Nom de la salle</Form.Label>
                                                <Form.Control onChange={handleChange} name='nom' type="text" className="form-control" placeholder="Exemple: SIL A" />
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Sélectionner la classe</Form.Label>
                                                <Form.Select onChange={handleChange} name='type_classe' className="form-control">
                                                    <option>-- select --</option>
                                                    {typeClasses.map((typeClasse) => (
                                                        <option value={typeClasse.id}>{typeClasse.classe}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="form-group mt-4">
                                                <Form.Label className="control-label">Sélectionner un enseignant</Form.Label>
                                                <Form.Select onChange={handleChange} name='enseignant_id' className="form-control">
                                                    <option>-- select --</option>
                                                    <option>ERIC</option>
                                                    <option>TOM</option>
                                                    <option>PAUL</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <br/>
                                            <Button variant="primary" size='lg' type='submit'>
                                                Enregistrer
                                            </Button>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                                
                            </div><br/>

                            <div className="card">
                                <div className="card-body">
                                    <table id="example1" className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nom</th>
                                                <th>Ecole</th>
                                                <th>Type Classe</th>
                                                <th>Enseignant</th>
                                                <th>Effectif</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {loading ?
                                            <ClipLoader color="#333" />
                                            :
                                            <>
                                                {allClasses.map((classe) => (
                                                    <Classe classe={classe} />
                                                ))}
                                            </>
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ClassesList;