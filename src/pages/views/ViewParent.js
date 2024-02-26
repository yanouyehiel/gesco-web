import { useParams, useNavigate } from "react-router-dom";
import InfoPage from "../../components/InfoPage";
import { Button } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify'
import { deleteUser } from "../../services/UserController";
import { getSingleParent } from "../../services/MainControllerApi";
import { verifyUser } from "../../utils/functions";
import Auth from "../../contexts/Auth";
import ButtonComponent from "../../components/Button";

const ViewParent = () => {
    const {matricule} = useParams()
    const [parent, setParent] = useState({})
    const navigate = useNavigate()
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getParent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getParent() {
        await getSingleParent(matricule).then((res) => {
            setParent(res)
        })
    }
    
    const handleClick = async() => {
        await deleteUser(parent.id).then((res) => {
            toast("Parent supprime")
            navigate('/parents')
        })
    }

    return(
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
                                            <h5 className="title">Email : </h5>
                                            <p className="title-value">{parent.email}</p>
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
                                            <p className="title-value">{new Date().getFullYear()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonComponent onClick={handleClick}>Supprimer ce parent</ButtonComponent>
            </section>
        </main>
    )
}

export default ViewParent;