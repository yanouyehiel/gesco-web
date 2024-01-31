import { useState } from "react";
import { dateParser } from "../utils/functions";
import { Modal } from "react-bootstrap";


const Cours = ({cour, classe}) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <div className="col-xxl-4 col-md-4" onClick={handleShow} style={{cursor: 'pointer'}}>
                <div className="card info-card sales-card">

                    <div className="card-body">
                        <h5 className="card-title">{cour.nom_matiere} <span>| {dateParser(cour.created_at)}</span></h5>

                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i className="bi bi-layout-text-window-reverse"></i>
                            </div>
                            <div className="ps-3">
                                <h6 style={{fontSize: 15}}>{cour.titre}</h6>
                                <span className="text-success pt-1 fw-bold">Classe </span>
                                <span className="text-muted pt-2 ps-1">{classe}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{cour.nom_matiere}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h5>Titre</h5>
                        <p>{cour.titre}</p>
                    </div>
                    <div>
                        <h5>Description</h5>
                        <p>{cour.description}</p>
                    </div>
                    <div>
                        <h5>Dispensé le</h5>
                        <p>{dateParser(cour.created_at)}</p>
                    </div>
                    <div>
                        <h5>Par l'enseignant</h5>
                        <p>{`${cour.nom_teacher} ${cour.prenom_teacher}`}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Cours;