/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import './ContentTypeBody.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import ContentType from '../ContentType';
import Field from '../Field';
import Modal from '../Modal';
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../utils/makeRequest';
import {
  UPDATE_FIELD,
  CREATE_CONTENT_TYPE,
  DELETE_FIELD,
  GET_CONTENT_TYPES,
  UPDATE_CONTENT_TYPE_NAME,
} from '../../constants/apiEndPoints';

export default function ContentTypeBody() {
  const navigate = useNavigate();
  const [fieldList, setFieldList] = useState([]);
  const [selectedContentType, setSelectedContentType] = useState({});
  const [contentTypes, setContentTypes] = useState([]);
  const selectedContentTypeHandler = (contentType) => {
    setSelectedContentType(contentType);
  };
  useEffect(() => {
    if (localStorage.getItem('token') === null) navigate('/login');
    makeRequest(GET_CONTENT_TYPES, navigate).then((res) => {
      setContentTypes(res);
      console.log(res);
      if(res){
        setSelectedContentType(res[0]);
      }
    });
  }, []);

  useEffect(() => {
    const fields = [];
    for (const field in selectedContentType?.fields) {
      fields.push([field, selectedContentType?.fields[field]]);
    }
    setFieldList(fields);
  }, [selectedContentType]);

  const addContentTypesHandler = (name) => {
    makeRequest(CREATE_CONTENT_TYPE, navigate, {
      data: {
        name,
      },
    }).then((res) => {
      setContentTypes([...contentTypes, res]);
    });
  };

  const addFieldHandler = (name, type) => {
    makeRequest(UPDATE_FIELD(selectedContentType?.id), navigate, {
      data: {
        name,
        type,
      },
    }).then((res) => {
      const fields = res.fields;
      fields[name] = type;
      setSelectedContentType({ ...selectedContentType, fields });
    });
  };

  const deleteFieldHandler = (name) => {
    makeRequest(DELETE_FIELD(selectedContentType?.id), navigate, {
      data: {
        name,
      },
    }).then((res) => {
      const fields = res.fields;
      delete fields[name];
      setSelectedContentType({ ...selectedContentType, fields });
    });
  };
  const updateContentTypeNameHandler = (name) => {
    makeRequest(
      UPDATE_CONTENT_TYPE_NAME(selectedContentType?.id),
      navigate,
      {
        data: {
          name,
        },
      }
    ).then((res) => {
      const updatedContentTypes = contentTypes.map((contentType) => {
        if (contentType.id === res.id) {
          return res;
        }
        return contentType;
      });
      setContentTypes(updatedContentTypes);
      setSelectedContentType(res);
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState({});
  const showAddNewContentModal = () => {
    modalOptions.heading = 'Add New Content Type';
    modalOptions.inputHeading = 'Name of the content type';
    setModalOptions(modalOptions);
    setIsOpen(true);
  };
  const showAddNewFieldModal = () => {
    modalOptions.heading = 'Add New Field';
    modalOptions.inputHeading = 'Name of the field';
    modalOptions.typeHeading = 'Type of the field';
    setModalOptions(modalOptions);
    setIsOpen(true);
  };
  const showEditContentTypeNameModal = () => {
    modalOptions.heading = 'Edit Content Type Name';
    modalOptions.inputHeading = 'Name of the content type';
    modalOptions.inputData = selectedContentType?.name;
    setModalOptions(modalOptions);
    setIsOpen(true);
  };
  return (
    <div className="content-container">
      <div className="content-inner-container">
        <div className="nav">
          <p style={{ fontSize: '8px' }}>{contentTypes.length} Types</p>
          <AiOutlineSearch />
        </div>
        <button className="new-type" onClick={showAddNewContentModal}>
          + New Type
        </button>
        {contentTypes?.map((contentType) => (
          <ContentType
            contentType={contentType}
            key={contentType.id}
            selectedContentTypeHandler={selectedContentTypeHandler}
            isActive={selectedContentType?.id === contentType.id}
          />
        ))}
      </div>
      <div className="field-tile">
        {selectedContentType && (
          <>
            <div className="new-file">
              <p id="content-type-name">
                {selectedContentType?.name}
              </p>
              <FiEdit2 size={12} onClick={showEditContentTypeNameModal} />
            </div>
            <p id="content-field">
              {selectedContentType?.fields && fieldList.length} Fields
            </p>
          </>
        )}
        <div className="content-field">
          <button
            className="add-new"
            style={{ width: '90%' }}
            onClick={showAddNewFieldModal}
          >
            Add a new field
          </button>
          {selectedContentType?.fields &&
            fieldList.map((field) => {
              return (
                <Field
                  name={field[0]}
                  type={field[1]}
                  deleteFieldHandler={deleteFieldHandler}
                />
              );
            })}
        </div>
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          modalOptions={modalOptions}
          setModalOptions={setModalOptions}
          addContentTypesHandler={addContentTypesHandler}
          addFieldHandler={addFieldHandler}
          updateContentTypeNameHandler={updateContentTypeNameHandler}
        />
      )}
    </div>
  );
}
