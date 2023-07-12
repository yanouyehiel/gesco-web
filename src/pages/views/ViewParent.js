import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import InfoPage from "../../components/InfoPage";
import { Button } from "react-bootstrap";

const ViewParent = () => {
    const {matricule} = useParams()
    const handleClick = () => {
        console.log('clique');
    }

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Consulter un parent' link={'Infos sur ' + matricule} />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">M./Mme {matricule}</h1>

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
                                                <h5 className="title">Parent de :</h5>
                                                <p className="title-value">John Doe</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Salle de classe : </h5>
                                                <p className="title-value">CM2 A</p>
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
                        Supprimer ce parent
                    </Button>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ViewParent;