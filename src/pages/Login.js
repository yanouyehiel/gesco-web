import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';
import '../styles/login.css';
import { redirect } from 'react-router-dom';
import { login } from '../services/AuthApi';
import Auth from '../contexts/Auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const { navigate } = useNavigate();
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
    console.log(user)
    try {
      const response = await login(user);
      console.log(response)
      //setIsAuthenticated(response);
      navigate('/home');
    } catch ({ response }) {
      setError(true)
      setErrorMessage(response)
    }
  }

  return(
    <div className="container-fluid">
      <MDBContainer fluid>
        <MDBRow>

          <MDBCol sm='6'>

            <div className='flex-row'>
              <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
              <span className="h1 fw-bold mb-0">Logo</span>
              <img src="../assets/images/px1.png"
                alt="Image_Login"
                style={{width: '100px', height: '100px', justifyContent: 'center', alignItems: 'center'}} 
              />
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
              <form onSubmit={handleSubmit}>
                <MDBInput onChange={handleChange} name='email' wrapperClass='mb-4 mx-5 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
                <MDBInput onChange={handleChange} name='password' wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

                <MDBBtn className="mb-4 px-5 mx-5 w-100" type='submit' color='info' size='lg'>Login</MDBBtn>
              </form>
              <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
              <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

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
      {/* <Footer /> */}
    </div>
  )
}

export default Login;