import React from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Enseignement = () => {
    const {salle} = useParams()

    return(
        <>
            <Header />
            <Sidenav />

            <main id="main" className="main">
                <InfoPage title='Gestion des cours' link='Visualiser les cours donnés' />

                <br />
                <div className="content-wrapper">
                    <section className="content mt-2 ">
                        <div className="container-fluid">
                            <h1 className="text-center pt-4 pb-2 text-danger">COURS DE LA {salle}</h1>
                            <div className="container">

                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Enseignement;