import { Link } from "react-router-dom";

function InfoPage({ title, link }) {
    return(
        <div className="pagetitle">
            <h1>{title}</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">{link}</li>
                </ol>
            </nav>
        </div>
    )
}

export default InfoPage;