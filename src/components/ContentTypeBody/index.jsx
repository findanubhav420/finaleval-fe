import React, { useState } from 'react';
import FieldTile from '../FieldTile';
import SideModal from '../SideModal';
import './ContentTypeBody.css';

function ContentTypeBody() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="content-body-container">
      <div className="content-body-header">
        <div className="entries-number">13 Entries Found</div>
        <button className="add-entry" onClick={() => setIsOpen(true)}>
          Add a new entry
        </button>
      </div>
      <div className="table-title">
        <div className="id-entry">ID</div>
        <div className="name-entry">Name</div>
        <div className="entry">Field 1</div>
        <div className="entry">Field 2</div>
        <div className="entry-options">Actions</div>
      </div>
      <FieldTile/>
      <FieldTile/>
      <FieldTile/>
      {isOpen && <SideModal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default ContentTypeBody;
