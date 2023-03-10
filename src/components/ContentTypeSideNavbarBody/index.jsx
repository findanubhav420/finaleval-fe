import React from 'react';
import PropTypes from 'prop-types';
import NewTypeButton from '../NewTypeButton';
import ContentTypeButton from '../ContentTypeButton';

function ContentTypeSideNavbarBody({contentTypes, setcontentTypesObj}) {
    // console.log('contentTypes', contentTypes)
  return (
    <div className='flex flex-col m-3'>
      {
        <div>
          {
            contentTypes.length
          } types
        </div>
      } 
      <NewTypeButton />
      {
        // eslint-disable-next-line react/jsx-key
        contentTypes.map((contentType) => <ContentTypeButton contentType={contentType} setcontentTypesObj={setcontentTypesObj} />
        )
      } 
      
    </div>
  );
}

ContentTypeSideNavbarBody.propTypes = {
  contentTypes: PropTypes.arrayOf(PropTypes.object),
  setcontentTypesObj: PropTypes.func
};


export default ContentTypeSideNavbarBody;
