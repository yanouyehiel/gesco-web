import React, { useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import '../styles/login.css';
import { login } from '../services/AuthApi';
import Auth from '../contexts/Auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../services/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { isAuthenticated ,setIsAuthenticated } = useContext(Auth);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setUser({...user, [name]: value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
 
    await login(user).then((res) => {
      addItem('gescoUser', JSON.stringify(res))
      setIsAuthenticated(true);
      window.location.replace('/home');
    }, (error) => {
      setError(true)
      setErrorMessage(error.message)
      toast.error(errorMessage)
    });
  }

  useEffect(() => {
    if (isAuthenticated) {
      window.location.replace('/home')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <div className="container-fluid">
      <ToastContainer />
      <MDBContainer fluid>
        <MDBRow>

          <MDBCol sm='6'>

            <div className='flex-row hidden'>
              <img src="../assets/images/logo_sans_bg.png" alt="Image_Login" />
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

              <div className='title'>
                <h3 className="fw-normal ps-5">Connexion</h3>
                <p>Entrer vos identifiants pour vous connecter à votre école</p>
              </div>
              <form onSubmit={handleSubmit}>
                <MDBInput onChange={handleChange} name='email' wrapperClass='mb-4 mx-5 w-100' label='Email' type='email' size="lg"/>
                <MDBInput onChange={handleChange} name='password' wrapperClass='mb-4 mx-5 w-100' label='Password' type='password' size="lg"/>

                <MDBBtn className="mb-4 px-5 mx-5 w-100" type='submit' style={{backgroundColor: '#009AD7'}} size='lg'>Login</MDBBtn>
              </form>
              <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted link-success" href="/pasword-forgot">Mot de passe oublié ?</a></p>
              <p className='ms-5'>Vous n'avez pas d'école ? <a href="/register" class="link-success">Créez votre établissement</a></p>

            </div>

          </MDBCol>

          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img src="../assets/images/logo_sans_bg.png"
              alt="Image_Login" className="w-100"
              style={{objectFit: 'cover', objectPosition: 'left'}} 
            />
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </div>
  )
}

export default Login;