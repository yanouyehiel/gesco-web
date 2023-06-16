import 'boxicons';
import { Link } from 'react-router-dom';

function Sidenav() {

    return(
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
                <Link className="nav-link " to="/home">
                <i className="bi bi-grid"></i>
                <span>Accueil</span>
                </Link>
            </li>

            <li className="nav-heading">Gestion de la scolarité</li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to='/salles'>
                <i className="bi bi-menu-button-wide"></i><span>Salles de classe</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/inscription">
                    <i className="bi bi-person"></i>
                    <span>Inscription</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/documents">
                    <i className="bi bi-journal-text"></i>
                    <span>Dossier des élèves</span>
                </Link>
            </li>


            <li className="nav-heading">Gestion des enseignements</li>
            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="#">
                <i className="bi bi-layout-text-window-reverse"></i><span>Cours enseignés par salle</span><i className="bi bi-chevron-down ms-auto"></i>
                </Link>
                <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <Link to="tables-general.html">
                    <i className="bi bi-circle"></i><span>SIL</span>
                    </Link>
                </li>
                <li>
                    <Link to="tables-data.html">
                    <i className="bi bi-circle"></i><span>CM2</span>
                    </Link>
                </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" to="#">
                <i className="bi bi-bar-chart"></i><span>Présences des élèves</span><i className="bi bi-chevron-down ms-auto"></i>
                </Link>
                <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <Link to="charts-chartjs.html">
                    <i className="bi bi-circle"></i><span>CE2</span>
                    </Link>
                </li>
                <li>
                    <Link to="charts-apexcharts.html">
                    <i className="bi bi-circle"></i><span>CM1</span>
                    </Link>
                </li>
                <li>
                    <Link to="charts-echarts.html">
                    <i className="bi bi-circle"></i><span>Petite Section</span>
                    </Link>
                </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="users-profile.html">
                <i className="bi bi-card-list"></i>
                <span>Matières</span>
                </Link>
            </li>


            <li className="nav-heading">Gestion des évaluations</li>
            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" to="#">
                <i className="bi bi-gem"></i><span>Evaluations</span><i className="bi bi-chevron-down ms-auto"></i>
                </Link>
                <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <Link to="icons-bootstrap.html">
                    <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                    </Link>
                </li>
                <li>
                    <Link to="icons-remix.html">
                    <i className="bi bi-circle"></i><span>Remix Icons</span>
                    </Link>
                </li>
                <li>
                    <Link to="icons-boxicons.html">
                    <i className="bi bi-circle"></i><span>Boxicons</span>
                    </Link>
                </li>
                </ul>
            </li>


            <li className="nav-heading">Gestion du personnel</li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="users-profile.html">
                <i className="bi bi-person"></i>
                <span>Administration</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="pages-faq.html">
                <i className="bi bi-person"></i>
                <span>Enseignants</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="pages-contact.html">
                <i className="bi bi-envelope"></i>
                <span>Contact</span>
                </Link>
            </li>


            <li className="nav-heading">Gestion des emplois de temps</li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="pages-register.html">
                <i className="bi bi-card-list"></i>
                <span>Register</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="pages-login.html">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Login</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="pages-error-404.html">
                <i className="bi bi-dash-circle"></i>
                <span>Error 404</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="pages-blank.html">
                <i className="bi bi-file-earmark"></i>
                <span>Blank</span>
                </Link>
            </li>

            </ul>

        </aside>
    )
}

export default Sidenav;