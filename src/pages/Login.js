import React, { useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';
import '../styles/login.css';
import { login } from '../services/AuthApi';
import Auth from '../contexts/Auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem, addItem } from '../services/LocalStorage';
import Footer from '../components/Footer';

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { setIsAuthenticated } = useContext(Auth);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const userRegistred = getItem('gescoUser') || '{}'
  const userParsed = JSON.parse(userRegistred)

  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setUser({...user, [name]: value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
 
    await login(user).then((res) => {
      //console.log(res)
      addItem('gescoUser', JSON.stringify(res))
      setIsAuthenticated(true);
      navigate('/home');
    }, (error) => {
      setError(true)
      setErrorMessage(error.error)
    });
  }

  useEffect(() => {
    if (userParsed !== null) {
      navigate('/home')
    }
  }, [user])

  return(
    <div className="container-fluid">
      <MDBContainer fluid>
        <MDBRow>

          <MDBCol sm='6'>

            <div className='flex-row hidden'>
              <img src="../assets/images/px1.png" alt="Image_Login" />
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

              <div className='title'>
                <h3 className="fw-normal ps-5">Connexion</h3>
                <p>Entrer vos identifiants pour vous connecter à votre école</p>
              </div>
              <form onSubmit={handleSubmit}>
                <MDBInput onChange={handleChange} name='email' wrapperClass='mb-4 mx-5 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
                <MDBInput onChange={handleChange} name='password' wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

                <MDBBtn className="mb-4 px-5 mx-5 w-100" type='submit' color='info' size='lg'>Login</MDBBtn>
              </form>
              <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
              <p className='ms-5'>Vous n'avez pas d'école ? <a href="/register" class="link-info">Créez votre établissement</a></p>

            </div>

          </MDBCol>

          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img src="../assets/images/px1.png"
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