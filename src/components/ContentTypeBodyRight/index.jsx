import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContentTypeBodyRightHeader from '../ContentTypeBodyRightHeader';
import ContentTypeBodyRightButton from '../ContentTypeBodyRightButton';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import { GET_ALL_FIELDS, UPDATE_FIELD } from '../../constants/apiEndPoints';

function ContentTypeBodyRight({contentTypesObj}) {

  const [fieldArr, setFieldArr] = useState([]);
  
  useEffect(() => {
    console.log('contentTypesObj', contentTypesObj);
    setFieldArr(Object.keys(contentTypesObj).length===0 ? [] : contentTypesObj.attributes);
  }, [contentTypesObj]);

  console.log('content', contentTypesObj);

  useEffect(() => {
    if(contentTypesObj!==undefined && Object.keys(contentTypesObj).length!==0){
      makeRequest(UPDATE_FIELD(contentTypesObj.content_id),{
        data: {
          attributes: fieldArr
        }
      }).then(
        (response) => {
          console.log('update field response', response);
          Promise.resolve(response).then(() => {
            makeRequest(GET_ALL_FIELDS(contentTypesObj.content_id)).then(
              (response) => {
                console.log('fields response', response);
                Promise.resolve(response).then(() => {
                  setFieldArr(response.data.data.attributes);
                });
              }
            ); 
          });
        }
      );
    }
  }, [fieldArr]);

  console.log('fieldArr', fieldArr);

  return (
    <div className='container'>
      <div className='head'>{
        fieldArr.length
      } fields
      </div>
      <ContentTypeBodyRightButton fieldArr={fieldArr} setFieldArr={setFieldArr} />
      {
        fieldArr.length > 0 &&
                // eslint-disable-next-line react/jsx-key
                fieldArr.map((contentType) => <ContentTypeBodyRightHeader contentType={contentType} />)
      }
    </div>
  );
}

ContentTypeBodyRight.defaultProps = {
  contentTypesObj: {
    attributes: [],
  }
};

ContentTypeBodyRight.propTypes = {
  contentTypesObj: PropTypes.object
};

export default ContentTypeBodyRight;
