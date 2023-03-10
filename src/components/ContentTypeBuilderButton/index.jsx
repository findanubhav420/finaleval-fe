import React from 'react';
import PropTypes from 'prop-types';

function ContentTypeBuilderButton({setIsContentTypesLoaded}) {
  return (
    <button onClick={()=>setIsContentTypesLoaded(true)} className='text-white text-xs mt-3 bg-black font-bold pl-2 p-1'>
      CONTENT TYPE BUILDER
    </button>
  );
}

ContentTypeBuilderButton.propTypes = {
  setIsContentTypesLoaded: PropTypes.func,
};

export default ContentTypeBuilderButton;
