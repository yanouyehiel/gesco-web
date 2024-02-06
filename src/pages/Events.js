import React, { useState, useEffect, useContext } from 'react'
import InfoPage from '../components/InfoPage'
import Event from '../components/Event'
import { ClipLoader} from 'react-spinners'
import { ToastContainer, toast } from 'react-toastify'
import { addEvent, getEvents } from '../services/MainControllerApi'
import { getEcoleStored } from '../services/LocalStorage'
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";


const Events = () => {
    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState({})
    const ecole_id = getEcoleStored()
    const [events, setEvents] = useState([])
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getAllEvents().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getAllEvents() {
        await getEvents(ecole_id).then((res) => setEvents(res))
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setEvent({...event, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        event.ecole_id = ecole_id
        setLoading(true)
        addEvent(event).then((res) => {
            toast(res)
            getAllEvents(() => setLoading(false))
        })
    }

    return(
        <main id="main" className="main">
            <InfoPage title='Gestion des évènements' link='Evènement' />
            <ToastContainer />

            <br />
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center text-danger">EVENEMENTS SUR LE CAMPUS</h1>
                        <div class="row d-flex justify-content-between">
                            <div className="col-lg-6">
                                <h2 class="text-center">Enregistrer un évènement</h2>
                                <form class="ajust" onSubmit={handleSubmit}>
                                    <div class="form-group mt-4">
                                        <label class="control-label">Intitulé de l'évènement</label>
                                        <input type="text" class="form-control" name='intitule' onChange={handleChange} required />
                                    </div>
                                    <div class="form-group mt-4">
                                        <label class="control-label">Description de l'évènement</label>
                                        <textarea row="3" class="form-control" name='description' onChange={handleChange} required></textarea>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label class="control-label">Date de début</label>
                                        <input type="date" class="form-control" name='date_debut' onChange={handleChange} required />
                                    </div>
                                    <div class="form-group mt-3">
                                        <label class="control-label">Date de fin</label>
                                        <input type="date" class="form-control" name='date_fin' onChange={handleChange} required />
                                    </div>
                                    <input type="submit" class="form-control mt-3 btn btn-primary mb-5" value="Enregistrer" />
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <img src='./assets/images/px2.png' width='100%' height='100%' alt="Images" />
                            </div>
                        </div>
                        <div className='container'>
                            <h3>Liste des évènements enregistrés</h3>
                            <div class="card">
                                <div class="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Intitule de l'évènement</th>
                                                <th>Description de l'évènement</th>
                                                <th>Date de debut</th>
                                                <th>Date de fin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ?
                                                <ClipLoader color="#333" />
                                                :
                                                <>
                                                    {events.map((ev, i) => (
                                                        <Event key={i} event={ev} num={i} />
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

export default Events;