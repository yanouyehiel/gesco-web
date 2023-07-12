import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import { ClipLoader} from 'react-spinners'

const Evaluations = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gestion des évaluations' link='Evaluations' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">CALENDRIER SCOLAIRE</h1>
                            <div class="row d-flex justify-content-between">
                                <div className="col-lg-6">
                                    <h2 class="text-center">Ajouter un calendrier</h2>
                                    <form class="ajust">
                                        <div class="form-group mt-4">
                                            <label class="control-label">Intitulé de l'examen</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group mt-3">
                                            <label class="control-label">Date de début</label>
                                            <input type="date" class="form-control" />
                                        </div>
                                        <input type="submit" class="form-control mt-3 btn btn-primary mb-5" value="Enregistrer" />
                                    </form>
                                </div>
                                <div className="col-lg-6">
                                    <img src='./assets/images/px1.png' width='100%' height='100%' alt="Images" />
                                </div>
                            </div>
                            <div className='container'>
                                <h3>Liste des calendriers enregistrés</h3>
                                <div class="card">
                                    <div class="card-body">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Identifiant</th>
                                                    <th>Intitule de l'examen</th>
                                                    <th>Date de debut</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loading ?
                                                    <ClipLoader color="#333" />
                                                    :
                                                    <>
                                                        <Calendar />
                                                        <Calendar />
                                                        <Calendar />
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
            <Footer />
        </>
    )
}

export default Evaluations;