import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentTypeSideNavbar from '../ContentTypeSideNavbar';
import ContentTypeBodyRight from '../ContentTypeBodyRight';

function ContentTypeBody(props) {

  const { contentTypes } = props;

  const [contentTypesObj, setContentTypesObj] = useState({});

  console.log('contentTypesObj from parent', contentTypesObj);

  return (
    <div className='flex h-full'>
      <ContentTypeSideNavbar contentTypes={contentTypes} setcontentTypesObj={setContentTypesObj} />
      <ContentTypeBodyRight contentTypesObj={contentTypesObj} />
    </div>
  );
}

ContentTypeBody.propTypes = {
  contentTypes: PropTypes.arrayOf(PropTypes.object)
};

export default ContentTypeBody;
