import React, { useState, useEffect, useContext } from "react";
import InfoPage from "../components/InfoPage";
import Calendar from "../components/Calendar";
import { ClipLoader} from 'react-spinners'
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";
import { Form, Modal } from "react-bootstrap";
import { addCalendar, getCalendars } from "../services/MainControllerApi";
import { ToastContainer, toast } from "react-toastify";
import { getEcoleStored } from "../services/LocalStorage";
import ButtonComponent from "../components/Button";


const Evaluations = () => {
    const [loading, setLoading] = useState(true)
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const [show, setShow] = useState(false)
    const [calendar, setCalendar] = useState({})
    const [calendars, setCalendars] = useState([])
    const ecole = getEcoleStored()

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getAllCalendars().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        calendar.ecole_id = ecole
        addCalendar(calendar).then((res) => {
            setShow(false)
            toast(res)
            getAllCalendars().then(() => setLoading(false))
        })
    }

    async function getAllCalendars() {
        await getCalendars(ecole).then(res => {
            setCalendars(res)
        })
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setCalendar({...calendar, [name]: value})
    }

    return(
        <main id="main" className="main">
            <InfoPage title='Gestion du calendrier scolaire' link='Calendrier' />
            <ToastContainer />
            <br />
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center text-danger">CALENDRIER SCOLAIRE</h1>
                        <div className='container'>
                            <ButtonComponent mb='10px' onClick={handleShow}>Ajouter une date</ButtonComponent>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Ajouter à votre calendrier</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group>
                                            <Form.Label>Entrer le titre</Form.Label>
                                            <Form.Control type="text" name="titre" onChange={handleChange} required />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Entrer la date</Form.Label>
                                            <Form.Control type="text" name="date" onChange={handleChange} />
                                        </Form.Group>
                                        <ButtonComponent type='submit' mt='20px'>Enregistrer</ButtonComponent>
                                    </Form>
                                </Modal.Body>
                            </Modal>

                            <div class="card">
                                <div class="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Titre</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ?
                                                <ClipLoader color="#333" />
                                                :
                                                <>
                                                    {calendars.map((calendar, i) => (
                                                        <Calendar num={i} calendar={calendar} key={i} />
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
            </section>
        </main>
    )
}

export default Evaluations;