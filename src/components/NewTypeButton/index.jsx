import React, { useState } from 'react';
import Modal from 'react-modal';
import { CREATE_CONTENT_TYPE } from '../../constants/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest/makeRequest';

function NewTypeButton() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState();

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.50)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const createNewType = async () => {
    console.log('inputValue', inputValue)
    makeRequest(CREATE_CONTENT_TYPE,{
      data: {
        content_title: inputValue,
      }
    }).then(
      (response) => {
        Promise.resolve(response).then(() => {
          console.log('response', response);
          setIsOpen(false);
        });
      }
    );
  };

  return (
    <div className='flex'>
      <button onClick={()=> setIsOpen(true)} className='bg-new-type-button flex-1 text-selected-type border-2 border-dotted rounded-lg border-selected-type p-3'>+ New Type</button>
      <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={()=> setIsOpen(false)}>
        <h1>Create a new content type</h1>
        <label>Name of the content type</label><br />
        <input onChange={handleInputChange} className='border-2 border-new-type-button'></input><br />
        <button onClick={()=> setIsOpen(false)}>Cancel</button>
        <button onClick={createNewType}>Create</button>
      </Modal>
    </div>
  );
}

export default NewTypeButton;
