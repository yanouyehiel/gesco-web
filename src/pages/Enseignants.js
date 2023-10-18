import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Enseignant from '../components/Enseignant';
import Footer from '../components/Footer';
import AxiosApi from '../services/AxiosApi';
import { infoClasse } from '../services/MainControllerApi';

const Enseignants = () => {
    const [loading, setLoading] = useState(false)
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        setLoading(true)
        getAllTeachers()
        setLoading(false)
    }, [])

    function getAllTeachers() {
        AxiosApi.get('/get-teachers/1')
        .then(res => {
            setTeachers(res.data)
            console.log(teachers)
        })
    }

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gérer des enseignants' link='Mes enseignants' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">Tous les enseignants</h1>

                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        
                                        <div className="filter">
                                            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filtre</h6>
                                                </li>

                                                <li><Link className="dropdown-item" to="#">Nom d'enseignant</Link></li>
                                                <li><Link className="dropdown-item" to="#">Salle de classe</Link></li>
                                                <li><Link className="dropdown-item" to="#">Sexe</Link></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Liste de tous les enseignants <span>| Tous les enseignants</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th style={{ textAlign: 'center' }}>Matricule</th>
                                                        <th style={{ textAlign: 'center' }}>Nom</th>
                                                        <th style={{ textAlign: 'center' }}>Prenom</th>
                                                        <th style={{ textAlign: 'center' }}>Salle de classe</th>
                                                        <th style={{ textAlign: 'center' }}>Sexe</th>
                                                        <th style={{ textAlign: 'center' }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loading ?
                                                        <ClipLoader color="#333" cssOverride={{alignItems: 'center !important', justifyContent: 'center !important'}} />
                                                        :
                                                        <>
                                                            {teachers.map((teacher, index) => (
                                                                <Enseignant key={index} teacher={teacher} />
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

export default Enseignants;