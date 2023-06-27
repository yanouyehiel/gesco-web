import React from 'react'
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import InfoPage from "../components/InfoPage";

const Parents = () => {
    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Gestion parents' link="Parents d'élèves" />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">Les Parents</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Parents;