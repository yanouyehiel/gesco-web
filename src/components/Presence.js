

const Presence = ({absence}) => {
    return(
        <div className="col-xxl-4 col-md-4">
            <div className="card info-card sales-card">

                <div className="card-body">
                    <h5 className="card-title">{new Date(absence.created_at).toLocaleDateString()} <span>| {absence.periode}</span></h5>

                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-layout-text-window-reverse"></i>
                        </div>
                        <div className="ps-3">
                            <h6 style={{fontSize: '17px'}}>{absence.nom_student +' '+ absence.prenom_student}</h6>
                            <span className="text-danger pt-1 fw-bold"> Absent</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Presence;