import streams from '../apis/streams';
import history from '../history';

import {
    SIGN_IN, SIGN_OUT, EDIT_STREAM,
    CREATE_STREAM, FETCH_STREAMS,
    FETCH_STREAM, DELETE_STREAM
} from './types';

//import { formValues } from 'redux-form';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

//Note: we only care about 'data' from the response
// we get from 'axios'. so instead of 'return response'
// we do 'return response.data'
// Note: 'getState()' is used to obtain state values already in store
export const createStream = (formValues) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    // add userId to formValues record before creating stream
    const response =  await streams.post('/streams', {...formValues, userId: userId});
    dispatch({type: CREATE_STREAM, payload: response.data})
    // programmatically navigate user to 'stream list' page. 
    // This will enable the user to see whether the new stream was actually created
    history.push('/');
};


export const fetchStreams = () => async (dispatch) => {
    const response =  await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data})
};

export const fetchStream = (id) => {
    return async function (dispatch) {
        const response =  await streams.get(`/streams/${id}`);
        dispatch({type: FETCH_STREAM, payload: response.data})
    };
};

// Not using 'return async function (dispatch)...' is to allow
// execution to reach 'history.push('/')'...without which 
// programmatic navigation to homepage would not happen
export const editStream = (id, formValues) => async (dispatch) => {
    //const response =  await streams.put(`/streams/${id}`, formValues);
    const response =  await streams.patch(`/streams/${id}`, formValues);
    dispatch({type: EDIT_STREAM, payload: response.data})
    // programmatically navigate user to 'stream list' page. 
    // This will enable the user to see whether the new stream was actually created
    history.push('/')
};

export const deleteStream = (id) => async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({type: DELETE_STREAM, payload: id})
    history.push('/');
};