

const Presence = () => {
    return(
        <div className="col-xxl-4 col-md-4">
            <div className="card info-card sales-card">

                <div className="card-body">
                    <h5 className="card-title">Lundi 3 Juillet 2023 <span>| 7h30 - 10h</span></h5>

                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-layout-text-window-reverse"></i>
                        </div>
                        <div className="ps-3">
                            <h6>Yanou Yehiel</h6>
                            <span className="text-success pt-1 fw-bold">Présent</span>
                            <span className="text-danger pt-1 fw-bold"> Absent</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Presence;