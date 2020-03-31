//memoize from lodash helps up avoid repeatitive function calls
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Another Solution that avoids over-fetching without using Memoize
// Example of action creator that calls another action creator
// getState is a function in redux that can be used to obtain
// state key/values in redux
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // Using lodash uniq + map functions on redux-getState to find unique userId's 
    // uniq will return array of userId's
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // iterate over userIds array and call fetchUser with each userId
    userIds.forEach(id => dispatch(fetchUser(id)));
    //NOTE: DOn't use forEach with 'await'
};

/* export const fetchPosts = async () => {
    //Bad approach!!!. Will not work with redux because of 'action-await' syntax
    // Causes the following error: Error: Actions must be plain objects. Use custom middleware for async actions.
    // So, a request object is returned instead of a plaine object. To fix it, we need to use redux-thunk
    const response = await jsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
}; */

// WORKS
/* export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: "FETCH_POSTS", payload: response})
}; */

// WORKS: Both action functions (up and down) are equivalent

export const fetchPosts = () => {
    return async function(dispatch){
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })
    };
};

// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// };

// USING MEMOIZE ON ACTION CREATOR
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });


export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};