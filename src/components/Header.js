import { Link } from "react-router-dom";
import { getItem } from "../services/LocalStorage";
import { getMessages, getRole } from "../services/MainControllerApi";
import { useEffect, useState } from "react";
import { logout } from "../services/AuthApi";
import { getDocumentsAsked } from "../services/MainControllerApi";
import { getTimeElapsed } from "../utils/functions";
import { toast } from "react-toastify";

const Header = () => {
  const data = getItem('gescoUser') || '{}'
  const user = JSON.parse(data)
  const [role, setRole] = useState("")
  const [notifs, setNotifs] = useState([])
  const [messages, setMessages] = useState([])

  useEffect(() => {   
    getRole(user.role_id).then((res) => {
      setRole(res.intitule)
    })
    getDocuments()
    getMessagesEcole()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.role_id])

  async function deconnexion() {
    toast('Déconnexion en cours...')
    await logout().then(() => {
      setTimeout(() => {
        window.location.replace('/login')
      }, 4000);
    }, (err) => {
      toast.error(err.message)
    }) 
  }

  async function getMessagesEcole() {
    await getMessages(user.ecole_id).then((res) => {
      setMessages(res)
    })
  }

  async function getDocuments() {
    await getDocumentsAsked(user.ecole_id).then((res) => {
        setNotifs(res)
    })
  }

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center">
        <img src="../assets/images/logo_sans_bg.png" alt="logo" />
        <span className="d-none d-lg-block" style={{color: '#009AD7'}}>Gesco</span>
      </Link>
      <i className="bi bi-list toggle-sidebar-btn"></i>
    </div>

    <div className="search-bar">
      <form className="search-form d-flex align-items-center">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
      </form>
    </div>

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">

        <li className="nav-item d-block d-lg-none">
          <Link className="nav-link nav-icon search-bar-toggle " to="#">
            <i className="bi bi-search"></i>
          </Link>
        </li>

        <li className="nav-item dropdown">

          <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge badge-number" style={{backgroundColor: '#009AD7'}}>{notifs.length}</span>
          </Link>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              Vous avez {notifs.length} nouvelles notifications
              <Link to="/documents"><span className="badge rounded-pill p-2 ms-2" style={{backgroundColor: '#009AD7'}}>Voir tout</span></Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            {notifs.slice(0, 5).map((notif, i) => (
              <li key={i} className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                  <h4>{`${notif.nom_student} ${notif.prenom_student}`}</h4>
                  <p>{notif.intitule}</p>
                  <p>il y a {getTimeElapsed(notif.created_at)}</p>
                </div>
              </li>
            ))}

            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <Link to="/documents">Voir toutes les notifications</Link>
            </li>

          </ul>

        </li>

        <li className="nav-item dropdown">

          <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text"></i>
            <span className="badge badge-number" style={{backgroundColor: '#48BB8C'}}>{notifs.length}</span>
            <span className="badge badge-number">{messages.length}</span>
          </Link>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              Vous avez {messages.length} nouveaux messages
              <Link to="/messagerie"><span className="badge rounded-pill p-2 ms-2" style={{backgroundColor: '#48BB8C'}}>Voir tout</span></Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            {messages.slice(0, 5).map((mes, i) => (
              <div key={i}>
                <li className="message-item">
                  <Link to="/messagerie">
                    {/* <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" /> */}
                    <div>
                      <h4>{`${mes.nom_emetteur} ${mes.prenom_emetteur}`}</h4>
                      <p>{String(mes.contenu).substring(0, 250) + '...'}</p>
                      <p>il y a {getTimeElapsed(mes.created_at)}</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </div>
            ))}

            <li className="dropdown-footer">
              <Link to="/messagerie">Voir tous les messages</Link>
            </li>

          </ul>

        </li>

        <li className="nav-item dropdown pe-3">

          <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
            <img src="../assets/images/logo_sans_bg.png" alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block dropdown-toggle ps-2">{user.nom}</span>
          </Link>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>{user.nom + ' ' + user.prenom}</h6>
              <span>{role}</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <Link className="dropdown-item d-flex align-items-center" to="/profil">
                <i className="bi bi-person"></i>
                <span>Mon Profil</span>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <Link className="dropdown-item d-flex align-items-center" to="/profil">
                <i className="bi bi-gear"></i>
                <span>Paramètres du compte</span>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <Link className="dropdown-item d-flex align-items-center" to="/help">
                <i className="bi bi-question-circle"></i>
                <span>Besoin d'aide ?</span>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <Link className="dropdown-item d-flex align-items-center" onClick={deconnexion}>
                <i className="bi bi-box-arrow-right"></i>
                <span>Déconnexion</span>
              </Link>
            </li>

          </ul>
        </li>

      </ul>
    </nav>

  </header>
  )
}

export default Header;