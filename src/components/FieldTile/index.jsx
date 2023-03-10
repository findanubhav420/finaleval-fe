import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdContentCopy } from 'react-icons/md';
import './FieldTile.css';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import { DELETE_ENTRY_BY_ID } from '../../constants/apiEndPoints';


function FieldTile({entry,id,setIsOpen,setEntry}) {
  const temp = Object.entries(entry);
  const entries=[["id",id],...Object.entries(entry)];
  

  const handleEdit = () => {
    setIsOpen(true);
    console.log(temp);
    setEntry(temp);
  };

  const handleDelete = async() => {
    await makeRequest(DELETE_ENTRY_BY_ID(id));
    window.location.reload();
  };

  return (
      <div className="field-tile">
        <div className="field-tile-single">
      {entries.map((entry) => {
        return (
          <div className="entry">{entry[1]}</div>
        );
      })}
      <div className="entry-options">
        
   
        <MdContentCopy />
        <button onClick={handleEdit}><FaRegEdit /></button>
        <button onClick={handleDelete}><RiDeleteBin6Line /></button>
      </div>
      </div>
    </div>
  );
}

export default FieldTile;
