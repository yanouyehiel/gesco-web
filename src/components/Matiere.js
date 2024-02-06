
import { dateParser } from "../utils/functions";


const Matiere = ({ matiere, num }) => {

    return(
        <tr>
            <td>{num+1}</td>
            <td style={{ textAlign: 'center' }}>{matiere.code}</td>
            <td style={{ textAlign: 'center' }}>{matiere.intitule}</td>
            <td style={{ textAlign: 'center' }}>{matiere.coefficient}</td>
            <td style={{ textAlign: 'center' }}>{dateParser(matiere.created_at)}</td>
            {/* <td>
                <Link className="text-danger" onClick={handleDelete}><i className="fa-solid text-danger fa-trash"></i></Link>
            </td> */}
        </tr>
    )
}

export default Matiere;