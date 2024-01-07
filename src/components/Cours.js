import { dateParser } from "../utils/functions";


const Cours = ({cour, classe}) => {

    return(
        <div className="col-xxl-4 col-md-4">
            <div className="card info-card sales-card">

                <div className="card-body">
                    <h5 className="card-title">{cour.nom_matiere} <span>| {dateParser(cour.created_at)}</span></h5>

                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-layout-text-window-reverse"></i>
                        </div>
                        <div className="ps-3">
                            <h6 style={{fontSize: 15}}>{cour.titre}</h6>
                            <span className="text-success pt-1 fw-bold">Salle</span>
                            <span className="text-muted pt-2 ps-1">{classe}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cours;