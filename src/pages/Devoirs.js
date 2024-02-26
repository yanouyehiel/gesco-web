import InfoPage from "../components/InfoPage";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import Devoir from "../components/Devoir";
import { useState, useEffect, useContext } from "react";
import { Form, ToastContainer } from "react-bootstrap";
import { infoClasse } from "../services/MainControllerApi";
import { getDevoirsOfClasse } from "../services/EnseignementController";
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";
import ButtonComponent from "../components/Button";

const Devoirs = () => {
    const {salle} = useParams()
    const [loading, setLoading] = useState(true)
    const [classe, setClasse] = useState({})
    const [devoirs, setDevoirs] = useState([])
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);


    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getInfoClasse()
        getDevoirsSalle().then(() => setLoading(false))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [salle])

    async function getInfoClasse() {
        await infoClasse(salle).then((res) => {
            setClasse(res)
        })
    }

    async function getDevoirsSalle() {
        await getDevoirsOfClasse(salle).then((res) => {
            setDevoirs(res)
        })
    }

    const handleSubmit = () => {}

    return (
        <main id="main" className="main">
            <InfoPage title='Gestion des devoirs' link='Visualiser les devoirs laissés' />
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
                                            <ButtonComponent type='submit'>Appliquer</ButtonComponent>
                                        </Form.Group>
                                    </div>
                                </div>
                            </Form><br />
                            
                            <div className="row dashboard">
                                {loading ?
                                    <ClipLoader color="#333" />
                                    :
                                    <>
                                        {devoirs.map((devoir, i) => (
                                            <Devoir key={i} devoir={devoir} classe={classe.nom} />
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

export default Devoirs;