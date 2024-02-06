import { Link } from "react-router-dom";
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";
import { useContext, useEffect } from "react";

function Notfound() {
    
    
    return(
        <main id="main" className="main">
            <div className="container">
                <section className="section error-404 d-flex flex-column align-items-center justify-content-center">
                    <h1>404</h1>
                    <h2>La page que vous recherchez n'existe pas.</h2>
                    <Link className="btn" to="/home">Back to home</Link><br/>
                </section>
            </div>
        </main>
    )
}

export default Notfound;