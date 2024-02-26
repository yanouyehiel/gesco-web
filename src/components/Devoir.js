import { Modal } from "react-bootstrap";
import { dateParser } from "../utils/functions";
import { useState } from "react";

const Devoir = ({devoir, classe}) => {
    const [show, setShow] = useState(false)
    const [devoirL, setDevoirL] = useState({})

    const handleShow = () => {
        setDevoirL(devoir)
        setShow(true)
    }
    const handleClose = () => setShow(false)

    return (
        <>
            <div className="col-xxl-4 col-md-4" onClick={handleShow} style={{cursor: 'pointer'}}>
                <div className="card info-card sales-card">

                    <div className="card-body">
                        <h5 className="card-title">{dateParser(devoir.created_at)}</h5>

                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i className="bi bi-layout-text-window-reverse"></i>
                            </div>
                            <div className="ps-3">
                                <h6 style={{fontSize: '17px', color: '#009AD7'}}>{devoir.nom_livre}</h6>
                                <span className="pt-1 fw-bold" style={{color: '#48BB8C'}}> {classe}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Exercice à faire</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h5>Matière</h5>
                        <p>{devoirL.nom_matiere}</p>
                    </div>
                    <div>
                        <h5>Livre</h5>
                        <p>{devoirL.nom_livre}</p>
                    </div>
                    <div>
                        <h5>Numéro de page</h5>
                        <p>{devoirL.num_page}</p>
                    </div>
                    <div>
                        <h5>Numéro de l'exercice</h5>
                        <p>{devoirL.num_exo}</p>
                    </div>
                    <div>
                        <h5>Laissé le</h5>
                        <p>{dateParser(devoirL.created_at)}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Devoir;