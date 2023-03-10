import {React, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {makeRequest} from "../../utils/makeRequest/makeRequest";
import {GET_ALL_CONTENT_TYPE} from "../../constants/apiEndPoints";
import {AiOutlineSearch} from 'react-icons/ai';
import {BsCircleFill} from 'react-icons/bs';
import './SideNavbar.css';

function SideNavbar() {

  const [contentList, setContentList] = useState();

    useEffect(() => {
        // const token = localStorage.getItem('token');
        // if(!token) {
        //     navigate('/login');
        // }
        
      makeRequest(GET_ALL_CONTENT_TYPE)
        .then((response) => {
          setContentList(response.data);
        }
        ).catch((error) => {
          console.log(error);
        }
        );
    }, []);

    const navigate = useNavigate();
  return (
    <div className='sidebar-container'>
    <div className='sidebar-header'>CMS+</div>
    <div className="collections-container">
      <div className="collection-header">
        <p style={{fontSize: '0.9rem'}}>COLLECTION TYPES</p>
        <AiOutlineSearch />
      </div>
      <div className='collection-list'>
        <div className='active list-item'>
          <BsCircleFill size={8}/>
          Company_Profile
        </div>
        <div className='list-item'>
          <BsCircleFill size={8}/>
          Company_Profile
        </div>
        <div className='list-item'>
          <BsCircleFill size={8}/>
          Company_Profile
        </div>
        <div className='list-item'>
          <BsCircleFill size={8}/>
          Company_Profile
        </div>
      </div>
      <div className="builder active">CONTENT TYPE BUILDER</div>
    </div>
  </div>
  );
}

export default SideNavbar;