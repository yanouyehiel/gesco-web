import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

function Notfound() {
    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <div className="container">
                    <section className="section error-404 d-flex flex-column align-items-center justify-content-center">
                        <h1>404</h1>
                        <h2>La page que vous recherchez n'existe pas.</h2>
                        <Link className="btn" to="/home">Back to home</Link><br/>
                    </section>
                </div>
            </main><br/><br/><br/>
            <Footer />
        </>
    )
}

export default Notfound;