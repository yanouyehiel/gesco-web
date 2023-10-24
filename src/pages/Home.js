import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidenav from "../components/Sidenav";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import Auth from '../contexts/Auth'

const Home = () => {
    const navigate = useNavigate()
    const { isAuthenticated } = useContext(Auth);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [])

    return(
        <>
            <Header />
            <Sidenav />

            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">
                 
                        <div className="col-lg-8">
                            <div className="row">
                            
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">

                                        <div className="card-body">
                                            <h5 className="card-title">Inscription <span>| Today</span></h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-cart"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6>
                                                    <span className="text-success small pt-1 fw-bold">12%</span>
                                                    <span className="text-muted small pt-2 ps-1">augmentation</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card revenue-card">

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
                                            <h5 className="card-title">Revenus <span>| This Month</span></h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-currency-dollar"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>1450000 XAF</h6>
                                                    <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">augmentation</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                
                                <div className="col-xxl-4 col-xl-12">

                                    <div className="card info-card customers-card">

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
                                            <h5 className="card-title">Elèves <span>| This Year</span></h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>1244</h6>
                                                <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">baisse</span>

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
                                            <h5 className="card-title">Récentes inscriptions <span>| Today</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Elève</th>
                                                        <th scope="col">Désignation</th>
                                                        <th scope="col">Montant</th>
                                                        <th scope="col">Statut</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><Link to="#">#2457</Link></th>
                                                        <td>Brandon Jacob</td>
                                                        <td><Link to="#" className="text-primary">At praesentium minu</Link></td>
                                                        <td>$64</td>
                                                        <td><span className="badge bg-success">Approved</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><Link to="#">#2147</Link></th>
                                                        <td>Bridie Kessler</td>
                                                        <td><Link to="#" className="text-primary">Blanditiis dolor omnis similique</Link></td>
                                                        <td>$47</td>
                                                        <td><span className="badge bg-warning">Pending</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><Link to="#">#2049</Link></th>
                                                        <td>Ashleigh Langosh</td>
                                                        <td><Link to="#" className="text-primary">At recusandae consectetur</Link></td>
                                                        <td>$147</td>
                                                        <td><span className="badge bg-success">Approved</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><Link to="#">#2644</Link></th>
                                                        <td>Angus Grady</td>
                                                        <td><Link to="#" className="text-primar">Ut voluptatem id earum et</Link></td>
                                                        <td>$67</td>
                                                        <td><span className="badge bg-danger">Rejected</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><Link to="#">#2644</Link></th>
                                                        <td>Raheem Lehner</td>
                                                        <td><Link to="#" className="text-primary">Sunt similique distinctio</Link></td>
                                                        <td>$165</td>
                                                        <td><span className="badge bg-success">Approved</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>

                                
                                <div className="col-12">
                                    <div className="card top-selling overflow-auto">

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
                                </div>

                            </div>
                        </div>

                        
                        <div className="col-lg-4">

                        
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
                            <h5 className="card-title">Récentes activités <span>| Today</span></h5>

                            <div className="activity">

                                <div className="activity-item d-flex">
                                <div className="activite-label">32 min</div>
                                <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                <div className="activity-content">
                                    Quia quae rerum <Link to="#" className="fw-bold text-dark">explicabo officiis</Link> beatae
                                </div>
                                </div>

                                <div className="activity-item d-flex">
                                <div className="activite-label">56 min</div>
                                <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                                <div className="activity-content">
                                    Voluptatem blanditiis blanditiis eveniet
                                </div>
                                </div>

                                <div className="activity-item d-flex">
                                <div className="activite-label">2 hrs</div>
                                <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                <div className="activity-content">
                                    Voluptates corrupti molestias voluptatem
                                </div>
                                </div>

                                <div className="activity-item d-flex">
                                <div className="activite-label">1 day</div>
                                <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                                <div className="activity-content">
                                    Tempore autem saepe <Link to="#" className="fw-bold text-dark">occaecati voluptatem</Link> tempore
                                </div>
                                </div>

                                <div className="activity-item d-flex">
                                <div className="activite-label">2 days</div>
                                <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                <div className="activity-content">
                                    Est sit eum reiciendis exercitationem
                                </div>
                                </div>

                                <div className="activity-item d-flex">
                                <div className="activite-label">4 weeks</div>
                                <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                                <div className="activity-content">
                                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                                </div>
                                </div>

                            </div>

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
                            <h5 className="card-title">Rapport sur le budget <span>| This Month</span></h5>

                            <div id="budgetChart" style={{ minHeight: '400px'}} className="echart"></div>

                            {/* Ici il doit y avoir le script pour les graphiques */}

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
                                {/* Ici il doit y avoir le script pour les graphiques */}

                            </div>
                        </div>

                        
                        <div className="card">
                            <div className="filter">
                                <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                    </li>

                                    <li><Link className="dropdown-item" to="#">Aujourd'hui</Link></li>
                                    <li><Link className="dropdown-item" to="#">Cette semaine</Link></li>
                                    <li><Link className="dropdown-item" to="#">Ce mois</Link></li>
                                </ul>
                            </div>

                            <div className="card-body pb-0">
                            <h5 className="card-title">Nouvelles &amp; Comuniqués <span>| Aujourd'hui</span></h5>

                            <div className="news">
                                <div className="post-item clearfix">
                                <img src="assets/img/news-1.jpg" alt="" />
                                <h4><Link to="#">Nihil blanditiis at in nihil autem</Link></h4>
                                <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                                </div>

                                <div className="post-item clearfix">
                                <img src="assets/img/news-2.jpg" alt="" />
                                <h4><Link to="#">Quidem autem et impedit</Link></h4>
                                <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                                </div>

                                <div className="post-item clearfix">
                                <img src="assets/img/news-3.jpg" alt="" />
                                <h4><Link to="#">Id quia et et ut maxime similique occaecati ut</Link></h4>
                                <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                                </div>

                                <div className="post-item clearfix">
                                <img src="assets/img/news-4.jpg" alt="" />
                                <h4><Link to="#">Laborum corporis quo dara net para</Link></h4>
                                <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                                </div>

                                <div className="post-item clearfix">
                                <img src="assets/img/news-5.jpg" alt="" />
                                <h4><Link to="#">Et dolores corrupti quae illo quod dolor</Link></h4>
                                <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
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
};

export default Home;