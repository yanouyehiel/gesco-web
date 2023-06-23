import React from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Presences = () => {
    const {salle} = useParams()

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gestion les présences' link='Présence des élèves' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">PRESENCE DE LA {salle}</h1>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Presences;