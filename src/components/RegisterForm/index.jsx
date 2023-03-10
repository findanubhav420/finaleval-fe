import React  from 'react';
import {makeAuthRequest} from '../../utils/makeRequest/makeRequest';
import { REGISTER } from '../../constants/authEndPoints';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import heroImage from '../../assets/hero-image.png';

function RegisterForm() {

  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    makeAuthRequest(REGISTER, { 
      data: {
        email: event.target[0].value,
        password: event.target[1].value,
      },
      
    }).then((response) => {
      Promise.resolve(response).then(() => {
        if(response.status === 201) {
          navigate('/login');
        }
      });
    }).catch((error) => {
       console.log(error);
    });
    
  };

  function handleClick() {
    navigate('/login');
  }

  return (
    <div className="register-container">
    <div className="hero-image">
      <img src={heroImage} alt="" />
    </div>
    <div className='register-screen'>
      <div className='screen-heading'>
                Register to your CMS+ account
      </div>
      <form onSubmit={handleSubmit}>
        <label className='label' htmlFor='email'>Email</label><br />
        <input className='' type='text' size='30'></input><br />
        <label className='label' htmlFor='email'>Password</label><br />
        <input className='' type='password' size='30'></input><br />
        <button type='submit' className='register-button'>Register</button>
      </form>
      <button style={{color:"white",marginTop:"10px"}}
    onClick={handleClick}>LogIn</button>
    </div>
    </div>
  );
}

export default RegisterForm;
