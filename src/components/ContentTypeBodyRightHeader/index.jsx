import React from 'react';
import PropTypes from 'prop-types';

function ContentTypeBodyRightHeader(props) {

  const {contentType} = props;

  return (
    <div className='flex items-center bg-white my-1 h-10 rounded-md justify-between'>
      <div className='flex px-2 mr-3 h-10 items-center bg-ab text-white rounded-l-md'>
        Ab
      </div>
      <div className='w-44'>
        {contentType}
      </div>
      <div className='flex-1 font-light'>
        Text
      </div>
      <div className='flex mr-5'>
        <div className='mx-2'>
        Edit
        </div>
        <div>
          Delete
        </div>
      </div>
    </div>
  );
}

ContentTypeBodyRightHeader.propTypes = {
  contentType: PropTypes.string,
};

export default ContentTypeBodyRightHeader;
