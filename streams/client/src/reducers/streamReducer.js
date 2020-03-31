
import _ from 'lodash';
// Using _.omit from lodash to remove key from state dictionary
// Using _.mapKeys() from lodash to map dict-elements in arrays to 
// values in new dictionary using specified keys in the dict_elements
// as keys, and dict_elements as values in the new dictionary
// ex: [{id: 1, test: 'hshsh'}, {id: 2, test: 'jsjsj'}]
// {1: {id: 1, test: 'hshsh'}, 2: {id: 2, test: jsjsj'}}
import {
    EDIT_STREAM, CREATE_STREAM, FETCH_STREAM,
    FETCH_STREAMS, DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    const newState = {...state};
    switch (action.type) {

        case FETCH_STREAM:
            newState[action.payload.id] = action.payload;
            return newState;

        case CREATE_STREAM:
            newState[action.payload.id] = action.payload;
            return newState;
        
        case EDIT_STREAM:
            newState[action.payload.id] = action.payload;
            return newState;
        
            // USED LODASH HERE TO REMOVE KEY
            // NOTE: _.omit does not modify state object, instead it returns a new state
        case DELETE_STREAM:
            return _.omit(state, action.payload);

            // USING _.mapKeys()
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
            // const newState = {...state};
            // action.payload.forEach(function(item) {
            //     newState[item.id] = item;
            // });
            // return newState;
        default:
            return state;
    }
};