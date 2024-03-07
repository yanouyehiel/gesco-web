import React, { useEffect, useState, useContext } from 'react'
import InfoPage from '../components/InfoPage';
import { getEcoleStored, getItem } from '../services/LocalStorage';
import { getMessages } from '../services/MainControllerApi';
import { ClipLoader } from 'react-spinners';
import { dateParser } from '../utils/functions';
import { Modal } from 'react-bootstrap';
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";
import ButtonComponent from '../components/Button';


const Messagerie = () => {
    const [loading, setLoading] = useState(true)
    const [messages, setMessages] = useState([])
    const ecole = getEcoleStored()
    const user = JSON.parse(getItem('gescoUser'))
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({})
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getMessages(ecole).then((res) => {
            setMessages(res)
            setLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClose = () => setShow(false);

    function handleShow(mess) {
        setMessage(mess)
        setShow(true)
    }

    return(
        <main id="main" className="main">
            <InfoPage title='Gestion des messages' link='Messagerie' />

            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12 row">
                        <div className="card">
                            <h3 className="text-center pt-4 pb-2 text-danger">TOUS MES MESSAGES</h3>
                            <div className="card-body">
                                <table id="example1" className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>#</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Emetteur</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Récepteur</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Contenu</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Date d'envoi</th>
                                            <th style={{ textAlign: 'center', fontSize: '18px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {loading ?
                                        <ClipLoader color="#333" /> :
                                        <>
                                            {messages.filter(m => (m.receveur === null || m.receveur === user.id))
                                            .map((mes, i) => (
                                                <tr key={i}>
                                                    <td style={{ textAlign: 'center' }}>{mes.id}</td>
                                                    <td style={{ textAlign: 'center' }}>
                                                        {`${mes.nom_emetteur} ${mes.prenom_emetteur}`}
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}>
                                                        {mes.receveur === null ? 'Tout le monde' : 'Moi'}
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}>
                                                        {mes.contenu.length > 30 ? mes.contenu.substring(0, 30)+'...'
                                                            : mes.contenu
                                                        }
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}>{dateParser(mes.created_at)}</td>
                                                    <td style={{ textAlign: 'center' }}>
                                                        <ButtonComponent onClick={() => handleShow(mes)}>Voir</ButtonComponent>
                                                    </td>
                                                </tr>
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Flash Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5><b>{`${message.nom_emetteur} ${message.prenom_emetteur}`}</b></h5>
                    <p style={{fontSize: '18px'}}>{message.contenu}</p>
                    <p>le <b>{dateParser(message.created_at)}</b> à <b>{message.receveur === null ? 'tout le monde' : 'moi'}</b></p>
                </Modal.Body>
            </Modal>
        </main>
    )
}

export default Messagerie;