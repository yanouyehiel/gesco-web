import React from 'react'
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";

const Enseignants = () => {
    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gerer mon admistration' link='Staff interne' />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">Mes Employes</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Enseignants;