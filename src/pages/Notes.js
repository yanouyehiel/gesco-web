import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import InfoPage from '../components/InfoPage';
import { Link } from 'react-router-dom';
import NotesSalle from '../components/NotesSalle';
import Footer from '../components/Footer';
import { ClipLoader} from 'react-spinners'

const Notes = () => {
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
                <InfoPage title='Gestion des notes' link='Notes' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">VOIR LES NOTES PAR SALLE</h1>

                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        
                                        <div className="filter">
                                            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filtre</h6>
                                                </li>

                                                <li><Link className="dropdown-item" to="#">Année scolaire</Link></li>
                                                <li><Link className="dropdown-item" to="#">Séquence</Link></li>
                                                <li><Link className="dropdown-item" to="#">Salle de classe</Link></li>
                                                <li><Link className="dropdown-item" to="#">Matière</Link></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Sélectionner une salle de classe <span>| Toutes les salles</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Numéro salle</th>
                                                        <th scope="col">Nom salle</th>
                                                        <th scope="col">Effectif</th>
                                                        <th scope="col">Séquence</th>
                                                        <th scope="col">Année Scolaire</th>
                                                        <th scope="col">Option</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loading ?
                                                        <ClipLoader color="#333" />
                                                        :
                                                        <>
                                                            <NotesSalle />
                                                            <NotesSalle />
                                                            <NotesSalle />
                                                            <NotesSalle />
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

export default Notes;