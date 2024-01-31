import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Presence from "../components/Presence";
import { ClipLoader } from "react-spinners";
import { getEcoleStored } from "../services/LocalStorage";
import { getAbsencesByClasse, infoClasse } from "../services/MainControllerApi";

const Presences = () => {
    const {salle} = useParams()
    const [loading, setLoading] = useState(true)
    const ecole_id = getEcoleStored()
    const [classe, setClasse] = useState({})
    const [absences, setAbsences] = useState([])
    
    useEffect(() => {
        getInfoClasse()
        getPresencesSalle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [salle])

    async function getInfoClasse() {
        await infoClasse(salle).then((res) => {
            setClasse(res)
            setLoading(false)
        })
    }

    async function getPresencesSalle() {
        await getAbsencesByClasse(salle).then((res) => {
            setAbsences(res)
        }, (err) => {
            console.log(err)
        })
    }

    const handleSubmit = () => {
        console.log('clique');
    }

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gestion les présences' link='Présence des élèves' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">PRESENCE DE LA {classe.nom}</h1>
                        </div>
                    </div>
                    <div className="container">
                        <Form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Form.Group className="form-group mt-4">
                                        <Form.Select className="form-control">
                                            <option>-- select --</option>   
                                            <option>Aujourd'hui</option>
                                            <option>Par journée</option>
                                            <option>Par élève</option>
                                            <option>Par tranche horaire</option>
                                            <option>Présent</option>
                                            <option>Absent</option>
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
                            {absences.length === 0 && loading ?
                                <ClipLoader color="#333" cssOverride={{alignItems: 'center !important', justifyContent: 'center !important'}} />
                                :
                                <>
                                    {absences.map((absence, i) => (
                                        <Presence absence={absence} key={i} />
                                    ))}
                                </>
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Presences;