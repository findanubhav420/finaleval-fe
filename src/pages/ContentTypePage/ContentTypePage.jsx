import React, { useEffect, useState } from 'react';
import ContentTypesBar from '../../components/ContentTypesBar';
import SideNavbar from '../../components/SideNavbar';
import ContentTypeBody from '../../components/ContentTypeBody';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import { GET_ALL_CONTENT_TYPE } from '../../constants/apiEndPoints';
// import CollectionBody from '../../components/CollectionBody';

function ContentPage() {

  const [contentTypes, setContentTypes] = useState([{}]);
  const [isContentTypesLoaded, setIsContentTypesLoaded] = useState(true);

  useEffect(() => {
    makeRequest(GET_ALL_CONTENT_TYPE).then(
      (response) => {
        Promise.resolve(response).then(() => {
          setContentTypes(response);
        });
      }
    );
  }, []);
  console.log('contentTypes', contentTypes)
  return (
    <div className='flex flex-row min-h-screen bg-content-page font-montserrat'>
      <SideNavbar contentTypes = {contentTypes} setIsContentTypesLoaded={setIsContentTypesLoaded} />
      <div className='flex flex-col w-full bg-content-page text-black'>
        <ContentTypesBar />

        {isContentTypesLoaded && <ContentTypeBody contentTypes = {contentTypes} />}
        
        
      </div>   
    </div>
  );
}

export default ContentPage;
