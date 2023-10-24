import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import InfoPage from "../../components/InfoPage";
import { Button } from "react-bootstrap";
import AxiosApi from "../../services/AxiosApi";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify'

const ViewParent = () => {
    const {matricule} = useParams()
    const [parent, setParent] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getParent()
    }, [])

    function getParent() {
        AxiosApi.get('/get-parent/' + matricule)
            .then(res => setParent(res.data[0]))
    }
    
    const handleClick = () => {
        AxiosApi.get('/delete-user/' + parent.id)
            .then(res => toast(res.data))
            .then(() => navigate('/teachers'))
    }

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Consulter un parent' link={'Infos sur ' + parent.nom +' '+ parent.prenom} />
                <ToastContainer />

                <br />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center text-danger">M./Mme {parent.nom +' '+ parent.prenom}</h1>

                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="card recent-sales overflow-auto">

                                        <div className="card-body">
                                            <h5 className="card-title">Informations personnelles</h5>

                                            <div className="info">
                                                <h5 className="title">Nom : </h5>
                                                <p className="title-value">{parent.nom}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Prénom : </h5>
                                                <p className="title-value">{parent.prenom}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Adresse : </h5>
                                                <p className="title-value">{parent.adresse}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Telephone : </h5>
                                                <p className="title-value">{parent.telephone}</p>
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
                                                <p className="title-value">{parent.matricule}</p>
                                            </div> 
                                            <div className="info">
                                                <h5 className="title">Parent de :</h5>
                                                <p className="title-value">{parent.nom_student +' '+ parent.prenom_student}</p>
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Salle de classe : </h5>
                                                <p className="title-value">{parent.nom_classe}</p>
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