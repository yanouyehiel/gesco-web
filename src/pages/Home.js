import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import Auth from '../contexts/Auth'
import { ToastContainer } from "react-toastify";
import { verifyUser } from "../utils/functions";
import { getInfoEcole, getPaiementSchool, getMessages, getDocumentsAsked } from "../services/MainControllerApi";
import { getEcoleStored } from "../services/LocalStorage";
import { ClipLoader } from "react-spinners";
import Paiement from "../components/Paiement";
import { getTimeElapsed } from "../utils/functions";

const Home = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth)
    const ecole_id = getEcoleStored()
    const [paiements, setPaiements] = useState([])
    const [loading, setLoading] = useState(true)
    const [school, setSchool] = useState({})
    const [notifs, setNotifs] = useState([])
    const [messages, setMessages] = useState([])

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        feesSchool().then()
        getMessagesEcole().then()
        getDocuments().then()
        getPaiements().then(() => setLoading(false))
        //console.log(school.ecole.nom)
        console.log(notifs)
        console.log(messages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function feesSchool() {
        await getInfoEcole(ecole_id).then((res) => {
            setSchool(res)
        })
    }

    async function getPaiements() {
        await getPaiementSchool(ecole_id).then((res) => {
            setPaiements(res)
        })
    }

    async function getMessagesEcole() {
        await getMessages(ecole_id).then((res) => {
          setMessages(res)
        })
      }
    
      async function getDocuments() {
        await getDocumentsAsked(ecole_id).then((res) => {
            setNotifs(res)
        })
      }

    return(
        <main id="main" className="main">
            <ToastContainer />
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/home">Accueil</Link></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>

            <section className="section dashboard">
                <div className="row">
                
                    <div className="col-lg-8">
                        <div className="row">
                        
                            <div className="col-xxl-4 col-xl-12">

                                <div className="card info-card customers-card">

                                    <div className="card-body">
                                        <h5 className="card-title">Enseignants</h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center" style={{background: '#f2f2f2'}}>
                                                <i className="bi bi-person" style={{color: '#009AD7'}}></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>{school.teachers}</h6>
                                                <span className="text-muted small pt-2 ps-1" style={{fontSize: '12px'}}></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            
                            <div className="col-xxl-4 col-xl-12">

                                <div className="card info-card customers-card">

                                    <div className="card-body">
                                        <h5 className="card-title">Elèves</h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center" style={{background: '#f2f2f2'}}>
                                                <i className="bi bi-person" style={{color: '#009AD7'}}></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>{school.students}</h6>
                                                <span className="text-muted small pt-2 ps-1" style={{fontSize: '12px'}}></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            
                            <div className="col-xxl-4 col-xl-12">

                                <div className="card info-card customers-card">

                                    <div className="card-body">
                                        <h5 className="card-title">Parents</h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center" style={{background: '#f2f2f2'}}>
                                                <i className="bi bi-people" style={{color: '#009AD7'}}></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>{school.parents}</h6>
                                                <span className="text-muted small pt-2 ps-1" style={{fontSize: '12px'}}></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            
                            {/* <div className="col-12">
                                <div className="card">

                                    <div className="filter">
                                        <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>

                                            <li><Link className="dropdown-item" to="#">Today</Link></li>
                                            <li><Link className="dropdown-item" to="#">This Month</Link></li>
                                            <li><Link className="dropdown-item" to="#">This Year</Link></li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">Reports <span>/Today</span></h5>

                                        
                                        <div id="reportsChart"></div>

                                        {/* Ici il doit y avoir le script pour les graphiques */}
                                    
{/*
                                    </div>

                                </div>
                            </div> */}

                            
                            <div className="col-12">
                                <div className="card recent-sales overflow-auto">

                                    <div className="filter">
                                        <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>

                                            <li><Link className="dropdown-item" to="#">Tout payé</Link></li>
                                            <li><Link className="dropdown-item" to="#">Payé une partie</Link></li>
                                            <li><Link className="dropdown-item" to="#">Rien payé</Link></li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">Récentes inscriptions <span>| Les 5 derniers</span></h5>

                                        <table className="table table-borderless datatable">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Code</th>
                                                    <th scope="col">Désignation</th>
                                                    <th scope="col">Montant</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Elève</th>
                                                    <th scope="col">Reste</th>
                                                    <th scope="col">Statut</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loading ?
                                                    <ClipLoader color="#333" />
                                                :
                                                <>
                                                    {
                                                        paiements.slice(0, 10).map((paiement, i) => (
                                                            <Paiement key={i} paiement={paiement} />
                                                        ))
                                                    }
                                                </>
                                                }
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>

                            
                            {/* <div className="col-12">
                                <div className="card top-selling overflow-auto">

                                    <div className="filter">
                                        <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                            <h6>Filter</h6>
                                            </li>

                                            <li><Link className="dropdown-item" to="#">Today</Link></li>
                                            <li><Link className="dropdown-item" to="#">This Month</Link></li>
                                            <li><Link className="dropdown-item" to="#">This Year</Link></li>
                                        </ul>
                                    </div>

                                    <div className="card-body pb-0">
                                    <h5 className="card-title">Revenu attendu <span>| Today</span></h5>

                                    <table className="table table-borderless">
                                        <thead>
                                        <tr>
                                            <th scope="col">Classe</th>
                                            <th scope="col">Désignation</th>
                                            <th scope="col">Pention</th>
                                            <th scope="col">Elèves</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row"><Link to="#"><img src="assets/img/product-1.jpg" alt="" />SIL A</Link></th>
                                            <td><Link to="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</Link></td>
                                            <td>$64</td>
                                            <td className="fw-bold">124</td>
                                            <td>$5,828</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><Link to="#"><img src="assets/img/product-2.jpg" alt="" />SIL A</Link></th>
                                            <td><Link to="#" className="text-primary fw-bold">Exercitationem similique doloremque</Link></td>
                                            <td>$46</td>
                                            <td className="fw-bold">98</td>
                                            <td>$4,508</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><Link to="#"><img src="assets/img/product-3.jpg" alt="" />SIL A</Link></th>
                                            <td><Link to="#" className="text-primary fw-bold">Doloribus nisi exercitationem</Link></td>
                                            <td>$59</td>
                                            <td className="fw-bold">74</td>
                                            <td>$4,366</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><Link to="#"><img src="assets/img/product-4.jpg" alt="" />SIL A</Link></th>
                                            <td><Link to="#" className="text-primary fw-bold">Officiis quaerat sint rerum error</Link></td>
                                            <td>$32</td>
                                            <td className="fw-bold">63</td>
                                            <td>$2,016</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><Link to="#"><img src="assets/img/product-5.jpg" alt="" />SIL A</Link></th>
                                            <td><Link to="#" className="text-primary fw-bold">Sit unde debitis delectus repellendus</Link></td>
                                            <td>$79</td>
                                            <td className="fw-bold">41</td>
                                            <td>$3,239</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    </div>

                                </div>
                            </div> */}

                        </div>
                    </div>

                    
                    <div className="col-lg-4">

                    
                        <div className="card">
                            {/* <div className="filter">
                                <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                    </li>

                                    <li><Link className="dropdown-item" to="#">Today</Link></li>
                                    <li><Link className="dropdown-item" to="#">This Month</Link></li>
                                    <li><Link className="dropdown-item" to="#">This Year</Link></li>
                                </ul>
                            </div> */}

                            <div className="card-body">
                                <h5 className="card-title">Récentes activités <span>| Notifications</span></h5>

                                <div className="activity">

                                    {notifs.length > 0 &&
                                        notifs.map((n, i) => (
                                            <div key={i} className="activity-item d-flex">
                                                <div className="activite-label">il y a {getTimeElapsed(n.created_at)}</div>
                                                <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                                <div className="activity-content">
                                                    <Link to="/documents" className="text-dark">{n.intitule}</Link>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>

                            </div>
                        </div>

                        
                        {/* <div className="card">
                            <div className="filter">
                            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li className="dropdown-header text-start">
                                <h6>Filter</h6>
                                </li>

                                <li><Link className="dropdown-item" to="#">Today</Link></li>
                                <li><Link className="dropdown-item" to="#">This Month</Link></li>
                                <li><Link className="dropdown-item" to="#">This Year</Link></li>
                            </ul>
                            </div>

                            <div className="card-body pb-0">
                            <h5 className="card-title">Rapport sur le budget <span>| This Month</span></h5>

                            <div id="budgetChart" style={{ minHeight: '400px'}} className="echart"></div>

                            

                            </div>
                        </div>

                        
                        <div className="card">
                            <div className="filter">
                            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li className="dropdown-header text-start">
                                <h6>Filter</h6>
                                </li>

                                <li><Link className="dropdown-item" to="#">Today</Link></li>
                                <li><Link className="dropdown-item" to="#">This Month</Link></li>
                                <li><Link className="dropdown-item" to="#">This Year</Link></li>
                            </ul>
                            </div>

                            <div className="card-body pb-0">
                            <h5 className="card-title">Website Traffic <span>| Today</span></h5>

                            <div id="trafficChart" style={{ minHeight: '400px' }} className="echart"></div>
                                

                            </div>
                        </div> */}

                        
                        <div className="card">
                            {/* <div className="filter">
                                <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                    </li>

                                    <li><Link className="dropdown-item" to="#">Aujourd'hui</Link></li>
                                    <li><Link className="dropdown-item" to="#">Cette semaine</Link></li>
                                    <li><Link className="dropdown-item" to="#">Ce mois</Link></li>
                                </ul>
                            </div> */}

                            <div className="card-body pb-0">
                                <h5 className="card-title">Nouvelles &amp; Comuniqués <span>| Messages</span></h5>

                                <div className="news">

                                    {messages.length > 0 &&
                                        messages.map((m, i) => (
                                            <div key={i} className="post-item clearfix">
                                                {/* <img src="assets/img/news-1.jpg" alt="" /> */}
                                                <h4><Link to="/messagerie">{`${m.nom_emetteur} ${m.prenom_emetteur}`}</Link></h4>
                                                <p>{String(m.contenu).substring(0, 250) + '...'}</p>
                                            </div>
                                        ))
                                    }

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    )
};

export default Home;