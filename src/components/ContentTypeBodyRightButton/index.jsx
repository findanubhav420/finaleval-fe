import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';


function ContentTypeBodyRightButton({fieldArr, setFieldArr}) {

  const [modalIsOpen, setIsOpen] = useState(false);
  let inputValue;

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

  
  const createNewField = async () => {
    const newArr = [...fieldArr,inputValue];
    console.log('sending', newArr);
    setFieldArr(newArr);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    inputValue = e.target.value;
    console.log(inputValue);
  };

  console.log(modalIsOpen);

  return (
    <button className='border-2 border-dotted border-selected-type rounded-md p-3 text-selected-type' onClick={()=>setIsOpen(true)}>Add new Field
      <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={()=> setIsOpen(false)} ariaHideApp={false}>
        <h1>Create a new field</h1>
        <label>Name of the field</label><br />
        <input onChange={handleInputChange} className='border-2 border-new-type-button'></input><br />
        <button onClick={()=>setIsOpen(false)}>Cancel</button>
        <button onClick={createNewField}>Create</button>
      </Modal>
    </button>
  );
}

ContentTypeBodyRightButton.propTypes = {
  fieldArr: PropTypes.array,
  setFieldArr: PropTypes.func
};

export default ContentTypeBodyRightButton;
