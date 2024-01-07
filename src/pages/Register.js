import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import AxiosApi from "../services/AxiosApi";
import { addEcole } from "../services/MainControllerApi";
import { ToastContainer, toast } from "react-toastify";

export const Register = () => {
  const [ecole, setEcole] = useState({})
  const [types, setTypes] = useState([])

  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setEcole({...ecole, [name]: value})
  }

  useEffect(() => {
    getTypesEtablissement()
  }, [])

  function getTypesEtablissement() {
    AxiosApi.get('/get-types-etablissement')
    .then(res => setTypes(res.data))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(ecole)
    try {
      const response = await addEcole(ecole);
      toast('Ecole créée avec succès !')
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <div className="container-fluid">
        <div>
          <div className="row">

            <div className="col-lg-12">

              <div className='flex-row'>
                {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/> */}
                <img src="../assets/images/px1.png"
                  alt="Image_Login"
                  style={{width: '100px', height: '100px', justifyContent: 'center', alignItems: 'center'}} 
                />
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
                    <Button variant="primary" size='lg' type='submit'>
                      Créer l'école
                    </Button>
                  </Form.Group>
                </form>

                <p className='ms-5'>Déjà membre ? <a href="/login" class="link-info">Se connecter</a></p>

              </div>

            </div>

          </div>

        </div>
        {/* <Footer /> */}
        <ToastContainer />
      </div>
  )
}