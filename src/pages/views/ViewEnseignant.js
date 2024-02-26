import InfoPage from "../../components/InfoPage"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { ToastContainer, toast } from 'react-toastify'
import { deleteUser } from "../../services/UserController"
import { getTeacher } from "../../services/EnseignementController"
import { verifyUser } from "../../utils/functions";
import Auth from "../../contexts/Auth";
import ButtonComponent from "../../components/Button"


const ViewEnseignant= () => {
    const {matricule} = useParams()
    const [teacher, setTeacher] = useState({})
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const navigate = useNavigate()

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        getSingleTeacher()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getSingleTeacher() {
        await getTeacher(matricule).then((res) => {
            setTeacher(res)
        })
    }

    const handleClick = async() => {
        await deleteUser(teacher.id).then((res) => {
            toast("Utilisateur supprime")
            navigate('/teachers')
        })
    }
    
    return (
        <main id="main" className="main">
            <InfoPage title='Consulter un enseignant' link={'Infos sur ' + teacher.nom + ' ' + teacher.prenom} />
            <ToastContainer />

            <br />
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center text-danger">L'ENSEIGNANT {teacher.nom + ' ' + teacher.prenom}</h1>

                        <div className="row">

                            <div className="col-lg-6">
                                <div className="card recent-sales overflow-auto">

                                    <div className="card-body">
                                        <h5 className="card-title">Informations personnelles</h5>

                                        <div className="info">
                                            <h5 className="title">Nom : </h5>
                                            <p className="title-value">{teacher.nom}</p>
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Prénom : </h5>
                                            <p className="title-value">{teacher.prenom}</p>
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Adresse : </h5>
                                            <p className="title-value">Marche Beedi - Douala</p>
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Telephone : </h5>
                                            <p className="title-value">{teacher.telephone}</p>
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
                                            <p className="title-value">{teacher.matricule}</p>
                                        </div> 
                                        <div className="info">
                                            <h5 className="title">Enseignant en salle :</h5>
                                            <p className="title-value">{teacher.nom_classe}</p>
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Effectif des eleves : </h5>
                                            <p className="title-value">{teacher.effectif}</p>
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
                <ButtonComponent onClick={handleClick}>Supprimer ce maître</ButtonComponent>
            </section>
        </main>
    )
}

export default ViewEnseignant;