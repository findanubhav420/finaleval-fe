import React, {useEffect} from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import './HomePage.css';
import Builder from '../../components/ContentTypeBody';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="homepage-container">
      <Sidebar/>
      <div className="right-side-container">
        <Header title="Content Types"/>
        <Builder/>
      </div>
    </div>
  );
}
