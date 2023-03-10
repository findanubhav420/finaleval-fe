export const BACKEND_URL = 'http://localhost:8080/';

export const GET_ALL_CONTENT_TYPE = {
  url: 'contentTypes',
  method: 'get'
};

export const CREATE_CONTENT_TYPE = {
  url: 'contentTypes',
  method: 'post'
};

export const GET_ALL_ENTRIES = {
    url: 'entries',
    method: 'get'
};

export const GET_ENTRY_BY_ID =(id)=> {
    return {
        url: `entries/${id}`,
        method: "get",
      };
};

export const CREATE_ENTRY_BY_ID =(id)=> {
    return{
    url: `entries/${id}`,
    method: 'post'
    };
};

export const GET_ALL_FIELDS_BY_CONTENT_TYPE_ID =(id)=> {
    return {
        url: `fields/${id}`,
        method: 'get'
    }
};

export const CREATE_FIELD_BY_CONTENT_TYPE_ID =(id)=> {
    return {
        url: `fields/${id}`,
        method: 'post'
    }
};

export const DELETE_ENTRY_BY_ID =(id)=> {
    return {
        url: `entries/${id}`,
        method: 'delete'
    }
}

export const UPDATE_ENTRY_BY_ID =(id)=> {
    return {
        url: `entries/${id}`,
        method: 'put'
    }
}

export const GET_ALL_FIELDS = (id) => ({
    url: `fields/${id}`,
    method: 'get'
});
  
  
export const UPDATE_FIELD = (id) => ({
    url: `fields/${id}`,
    method: 'put'
});














