import React, { useState, useEffect} from 'react';
import { makeAuthRequest } from '../../utils/makeRequest';
import { REGISTER } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import heroImage from '../../assets/hero-image.png';

export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token') !== null) navigate('/');
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async () => {
    await makeAuthRequest(REGISTER, navigate, {
      data: {
        email: email,
        password: password,
      },
    });
    navigate('/login');
  };
  return (
    <div className="register-container">
      <div className="image-section">
        <p>Design APIs fast,</p>
        <p>Manage content easily</p>
        <img src={heroImage} alt="" />
      </div>
      <div className="register-screen">
        <div className="screen-heading">Create a new CMS+ account</div>
        <div className="form">
          <p className="label">Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="label">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
