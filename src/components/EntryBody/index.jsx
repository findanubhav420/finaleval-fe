import React, { useEffect, useState } from 'react';
import FieldTile from '../FieldTile';
import SideModal from '../SideModal';
import './EntryBody.css';
import { GET_ENTRY_BY_ID } from '../../constants/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import {GET_ALL_FIELDS_BY_CONTENT_TYPE_ID} from '../../constants/apiEndPoints';
import FieldLabel from '../fieldLabel';

function EntryBody({id}) {
  const [isOpen, setIsOpen] = useState(false);
  const [entryList, setEntryList] = useState();
  const [fieldList, setFieldList] = useState();
  const [entry,setEntry] = useState([]);
 
  useEffect(() => {
    makeRequest(GET_ENTRY_BY_ID(id)).then((response) => {
      setEntryList(response);
      // console.log(response[0]);
      return response;
    });

    makeRequest(GET_ALL_FIELDS_BY_CONTENT_TYPE_ID(id)).then((response) => {
      setFieldList(response[0].field_title);

      return response;
    });
  }, [id]);
  console.log(entry);
  console.log(isOpen);
  return (
    <div className="content-body-container">
      <div className="content-body-header">
        <div className="entries-number">13 Entries Found</div>
        <button className="add-entry" onClick={() => setIsOpen(true)}>
          Add a new entry
        </button>
      </div>
      <div className='headings'>
      {fieldList && fieldList.map((field) => {
        return (
          <FieldLabel field={field}/>
        );
      })
    }
    </div>
      {entryList && entryList.map((entry) => {
        return (
          <FieldTile entry={entry.entry} id={entry.id} setIsOpen={setIsOpen} setEntry={setEntry}/>
        );
      })}
      {isOpen && <SideModal setIsOpen={setIsOpen} entry={entry} fieldList={fieldList}/>}
    </div>
  );
}

export default EntryBody;
