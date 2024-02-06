import React, { useState, useEffect, useContext } from "react";
import InfoPage from "../components/InfoPage";
import { useParams } from "react-router-dom";
import Cours from "../components/Cours";
import { Form, Button } from "react-bootstrap";
import { ClipLoader } from 'react-spinners';
import { infoClasse } from "../services/MainControllerApi";
import { getCoursByClasse } from "../services/EnseignementController";
//import { getEcoleStored } from "../services/LocalStorage";
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";
import { ToastContainer } from "react-toastify";


const Enseignement = () => {
    const {salle} = useParams()
    const [loading, setLoading] = useState(true)
    const [cours, setCours] = useState([])
    const [classe, setClasse] = useState({})
    //const ecole_id = getEcoleStored()
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getInfoClasse()
        getCours().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [salle])

    async function getInfoClasse() {
        await infoClasse(salle).then((res) => {
            setClasse(res)
        })
    }

    async function getCours() {
        await getCoursByClasse(salle).then((res) => {
            setCours(res)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return(
        <main id="main" className="main">
            <InfoPage title='Gestion des cours' link='Visualiser les cours donnés' />
            <ToastContainer />
            <br />
            <div className="content-wrapper">
                <section className="content mt-2 ">
                    <div className="container-fluid">
                        <h1 className="text-center pt-4 pb-2 text-danger">COURS DE LA {classe.nom}</h1>
                        <div className="container">
                            <Form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group mt-4">
                                            <Form.Select className="form-control">
                                                <option>-- select --</option>   
                                                <option>Aujourd'hui</option>
                                                <option>Par matière</option>
                                                <option>Par salle</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group mt-4">
                                            <Button variant="primary" type='submit'>
                                                Appliquer
                                            </Button>
                                        </Form.Group>
                                    </div>
                                </div>
                            </Form><br />
                            
                            <div className="row dashboard">
                                {loading ?
                                    <ClipLoader color="#333" cssOverride={{alignItems: 'center !important', justifyContent: 'center !important'}} />
                                    :
                                    <>
                                        {cours.map((cour, i) => (
                                            <Cours key={i} cour={cour} classe={classe.nom} />
                                        ))}
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Enseignement;