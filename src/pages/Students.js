import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Student from "../components/Student";
import { ClipLoader } from "react-spinners";
import AxiosApi from "../services/AxiosApi";
import { getEcoleStored } from "../services/LocalStorage";

const Students = () => {
    const [loading, setLoading] = useState(false)
    const [students, setStudents] = useState([])
    const ecole_id = getEcoleStored()

    useEffect(() => {
        setLoading(true)
        getStudents()
        setLoading(false)
    }, [])

    function getStudents() {
        AxiosApi.get('/get-students/' + ecole_id)
            .then(res => setStudents(res.data))
    }

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gestion des élèves' link='Mes Elèves' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">Tous les élèves</h1>

                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        
                                        <div className="filter">
                                            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filtre</h6>
                                                </li>

                                                <li><Link className="dropdown-item" to="#">Elève</Link></li>
                                                <li><Link className="dropdown-item" to="#">Nom</Link></li>
                                                <li><Link className="dropdown-item" to="#">Sexe</Link></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Liste de tous les élèves <span>| Tous les élèves</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th style={{ textAlign: 'center' }}>Matricule</th>
                                                        <th style={{ textAlign: 'center' }}>Nom</th>
                                                        <th style={{ textAlign: 'center' }}>Prenom</th>
                                                        <th style={{ textAlign: 'center' }}>Naissance</th>
                                                        <th style={{ textAlign: 'center' }}>Lieu</th>
                                                        <th style={{ textAlign: 'center' }}>Sexe</th>
                                                        <th style={{ textAlign: 'center' }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loading ?
                                                        <ClipLoader color="#333" cssOverride={{alignItems: 'center !important', justifyContent: 'center !important'}} />
                                                        :
                                                        <>
                                                            {students.map((student, index) => (
                                                                <Student student={student} />
                                                            ))}
                                                        </>
                                                    }
                                                </tbody>
                                            </table>

                                        </div>

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

export default Students;