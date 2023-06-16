import { Link } from "react-router-dom";

function Notfound() {
    return(
        <>
            <main>
                <div className="container">

                    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>404</h1>
                        <h2>The page you are looking for doesn't exist.</h2>
                        <Link className="btn" to="/home">Back to home</Link>
                        <img src="./assets/images/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
                        <div className="credits">
                        Designed by <Link to="/">Yehiel Yanou</Link>
                        </div>
                    </section>

                </div>
            </main>
            <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
        </>
    )
}

export default Notfound;