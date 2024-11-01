import { dateParser } from "../utils/functions"
import { validateRequest } from "../services/MainControllerApi"
import { toast } from "react-toastify"
import ButtonComponent from "./Button"

const Document = ({doc}) => {

    async function validate(id) {
        await validateRequest({id}).then((res) => {
            toast(res)
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        }, (err) => {
            console.log(err)
        })
    }

    return (
        <tr>
            <td style={{ textAlign: 'center' }}>{doc.id}</td>
            <td style={{ textAlign: 'center' }}>{doc.annee_scolaire}</td>
            <td style={{ textAlign: 'center' }}>{doc.intitule}</td>
            <td style={{ textAlign: 'center' }}>{`${doc.nom_student} ${doc.prenom_student}`}</td>
            <td style={{ textAlign: 'center' }}>{dateParser(doc.created_at)}</td>
            <td style={{ textAlign: 'center' }}>
                <ButtonComponent onClick={() => validate(doc.id)}>Valider</ButtonComponent>
            </td>
        </tr>
    )
}

export default Document