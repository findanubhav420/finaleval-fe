import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import { GET_ALL_FIELDS, GET_ENTRY_BY_ID } from '../../constants/apiEndPoints';

function ContentTypeButton({contentType, setcontentTypesObj}) {

  const [entries, setEntries] = useState(0);

  useEffect(()=>{
    makeRequest(GET_ENTRY_BY_ID(contentType.content_id)).then(
      (response) => {
        setEntries(response.length);
        Promise.resolve(response).then(() => {
          setEntries(response.length);
        });
      }
    );
  });

  const handleContentTypeArr = () => {
    makeRequest(GET_ALL_FIELDS(contentType.content_id)).then(
      (response) => {
        Promise.resolve(response).then(() => {
          setcontentTypesObj(response[0]);
        });
      }  
    );
  };

  return (
    <button onClick={handleContentTypeArr} className='flex bg-white m-1 p-2 rounded-md justify-between text-sm'>
      {
        <div>
          {
            contentType.content_title
          }
        </div>
      }{
        <div>
          {
            entries
          }
        </div>
      }
    </button>
  );
}

ContentTypeButton.propTypes = {
  contentType: PropTypes.object,
  setcontentTypesObj: PropTypes.func
};

export default ContentTypeButton;
