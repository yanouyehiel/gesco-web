import React, { useState, useEffect, useContext } from "react";
import InfoPage from "../components/InfoPage";
import { Button, Modal, Form } from "react-bootstrap";
import EmploiDeTemps from "../components/EmploiDeTemps";
import { ClipLoader} from 'react-spinners'
import { verifyUser } from "../utils/functions";
import Auth from "../contexts/Auth";

const Planning = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth)

    useEffect(() => {
        verifyUser({isAuthenticated, setIsAuthenticated})
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
        setShow(false);
    }

    return(
        <main id="main" className="main">
            <InfoPage title='Gestion du planning' link='Emploi de temps' />

            <br />
            <div className="content-wrapper">
                <section className="content mt-2 ">
                    <div className="container-fluid">
                        <h1 className="text-center pt-4 pb-2 text-danger">PLANNING</h1>
                        <div className="container">
                            <Button variant="primary" onClick={handleShow}>
                                Enregistrer un planning
                            </Button>
                            <Modal show={show} onHide={handleClose} size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>Nouvel Emploi de temps</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <Form.Group className="form-group mt-4">
                                                    <Form.Label className="control-label">Sélectionner la classe</Form.Label>
                                                    <Form.Select className="form-control">
                                                        <option>-- choix --</option>
                                                        <option>SIL</option>
                                                        <option>CEP</option>
                                                        <option>CE1</option>
                                                        <option>CE2</option>
                                                        <option>CM1</option>
                                                        <option>CM2</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div className="col-lg-6">
                                                <Form.Group className="form-group mt-4">
                                                    <Form.Label className="control-label">Sélectionner le trimestre</Form.Label>
                                                    <Form.Select className="form-control">
                                                        <option>-- choix --</option>
                                                        <option>Trimestre 1</option>
                                                        <option>Trimestre 2</option>
                                                        <option>Trimestre 3</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <Form.Group className="form-group mt-4">
                                                    <Form.Label className="control-label">Sélectionner l'année scolaire</Form.Label>
                                                    <Form.Select className="form-control">
                                                        <option>-- choix --</option>
                                                        <option>2021 - 2022</option>
                                                        <option>2022 - 2023</option>
                                                        <option>2023 - 2024</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div className="col-lg-6">
                                                <Form.Group className="form-group mt-4">
                                                    <Form.Label className="control-label">Entrée la période</Form.Label>
                                                    <Form.Control className="form-control" type="text" placeholder="Semaine du __/__ au __/__" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="card mt-5">
                                                <div class="card-body">
                                                    <table id="example1" class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Journée</th>
                                                                <th>Heures</th>
                                                                <th>Lundi</th>
                                                                <th>Mardi</th>
                                                                <th>Mercredi</th>
                                                                <th>Jeudi</th>
                                                                <th>Vendredi</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Control className="form-control" type="date" />
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Control className="form-control" type="text" placeholder="8h-9h" />
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="form-group mt-4">
                                                                        <Form.Select className="form-control">
                                                                            <option></option>
                                                                            <option value="choix">Francais</option>
                                                                            <option value="choix">Mathematiques</option>
                                                                            <option value="choix">Sciences</option>
                                                                            <option value="choix">Informatique</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <Button variant="primary" size='lg' type='submit'>
                                            Enregistrer
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </section>
            </div>
            <div class="wrapper">
                <div class="content-wrapper">
                    <section class="content mt-2 ">
                        <div class="container-fluid">
                            <div class="card mt-5">
                                <div class="card-body">
                                    <div class="h3 text-danger my-3">Emploi de temps enregistré</div>
                                    <table id="example1" class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Numéro</th>
                                                <th>Classe</th>
                                                <th>Trimestre</th>
                                                <th>Anne Scolaire</th>
                                                <th>Semaine</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ?
                                                <ClipLoader color="#333" />
                                                :
                                                <>
                                                    <EmploiDeTemps />
                                                    <EmploiDeTemps />
                                                    <EmploiDeTemps />
                                                    <EmploiDeTemps />
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Planning;