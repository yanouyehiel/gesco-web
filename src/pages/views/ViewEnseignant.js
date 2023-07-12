import Header from "../../components/Header"
import Sidenav from "../../components/Sidenav"
import InfoPage from "../../components/InfoPage"
import Footer from "../../components/Footer"
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"

const ViewEnseignant= () => {
    const {matricule} = useParams()
    const handleClick = () => {
        console.log('clique');
    }
    
    return (
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Consulter un enseignant' link={'Infos sur ' + matricule} />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">L'ENSEIGNANT {matricule}</h1>

                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="card recent-sales overflow-auto">

                                        <div className="card-body">
                                            <h5 className="card-title">Informations personnelles</h5>

                                            <div className="info">
                                                <h5 className="title">Nom : </h5>
                                                <p className="title-value">Yanou Piatchebe</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Prénom : </h5>
                                                <p className="title-value">Yehiel Eraste</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Adresse : </h5>
                                                <p className="title-value">Marche Beedi - Douala</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Telephone : </h5>
                                                <p className="title-value">695707732</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Informations scolaires</h5> 

                                            <div className="info">
                                                <h5 className="title">Matricule :</h5>
                                                <p className="title-value">MAT123</p>
                                            </div> 
                                            <div className="info">
                                                <h5 className="title">Enseignant en salle :</h5>
                                                <p className="title-value">CM2</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Effectif des eleves : </h5>
                                                <p className="title-value">35</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Année scolaire : </h5>
                                                <p className="title-value">2022-2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant="primary" onClick={handleClick}>
                        Supprimer ce maître
                    </Button>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ViewEnseignant;