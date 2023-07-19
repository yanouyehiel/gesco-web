import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <Link to="/" class="logo d-flex align-items-center">
        <img src="../assets/images/px1.png" alt="logo" />
        <span class="d-none d-lg-block">Gesco</span>
      </Link>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div>

    <div class="search-bar">
      <form class="search-form d-flex align-items-center">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i class="bi bi-search"></i></button>
      </form>
    </div>

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <Link class="nav-link nav-icon search-bar-toggle " to="#">
            <i class="bi bi-search"></i>
          </Link>
        </li>

        <li class="nav-item dropdown">

          <Link class="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
            <i class="bi bi-bell"></i>
            <span class="badge bg-primary badge-number">4</span>
          </Link>

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li class="dropdown-header">
              You have 4 new notifications
              <Link to="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="bi bi-exclamation-circle text-warning"></i>
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="bi bi-x-circle text-danger"></i>
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="bi bi-check-circle text-success"></i>
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="bi bi-info-circle text-primary"></i>
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>
            <li class="dropdown-footer">
              <Link to="#">Show all notifications</Link>
            </li>

          </ul>

        </li>

        <li class="nav-item dropdown">

          <Link class="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
            <i class="bi bi-chat-left-text"></i>
            <span class="badge bg-success badge-number">3</span>
          </Link>

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li class="dropdown-header">
              You have 3 new messages
              <Link to="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="message-item">
              <Link to="#">
                <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle" />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="message-item">
              <Link to="#">
                <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle" />
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="message-item">
              <Link to="#">
                <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle" />
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="dropdown-footer">
              <Link to="#">Show all messages</Link>
            </li>

          </ul>

        </li>

        <li class="nav-item dropdown pe-3">

          <Link class="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
            <img src="../assets/images/px1.png" alt="Profile" class="rounded-circle" />
            <span class="d-none d-md-block dropdown-toggle ps-2">Y. Yanou</span>
          </Link>

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <Link class="dropdown-item d-flex align-items-center" to="/profil">
                <i class="bi bi-person"></i>
                <span>My Profile</span>
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <Link class="dropdown-item d-flex align-items-center" to="/profil">
                <i class="bi bi-gear"></i>
                <span>Account Settings</span>
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <Link class="dropdown-item d-flex align-items-center" to="/help">
                <i class="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <Link class="dropdown-item d-flex align-items-center" to="/logout">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
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