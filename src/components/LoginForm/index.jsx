import React  from 'react';
import {makeAuthRequest} from '../../utils/makeRequest/makeRequest';
import { LOGIN } from '../../constants/authEndPoints';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/hero-image.png';

function LoginForm() {

  const navigate = useNavigate();

const handleSubmit=(event)=>{
    event.preventDefault();
    const response=makeAuthRequest(LOGIN, { 
      data: {
        email: event.target[0].value,
        password: event.target[1].value,
      },
    });
    localStorage.setItem('token', response.data.token);
    navigate('/content-type');
  };

    function handleSignUp() {
        navigate('/register');
    }

  return (
    <div className="register-container">
    <div className="hero-image">
      <img src={heroImage} alt="" />
    </div>
    <div className='register-screen'>
      <div className='screen-heading'>
                Login to your CMS+ account
      </div>
      <form onSubmit={handleSubmit}>
        <label className='label' htmlFor='email'>Email</label><br />
        <input className='' type='text' size='30'></input><br />
        <label className='label' htmlFor='email'>Password</label><br />
        <input className='' type='password' size='30'></input><br />
        <button type='submit' className='register-button'>Login</button>
       
      </form>
      <p style={{color:"white",marginTop:"10px"}}>Forgot Password?</p>  
        <button style={{color:"white",marginTop:"10px"}} onClick={handleSignUp}>signUp</button> 
     
    </div>
    </div>
  );
}

export default LoginForm;
