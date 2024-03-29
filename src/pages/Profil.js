import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { updateUser, userStored } from '../services/UserController'
import { dateParser } from '../utils/functions'
import ButtonComponent from '../components/Button'
import { Modal, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { addItem, removeItem } from '../services/LocalStorage'

export default function Profil() {
    const localUser = userStored()
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({})


    function handleSubmit(e) {
        e.preventDefault()
        setShow(false)
        user.id = localUser.id
        console.log(user)
        updateUser(user).then((res) => {
            console.log(res.data)
            toast(res.message)
            removeItem('gescoUser')
            addItem('gescoUser', res.data)
            //window.location.reload()
        }).catch((err) => toast.error(err.message))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setUser({...user, [name]: value})
    }

    return (
        <main id="main" className="main">
            <ToastContainer />
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/home">Accueil</Link></li>
                        <li className="breadcrumb-item active">Profil</li>
                    </ol>
                </nav>
            </div>

            <section className="section dashboard">
                <div className='row'>
                    <div className="col-lg-6">
                        <div className="card recent-sales overflow-auto">

                            <div className="card-body">
                                <h5 className="card-title">Informations personnelles</h5>

                                <div className="info">
                                    <h5 className="title">Nom : </h5>
                                    <p className="title-value">{localUser.nom}</p>
                                </div>
                                <div className="info">
                                    <h5 className="title">Prénom : </h5>
                                    <p className="title-value">{localUser.prenom}</p>
                                </div>
                                <div className="info">
                                    <h5 className="title">Email : </h5>
                                    <p className="title-value">{localUser.email}</p>
                                </div>
                                <div className="info">
                                    <h5 className="title">Telephone : </h5>
                                    <p className="title-value">{localUser.telephone}</p>
                                </div>
                                <div className="info">
                                    <h5 className="title">Matricule :</h5>
                                    <p className="title-value">{localUser.matricule}</p>
                                </div> 
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card recent-sales overflow-auto">
                            <div className="card-body">
                                <h5 className="card-title">Informations sur le compte</h5> 

                                <div className="info">
                                    <h5 className="title">Date de création :</h5>
                                    <p className="title-value">{dateParser(localUser.created_at)}</p>
                                </div> 
                                <div className="info">
                                    <h5 className="title">Date de vérification :</h5>
                                    <p className="title-value">{dateParser(localUser.email_verified_at)}</p>
                                </div>
                                <div className="info">
                                    <h5 className="title">Mon token : </h5>
                                    <p className="title-value">{localUser.remember_token}</p>
                                </div>
                                <div className="info">
                                    <h5 className="title">Rôle : </h5>
                                    <p className="title-value">{localUser.role_id}</p>
                                </div>
                                <div className="info">
                                    <h5 className="title">Status : </h5>
                                    <p className="title-value">en service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modification</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-group mt-4">
                                <Form.Label className="control-label">Email</Form.Label>
                                <Form.Control onChange={handleChange} name='email' type="email" className="form-control" placeholder={localUser.email} />
                            </Form.Group>
                            <Form.Group className="form-group mt-4">
                                <Form.Label className="control-label">Téléphone</Form.Label>
                                <Form.Control onChange={handleChange} name='tel' type="tel" className="form-control" placeholder={localUser.telephone} />
                            </Form.Group>
                            <ButtonComponent size='lg' type='submit' mt='20px'>
                                Modifier
                            </ButtonComponent>
                        </Form>
                    </Modal.Body>
                </Modal>

                <ButtonComponent onClick={handleShow}>Modifier mon profil</ButtonComponent>
            </section>
        </main>
    )
}