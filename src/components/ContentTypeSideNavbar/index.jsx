import React from 'react';
import PropTypes from 'prop-types';
import ContentTypeSideNavbarBody from '../ContentTypeSideNavbarBody';

function ContentTypeSideNavbar({contentTypes, setcontentTypesObj}) {
  return (
    <div className='basis-1/4 bg-content-side-navbar'>
      <ContentTypeSideNavbarBody contentTypes={contentTypes} setcontentTypesObj={setcontentTypesObj} />
    </div>
  );
}

ContentTypeSideNavbar.propTypes = {
  contentTypes: PropTypes.arrayOf(PropTypes.object),
  setcontentTypesObj: PropTypes.func
};

export default ContentTypeSideNavbar;