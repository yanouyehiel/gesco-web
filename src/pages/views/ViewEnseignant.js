import Header from "../../components/Header"
import Sidenav from "../../components/Sidenav"
import InfoPage from "../../components/InfoPage"
import Footer from "../../components/Footer"
import { Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import { getEcoleStored } from "../../services/LocalStorage"
import { deleteUser } from "../../services/UserController"
import { getTeacher } from "../../services/EnseignementController"

const ViewEnseignant= () => {
    const {matricule} = useParams()
    const [teacher, setTeacher] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getSingleTeacher()
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
        <>
            <Header />
            <Sidenav />
            
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