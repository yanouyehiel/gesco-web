import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Cours from "../components/Cours";
import { Form, Button } from "react-bootstrap";
import { ClipLoader } from 'react-spinners';
import { infoClasse } from "../services/MainControllerApi";
import { getCoursByClasse } from "../services/EnseignementController";


const Enseignement = () => {
    const {salle} = useParams()
    const [loading, setLoading] = useState(false)
    const [cours, setCours] = useState([])
    const [classe, setClasse] = useState({})

    useEffect(() => {
        setLoading(true)
        getInfoClasse()
        getCours()
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    async function getInfoClasse() {
        await infoClasse(salle).then((res) => {
            setClasse(res)
        })
    }

    async function getCours() {
        await getCoursByClasse(classe.id).then((res) => {
            setCours(res)
        })
    }

    const handleSubmit = () => {}
    
    return(
        <>
            <Header />
            <Sidenav />

            <main id="main" className="main">
                <InfoPage title='Gestion des cours' link='Visualiser les cours donnés' />

                <br />
                <div className="content-wrapper">
                    <section className="content mt-2 ">
                        <div className="container-fluid">
                            <h1 className="text-center pt-4 pb-2 text-danger">COURS DE LA {salle}</h1>
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
            <Footer />
        </>
    )
}

export default Enseignement;