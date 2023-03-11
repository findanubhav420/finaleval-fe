export const BACKEND_URL = 'http://localhost:8080';
export const AUTH_URL = 'http://localhost:4000';

export const LOGIN = {
  url: '/login',
  method: 'post'
};

export const REGISTER = {
  url: '/register',
  method: 'post'
};

export const CREATE_CONTENT_TYPE = {
  url: '/content_types',
  method: 'post'
};

export const GET_CONTENT_TYPES = {
  url: '/content_types',
  method: 'get'
};

export const GET_CONTENT_TYPE_BY_ID = (id) => {
  return {
    url: `/content_types/${id}`,
    method: 'get'
  };
};

export const UPDATE_CONTENT_TYPE_NAME = (id) => {
  return {
    url: `/content_types/${id}`,
    method: 'patch'
  };
};

export const UPDATE_FIELD = (id) => {
  return {
    url: `/content_types/${id}`,
    method: 'post'
  };
};

export const DELETE_FIELD= (id) => {
  return {
    url: `/content_types/${id}`,
    method: 'delete'
  };
};

export const GET_ALL_COLLECTIONS = {
  url: '/collections',
  method: 'get'
};

export const GET_COLLECTION_BY_ID = (id) => {
  return {
    url: `/collections/${id}`,
    method: 'get'
  };
};

export const CREATE_ENTRY = (id) => {
  return {
    url: `/collections/${id}/entries`,
    method: 'post'
  };
};

export const GET_ALL_ENTRIES_BY_COLLECTION= (id) => {
  return {
    url: `/collections/${id}/entries`,
    method: 'get'
  };
};

export const UPDATE_ENTRY = (collectionId, entryId) => {
  return {
    url: `/collections/${collectionId}/entries/${entryId}`,
    method: 'put'
  };
};

export const DELETE_ENTRY = (collectionId, entryId) => {
  return {
    url: `/collections/${collectionId}/entries/${entryId}`,
    method: 'delete'
  };
};






