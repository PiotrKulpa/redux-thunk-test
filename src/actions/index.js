import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


// we can return function here not only object
export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceholder('posts');

// pass data to store
    dispatch({ type: 'FETCH_POSTS', payload: res });
  };

// loop problem - to many requests
// export const fetchUser = (id) => async dispatch => {
//     const res = await jsonPlaceholder(`users/${id}`);
//
//     dispatch({ type: 'FETCH_USER', payload: res });
//   };

// loop problem solution is lodash mamoize method
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonPlaceholder(`users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: res });
});
