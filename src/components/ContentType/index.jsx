import React from 'react';
import './ContentType.css';
import PropTypes from 'prop-types';

export default function ContentType({
  contentType,
  isActive,
  selectedContentTypeHandler,
}) {
  return (
    <div
      className={`content-type-button ${
        isActive ? 'content-type-button-active' : ''
      }`}
      onClick={() => {
        selectedContentTypeHandler(contentType);
      }}
    >
      <div className="content-type-name">{contentType.name}</div>
      <div className="content-type-entries">{contentType.fields && Object.keys(contentType.fields).length}</div>
    </div>
  );
}

// ContentType.propTypes = {
//   contentType: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     fields: PropTypes.arrayOf({
//       name: PropTypes.string,
//       type: PropTypes.string,
//     }),
//   }),
//   isActive: PropTypes.bool,
//   selectedContentTypeHandler: PropTypes.func,
// };
