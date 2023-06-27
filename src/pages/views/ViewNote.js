import React from 'react'
import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';
import InfoPage from '../../components/InfoPage';
import { useParams } from 'react-router-dom';
import Note from '../../components/Note';
import { Link } from 'react-router-dom';

const ViewNote = () => {
    const {numSalle} = useParams()

    return(
        <>
            <Header />
            <Sidenav />

            <main id="main" classNameName="main">
                <InfoPage title='Salle de classe' link={'Notes de ' + numSalle} />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">LISTE DES NOTES</h1>

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
                                                <li><Link className="dropdown-item" to="#">Année scolaire</Link></li>
                                                <li><Link className="dropdown-item" to="#">Séquence</Link></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Notes confondues de la {numSalle} <span>| All</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Matricule élève</th>
                                                        <th scope="col">Nom élève</th>
                                                        <th scope="col">Matière</th>
                                                        <th scope="col">Note</th>
                                                        <th scope="col">Séquence</th>
                                                        <th scope="col">Année Scolaire</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <Note />
                                                    <Note />
                                                    <Note />
                                                    <Note />
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
        </>
    )
}

export default ViewNote;