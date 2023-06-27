import React from "react";
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import InfoPage from "../../components/InfoPage";
import Footer from "../../components/Footer";
import { useParams, redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';

const ViewStudent = () => {
    const {matricule} = useParams()

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Consulter un élève' link={'Infos sur ' + matricule} />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">L'ELEVE {matricule}</h1>

                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="card recent-sales overflow-auto">

                                        <div className="card-body">
                                            <h5 className="card-title">Informations personnelles</h5>

                                            <div className="info">
                                                <h5 className="title">Nom : </h5>
                                                <p className="title-value">Yanou Piatchebe</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Prénom : </h5>
                                                <p className="title-value">Yehiel Eraste</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Date de naissance : </h5>
                                                <p className="title-value">25 Septembre 1999</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Lieu de naissance : </h5>
                                                <p className="title-value">Njombé</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Informations scolaires</h5> 

                                            <div className="info">
                                                <h5 className="title">Matricule :</h5>
                                                <p className="title-value">MAT123</p>
                                            </div> 
                                            <div className="info">
                                                <h5 className="title">Classe :</h5>
                                                <p className="title-value">CM2</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Salle de classe : </h5>
                                                <p className="title-value">AD123</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Année scolaire : </h5>
                                                <p className="title-value">2022-2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button onClick={redirect('/documents/MAT123')} variant='primary'>Demander un document</Button>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ViewStudent;