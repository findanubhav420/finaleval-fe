import React, { useEffect, useState } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { makeRequest } from '../../utils/makeRequest';
import { GET_COLLECTION_BY_ID } from '../../constants/apiEndPoints';

export default function Header({title}) {
  const navigate = useNavigate();
  const { collectionId } = useParams();
  const [collectionTitle, setCollectionTitle] = useState('');
  {collectionId &&
  useEffect(()=>{
    makeRequest(GET_COLLECTION_BY_ID(collectionId), navigate).then((data) => setCollectionTitle(data.name));
  });
  }
  return <div className="header">{collectionId? collectionTitle: title}</div>;
}

Header.propTypes = {
  title: PropTypes.string,
};

