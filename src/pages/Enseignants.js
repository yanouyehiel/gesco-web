import React, { useState, useEffect, useContext } from 'react'
import InfoPage from "../components/InfoPage";
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Enseignant from '../components/Enseignant';
import { getEcoleStored } from '../services/LocalStorage';
import { getTeachers } from '../services/EnseignementController';
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";

const Enseignants = () => {
    const [loading, setLoading] = useState(true)
    const [teachers, setTeachers] = useState([])
    const ecole_id = getEcoleStored()
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getAllTeachers().then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getAllTeachers() {
        await getTeachers(ecole_id).then((res) => {
            console.log(teachers)
            setTeachers(res)
        })
    }

    return(
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
                                                    <th style={{ textAlign: 'center' }}>#</th>
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
                                                    <ClipLoader color="#333" />
                                                    :
                                                    <>
                                                        {teachers.map((teacher, index) => (
                                                            <Enseignant num={index} key={index} teacher={teacher} />
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
    )
}

export default Enseignants;