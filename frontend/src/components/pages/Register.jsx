
import React, {useState , useContext} from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'

import registerImg from '../../assets/images/register.png'
import userIcon from '../../assets/images/user.png'
import { AuthContext, AuthContextProvider } from '../../context/AuthContext'
// import { AuthContext } from './../context/AuthContext'
// import { BASE_URL } from './../utils/config'
const SignUp = () => {

  const [credentials, setCredentials] = useState ({
    userName:'',
    email:'',
    password:'',
  });

  const {dispatch} = useContext(AuthContext);

  // const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleChange = async (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value}))
  };

  // const handleClick = async e => {
  //   e.preventDefault();

  //   try{
  //     const res = await fetch(`${BASE_URL}/auth/signup`,{
  //       method:'post',
  //       headers:{
  //         'content-type':'application/json'
  //       },
  //       body: JSON.stringify(credentials)
  //     })
  //     const result = await res.json()

  //     if(!res.ok) alert(result.message)
  //     dispatch({type:'SIGNUP_SUCCESS'})
  //     navigate('/login')
  //   }catch(err){
  //     alert(err.message)
  //   }
  // };
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={registerImg} alt=''></img>
              </div>
              <div className='login__form'>
                <div className='user'>
                <img src={userIcon} alt=''></img>
                </div>
                <h2>SignUp</h2>
                <Form >
                <FormGroup>
                    <input type='text' placeholder='Username' required id='username' onChange={handleChange}></input>
                  </FormGroup>
                  <FormGroup>
                    <input type='email' placeholder='Email' required id='email' onChange={handleChange}></input>
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Password' required id='password' onChange={handleChange}></input>
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type="submit">Create an account</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SignUp


