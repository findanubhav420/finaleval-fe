import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdContentCopy } from 'react-icons/md';
import './FieldTile.css';

function FieldTile() {
  return (
    <div className="entry-container">
      <div className="id-entry">1</div>
      <div className="name-entry">Name</div>
      <div className="entry">Text</div>
      <div className="entry">Text</div>
      <div className="entry-options">
        <MdContentCopy />
        <FaRegEdit />
        <RiDeleteBin6Line />
      </div>
    </div>
  );
}

export default FieldTile;
