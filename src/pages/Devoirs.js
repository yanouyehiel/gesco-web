import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import Devoir from "../components/Devoir";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Footer from "../components/Footer";

const Devoirs = () => {
    const {salle} = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    const handleSubmit = () => {}

    return (
        <>
            <Header />
            <Sidenav />

            <main id="main" className="main">
                <InfoPage title='Gestion des devoirs' link='Visualiser les devoirs laissés' />

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
                                            <Devoir />
                                            <Devoir />
                                            <Devoir />
                                            <Devoir />
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

export default Devoirs;