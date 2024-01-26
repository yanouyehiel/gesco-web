import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { addEcole, typesEtablissements } from "../services/MainControllerApi";
import { ToastContainer, toast } from "react-toastify";
import '../styles/register.css'
import { MDBBtn } from "mdb-react-ui-kit";

const Register = () => {
  const [ecole, setEcole] = useState({})
  const [types, setTypes] = useState([])

  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setEcole({...ecole, [name]: value})
  }

  useEffect(() => {
    getTypesEtablissement()
  }, [])

  async function getTypesEtablissement() {
    await typesEtablissements().then((res) => {
      setTypes(res)
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(ecole)
    
    await addEcole(ecole).then((res) => {
      console.log(res)
      toast('Ecole créée avec succès !')
      setTimeout(() => {
        window.location.reload()
      }, 3000);
    });
  }

  return (
      <div className="container">
        <div className="register">
          <div className="row">

            <div className="col-lg-6">

              <div className='flex-row hidden'>
                <img src="../assets/images/px1.png" alt="Image_Login" />
              </div>

              <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Enregistrer son établissement</h3>
                
                <form onSubmit={handleSubmit}>
                  <Form.Group className="form-group mt-4">
                    <Form.Label className="control-label">Nom de l'école</Form.Label>
                    <Form.Control onChange={handleChange} name='nom' className="form-control" type='text' />
                  </Form.Group>
                  <Form.Group className="form-group mt-4">
                    <Form.Label className="control-label">Ville</Form.Label>
                    <Form.Control onChange={handleChange} name='ville' className="form-control" type='text' />
                  </Form.Group>
                  <Form.Group className="form-group mt-4">
                    <Form.Label className="control-label">Localisation</Form.Label>
                    <Form.Control onChange={handleChange} name='localisation' className="form-control" type='text' />
                  </Form.Group>
                  <Form.Group className="form-group mt-4">
                    <Form.Label className="control-label">Type d'établissement</Form.Label>
                    <Form.Select onChange={handleChange} name='type_etablissement_id' className="form-control">
                      <option>--select--</option>
                      {types.map((type, index) => (
                        <option key={index} value={type.id}>{type.intitule}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group mt-4">
                    <MDBBtn className="mb-4 w-100" type='submit' color='info' size='lg'>Créer l'école</MDBBtn>
                  </Form.Group>
                </form>

                <p className='ms-0'>Déjà membre ? <a href="/login" class="link-info">Se connecter</a></p>

              </div>

            </div>

            <div className="col-lg-6 right-side">
              <img src="../assets/images/px1.png"
                alt="Image_Login" className="w-100"
                style={{objectFit: 'cover', objectPosition: 'left'}} 
              />
            </div>

          </div>

        </div>
        
        <ToastContainer />
      </div>
  )
}

export default Register;