import React from 'react';
import './Field.css';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import PropTypes from 'prop-types';

export default function Field({ name, type, deleteFieldHandler }) {
  const typeNotation = {
    string: 'Ab',
    number: '123',
    email: '@',
    text: 'Ab',
  };
  return (
    <div className="field-container">
      <div className="type-notation">{typeNotation[type.toLowerCase()]}</div>
      <div className="field-name">{name}</div>
      <div className="field-type">{type}</div>
      <div className="field-options">
        <FaRegEdit />
        <RiDeleteBin6Line onClick={() => deleteFieldHandler(name)} />
      </div>
    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  deleteFieldHandler: PropTypes.func.isRequired,
};
