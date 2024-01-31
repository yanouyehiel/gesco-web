import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import InfoPage from "../../components/InfoPage";
import Footer from "../../components/Footer";
import { useParams, Link } from "react-router-dom";
import { getSingleStudent } from "../../services/StudentController";

const ViewStudent = () => {
    const {matricule} = useParams()
    const [student, setStudent] = useState({})

    useEffect(() => {
        getStudent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matricule])

    async function getStudent() {
        await getSingleStudent(matricule).then((res) => {
            setStudent(res)
        })
    }

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Consulter un élève' link={'Infos sur ' + student.nom +' '+ student.prenom} />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">L'ELEVE {student.nom +' '+ student.prenom}</h1>

                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="card recent-sales overflow-auto">

                                        <div className="card-body">
                                            <h5 className="card-title">Informations personnelles</h5>

                                            <div className="info">
                                                <h5 className="title">Nom : </h5>
                                                <p className="title-value">{student.nom}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Prénom : </h5>
                                                <p className="title-value">{student.prenom}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Date de naissance : </h5>
                                                <p className="title-value">{student.date_naissance}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Lieu de naissance : </h5>
                                                <p className="title-value">{student.lieu_naissance}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Sexe : </h5>
                                                <p className="title-value">{student.sexe}</p>
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
                                                <p className="title-value">{student.matricule}</p>
                                            </div> 
                                            <div className="info">
                                                <h5 className="title">Type de classe :</h5>
                                                <p className="title-value">{student.type_classe}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Salle de classe : </h5>
                                                <p className="title-value">{student.nom_classe}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Année scolaire : </h5>
                                                <p className="title-value">{student.date_scolarisation}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Date d'inscription : </h5>
                                                <p className="title-value">{student.created_at}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className='btn btn-primary' to='/documents/MAT123'>Demander un document</Link>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ViewStudent;