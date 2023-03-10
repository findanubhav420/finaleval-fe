import React from 'react';
import './SideModal.css';
import PropTypes from 'prop-types';
import FieldLabel from '../fieldLabel';

export default function SideModal({ setIsOpen , entry, fieldList}) {

  console.log(entry)
  return (
    <>
      <div className="dark-bg" onClick={() => setIsOpen(false)} />
      <div className="right">
        <div className="side-modal">
          <div className="modal-header">
            <h5 className='heading'>New Company_Profile</h5>
          </div>
          <div className='search'>
          {
            fieldList && fieldList.map((field) => {
              return (
                <>
                <FieldLabel className="modal-content" field={field}/>
                <input type="text" className="modal-input" />
                </>
              );
            })
          }
          </div>

          <div className="modal-actions">
            <div className="actions-container">
              <button className="cancel-btn" onClick={()=>setIsOpen(false)}>Cancel</button>
              <button className="create-btn" onClick={()=>setIsOpen(false)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SideModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};