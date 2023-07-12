import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import Footer from "../../components/Footer";
import InfoPage from "../../components/InfoPage";
import { useParams } from "react-router-dom";
import { ClipLoader} from 'react-spinners'

const ViewEmploiTemps = () => {
    const {salle} = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    return(
        <>
            <Header />
            <Sidenav />
            <main id="main" className="main">
                <InfoPage title='Emploi du temps' link={salle} />

                <br />
                <div className="col-12">
                    <h1 className="text-center text-danger">PLANNING {salle}</h1><br />
                    <div className="card recent-sales overflow-auto">
                        <div className="card-body">
                            <h5 className="card-title">Semaine du <span>20 au 27 Juin 2023</span></h5>

                            <table className="table table-borderless datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">Journée</th>
                                        <th scope="col">Heure</th>
                                        <th scope="col">Lundi</th>
                                        <th scope="col">Mardi</th>
                                        <th scope="col">Mercredi</th>
                                        <th scope="col">Jeudi</th>
                                        <th scope="col">Vendredi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ?
                                        <ClipLoader color="#333" />
                                        :
                                        <>
                                            <tr>
                                                <td>23 Juin 2023</td>
                                                <td>8h - 10h</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                            </tr>
                                            <tr>
                                                <td>23 Juin 2023</td>
                                                <td>8h - 10h</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                            </tr>
                                            <tr>
                                                <td>23 Juin 2023</td>
                                                <td>8h - 10h</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                                <td className="text-primary">At praesentium minu</td>
                                            </tr>
                                        </>
                                    }
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ViewEmploiTemps;