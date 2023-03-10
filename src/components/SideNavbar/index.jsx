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
        const response = makeRequest(GET_ALL_CONTENT_TYPE).then(
            (response) => {
                // console.log(response);
                setContentList(response);
                return response;
            }
        );    
    }, []);
    
    

    const navigate = useNavigate();


    const HandleClick = () => {
        navigate('/content-type');
    }


  return (
    <div className='sidebar-container'>
    <div className='sidebar-header'>CMS+</div>
    <div className="collections-container">
      <div className="collection-header">
        <h1>COLLECTION TYPES</h1>
        <AiOutlineSearch />
      </div>
      <div className='collection-list'>
       {contentList && contentList.map((content) => {
          return (
            <div className="collection-item" onClick={() => navigate(`/entries/${content.content_id}`)}>
              <BsCircleFill className='circle-icon'/>
              <div className="collection-name">{content.content_title}</div>
            </div>
          );
       }
        )}
      </div>
      <div  className="builder active"><button onClick={HandleClick}> CONTENT TYPE BUILDER</button></div>
    </div>
  </div>
  );
}

export default SideNavbar;